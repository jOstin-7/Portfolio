import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';

const DEFAULT_ITEMS = [
  {
    image: 'https://picsum.photos/seed/depth1/800/1000',
    alt: 'Slide 1',
    title: 'First Slide',
    caption: 'A short description goes here.'
  },
  {
    image: 'https://picsum.photos/seed/depth2/800/1000',
    alt: 'Slide 2',
    title: 'Second Slide',
    caption: 'Another description for this card.'
  },
  {
    image: 'https://picsum.photos/seed/depth3/800/1000',
    alt: 'Slide 3',
    title: 'Third Slide',
    caption: 'Add whatever text you like.'
  },
  {
    image: 'https://picsum.photos/seed/depth4/800/1000',
    alt: 'Slide 4',
    title: 'Fourth Slide',
    caption: 'Titles and captions are optional.'
  },
  {
    image: 'https://picsum.photos/seed/depth5/800/1000',
    alt: 'Slide 5',
    title: 'Fifth Slide',
    caption: 'Each card can have its own text.'
  },
  {
    image: 'https://picsum.photos/seed/depth6/800/1000',
    alt: 'Slide 6',
    title: 'Sixth Slide',
    caption: 'The last card in the stack.'
  }
];

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const normalizeItem = it =>
  typeof it === 'string' ? { image: it, alt: '', title: '', caption: '' } : it;

const DepthCarousel = ({
  items = DEFAULT_ITEMS,
  cardWidth = 300,
  cardHeight = 380,
  radius = 18,
  tint = '#05060a',
  depth = 220,
  spread = 90,
  tilt = 22,
  tiltDirection = 'right',
  perspective = 1400,
  visibleCards = 4,
  falloff = 0.2,
  blur = 6,
  duration = 700,
  ease = 'power3.out',
  autoplay = false,
  autoplayDelay = 3200,
  loop = true,
  showControls = true,
  showIndicators = true,
  showText = true,
  textOnlyOnActive = false,
  buttonsOnly = true,
  maxScale = 1.25,
  onChange,
  className = ''
}) => {
  const data = useMemo(() => (Array.isArray(items) ? items : []).map(normalizeItem), [items]);
  const count = data.length;

  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const overlayRefs = useRef([]);

  const posRef = useRef(0);
  const focusRef = useRef(0);
  const tweenRef = useRef(null);
  const scaleRef = useRef(1);
  const cfgRef = useRef({});
  const onChangeRef = useRef(onChange);

  const dragRef = useRef(null);
  const wheelTimerRef = useRef(null);
  const autoTimerRef = useRef(null);
  const reducedRef = useRef(false);

  const [active, setActive] = useState(0);

  onChangeRef.current = onChange;
  cfgRef.current = {
    count,
    depth,
    spread,
    tilt,
    tiltDirection,
    visibleCards,
    falloff,
    blur,
    duration,
    ease,
    loop,
    cardWidth,
    cardHeight,
    maxScale,
    perspective,
    autoplayDelay
  };

  const layout = useCallback(pos => {
    const cfg = cfgRef.current;
    const n = cfg.count;
    if (!n) return;
    const dir = cfg.tiltDirection === 'left' ? -1 : 1;
    const sc = scaleRef.current;

    for (let i = 0; i < n; i++) {
      const el = cardRefs.current[i];
      if (!el) continue;

      let d = i - pos;
      if (cfg.loop && n > 1) {
        d = ((d % n) + n) % n;
        if (d > n / 2) d -= n;
      }

      const back = Math.max(0, d);
      const az = Math.abs(d);
      const shown = az <= cfg.visibleCards + 0.5;

      const tz = -cfg.depth * d;
      const tx = dir * cfg.spread * d;
      const ry = dir * cfg.tilt * clamp(d, 0, 1);

      let opacity = d < 0 ? Math.max(0, 1 + d) : 1;
      if (!shown) opacity = 0;

      const brightness = Math.max(0.15, 1 - back * cfg.falloff);
      const blurPx = cfg.blur > 0 ? Math.min(cfg.blur, (back / Math.max(1, cfg.visibleCards)) * cfg.blur) : 0;
      const zi = Math.round(2000 - d * 20);

      el.style.transform = `translate(-50%, -50%) scale(${sc}) translateX(${tx.toFixed(2)}px) translateZ(${tz.toFixed(2)}px) rotateY(${ry.toFixed(3)}deg)`;
      el.style.opacity = opacity.toFixed(3);
      el.style.filter = `brightness(${brightness.toFixed(3)}) blur(${blurPx.toFixed(2)}px)`;
      el.style.zIndex = String(zi);
      el.style.pointerEvents = shown && opacity > 0.05 ? 'auto' : 'none';

      const ov = overlayRefs.current[i];
      if (ov) ov.style.opacity = clamp(back * cfg.falloff * 1.25, 0, 0.86).toFixed(3);
    }
  }, []);

  const notify = useCallback(
    idx => {
      setActive(idx);
      onChangeRef.current?.(idx, data[idx]);
    },
    [data]
  );

  const tweenTo = useCallback(
    (target, animate) => {
      tweenRef.current?.kill();
      const cfg = cfgRef.current;
      const proxy = { p: posRef.current };
      const dur = animate && !reducedRef.current ? cfg.duration / 1000 : 0;
      tweenRef.current = gsap.to(proxy, {
        p: target,
        duration: dur,
        ease: cfg.ease,
        onUpdate: () => {
          posRef.current = proxy.p;
          layout(proxy.p);
        },
        onComplete: () => {
          const n = cfg.count;
          if (n > 0) posRef.current = ((posRef.current % n) + n) % n;
          layout(posRef.current);
        }
      });
    },
    [layout]
  );

  const setFocus = useCallback(
    (rawIndex, animate = true) => {
      const cfg = cfgRef.current;
      const n = cfg.count;
      if (!n) return;
      const idx = cfg.loop ? ((rawIndex % n) + n) % n : clamp(rawIndex, 0, n - 1);
      let delta = idx - posRef.current;
      if (cfg.loop && n > 1) {
        delta = ((delta % n) + n) % n;
        if (delta > n / 2) delta -= n;
      }
      tweenTo(posRef.current + delta, animate);
      if (idx !== focusRef.current) {
        focusRef.current = idx;
        notify(idx);
      }
    },
    [tweenTo, notify]
  );

  const navigateBy = useCallback(step => setFocus(focusRef.current + step, true), [setFocus]);

  const applySize = useCallback(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage) return;
    const cfg = cfgRef.current;
    const w = root.clientWidth;
    // Half-width of the widest card in the stack, after perspective shrink.
    let extent = cfg.cardWidth / 2;
    for (let d = 1; d <= cfg.visibleCards; d++) {
      const x = (Math.abs(cfg.spread) * d + cfg.cardWidth / 2) * (cfg.perspective / (cfg.perspective + cfg.depth * d));
      extent = Math.max(extent, x);
    }
    const needed = extent * 2 + 40;
    const widthScale = w / needed;
    // Also fit the viewport height (cards + the button row beneath them).
    const availH = (typeof window !== 'undefined' ? window.innerHeight : 800) * 0.85 - 96;
    const heightScale = availH / cfg.cardHeight;
    scaleRef.current = clamp(Math.min(widthScale, heightScale), 0.15, cfg.maxScale);
    // Stage height tracks the scaled card so the controls sit right beneath it.
    stage.style.height = `${Math.round(cfg.cardHeight * scaleRef.current + 24)}px`;
    layout(posRef.current);
  }, [layout]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    // Observe width only, so changing the stage height can't retrigger it.
    let lastW = -1;
    const ro = new ResizeObserver(entries => {
      const w = Math.round(entries[0].contentRect.width);
      if (w === lastW) return;
      lastW = w;
      applySize();
    });
    ro.observe(root);
    // Window resize (including browser zoom) also changes the available height.
    window.addEventListener('resize', applySize);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', applySize);
    };
  }, [applySize]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || buttonsOnly) return;
    const onWheel = e => {
      const cfg = cfgRef.current;
      if (cfg.count < 2) return;
      e.preventDefault();
      tweenRef.current?.kill();
      const raw = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const delta = e.deltaMode === 1 ? raw * 24 : raw;
      const step = clamp(delta / (cfg.cardWidth * 0.9), -0.6, 0.6);
      posRef.current += step;
      layout(posRef.current);
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
      wheelTimerRef.current = setTimeout(() => setFocus(Math.round(posRef.current), true), 130);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
    };
  }, [layout, setFocus, buttonsOnly]);

  const onPointerDown = useCallback(e => {
    const cfg = cfgRef.current;
    if (cfg.count < 2) return;
    tweenRef.current?.kill();
    dragRef.current = {
      x: e.clientX,
      startPos: posRef.current,
      lastX: e.clientX,
      lastT: performance.now(),
      v: 0,
      moved: false,
      id: e.pointerId
    };
  }, []);

  const onPointerMove = useCallback(
    e => {
      const drag = dragRef.current;
      if (!drag) return;
      const cfg = cfgRef.current;
      const stepPx = Math.max(cfg.cardWidth * 0.55 * scaleRef.current, 40);
      const dx = e.clientX - drag.x;
      if (!drag.moved && Math.abs(dx) > 4) {
        drag.moved = true;
        rootRef.current?.setPointerCapture(drag.id);
      }
      if (!drag.moved) return;
      const now = performance.now();
      const dt = Math.max(now - drag.lastT, 1);
      drag.v = (e.clientX - drag.lastX) / dt;
      drag.lastX = e.clientX;
      drag.lastT = now;
      posRef.current = drag.startPos - dx / stepPx;
      layout(posRef.current);
    },
    [layout]
  );

  const onPointerEnd = useCallback(() => {
    const drag = dragRef.current;
    if (!drag) return;
    dragRef.current = null;
    if (!drag.moved) return;
    const cfg = cfgRef.current;
    const stepPx = Math.max(cfg.cardWidth * 0.55 * scaleRef.current, 40);
    const projected = posRef.current - (drag.v * 180) / stepPx;
    setFocus(Math.round(projected), true);
  }, [setFocus]);

  const onKeyDown = useCallback(
    e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateBy(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateBy(1);
      }
    },
    [navigateBy]
  );

  const onCardClick = useCallback(
    index => {
      if (buttonsOnly || dragRef.current?.moved) return;
      setFocus(index, true);
    },
    [setFocus, buttonsOnly]
  );

  useEffect(() => {
    reducedRef.current = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!autoplay || reducedRef.current || count < 2) return;
    const root = rootRef.current;
    let hovered = false;
    let focused = false;
    const stop = () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    };
    const start = () => {
      stop();
      autoTimerRef.current = window.setInterval(
        () => {
          if (!hovered && !focused) navigateBy(1);
        },
        Math.max(cfgRef.current.autoplayDelay, 600)
      );
    };
    const onEnter = () => {
      hovered = true;
    };
    const onLeave = () => {
      hovered = false;
    };
    const onFocusIn = () => {
      focused = true;
    };
    const onFocusOut = () => {
      focused = false;
    };
    root?.addEventListener('mouseenter', onEnter);
    root?.addEventListener('mouseleave', onLeave);
    root?.addEventListener('focusin', onFocusIn);
    root?.addEventListener('focusout', onFocusOut);
    start();
    return () => {
      stop();
      root?.removeEventListener('mouseenter', onEnter);
      root?.removeEventListener('mouseleave', onLeave);
      root?.removeEventListener('focusin', onFocusIn);
      root?.removeEventListener('focusout', onFocusOut);
    };
  }, [autoplay, autoplayDelay, count, navigateBy]);

  useEffect(() => {
    applySize();
  }, [applySize, depth, spread, tilt, tiltDirection, visibleCards, falloff, blur, cardWidth, cardHeight, radius, count, maxScale, perspective]);

  useEffect(
    () => () => {
      tweenRef.current?.kill();
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    },
    []
  );

  const dragProps = buttonsOnly
    ? {}
    : {
        onPointerDown,
        onPointerMove,
        onPointerUp: onPointerEnd,
        onPointerCancel: onPointerEnd
      };

  const navBtn =
    'grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full border border-white/20 bg-[rgba(18,20,26,0.55)] text-white backdrop-blur-md transition-[background,border-color,transform] duration-200 hover:border-white/40 hover:bg-[rgba(28,31,40,0.85)] active:scale-95';

  return (
    <div
      ref={rootRef}
      className={`relative flex h-full min-h-[320px] w-full select-none flex-col items-center justify-center gap-4 outline-none focus-visible:rounded-xl focus-visible:outline-2 focus-visible:outline-white/50 focus-visible:[outline-offset:4px] ${
        buttonsOnly ? '' : 'cursor-grab touch-pan-y active:cursor-grabbing'
      } ${className}`.trim()}
      role="group"
      aria-roledescription="carousel"
      aria-label="Depth carousel"
      tabIndex={0}
      onKeyDown={onKeyDown}
      {...dragProps}
    >
      <div
        ref={stageRef}
        className="relative w-full [perspective-origin:50%_50%]"
        style={{ perspective: `${perspective}px`, height: cardHeight + 24 }}
      >
        <div className="absolute inset-0 [transform-style:preserve-3d]">
          {data.map((item, i) => {
            const hasText = Boolean(item.title || item.caption);
            const textVisible = showText && hasText && (!textOnlyOnActive || active === i);

            return (
              <div
                key={i}
                className={`absolute left-1/2 top-1/2 overflow-hidden bg-[#0b0d12] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65),0_8px_20px_-10px_rgba(0,0,0,0.5)] [transform:translate(-50%,-50%)] [transform-origin:center] [will-change:transform,opacity,filter] ${
                  buttonsOnly ? '' : 'cursor-pointer'
                }`}
                ref={el => (cardRefs.current[i] = el)}
                style={{ width: cardWidth, height: cardHeight, borderRadius: radius }}
                aria-roledescription="slide"
                aria-label={item.title ? `${item.title}, ${i + 1} of ${count}` : `${i + 1} of ${count}`}
                aria-hidden={active !== i}
                onClick={() => onCardClick(i)}
              >
                <img
                  className="block h-full w-full select-none object-cover pointer-events-none [-webkit-user-drag:none]"
                  src={item.image}
                  alt={item.alt || ''}
                  draggable={false}
                />

                {showText && hasText && (
                  <div
                    className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-14 text-white transition-opacity duration-300 ${
                      textVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {item.title && (
                      <h3 className="m-0 text-lg md:text-4xl font-semibold leading-tight">{item.title}</h3>
                    )}
                    {item.caption && (
                      <p className="m-0 mt-1 text-sm  md:text-xl leading-snug text-white/80">{item.caption}</p>
                    )}
                  </div>
                )}

                <span
                  className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply"
                  ref={el => (overlayRefs.current[i] = el)}
                  style={{ background: tint }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {(showControls || showIndicators) && count > 1 && (
        <div className="relative z-[3000] flex items-center gap-3">
          {showControls && (
            <button type="button" className={navBtn} aria-label="Previous slide" onClick={() => navigateBy(-1)}>
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M15 5l-7 7 7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {showIndicators && (
            <div
              className="flex gap-2 rounded-full bg-[rgba(14,16,22,0.4)] px-3 py-2 backdrop-blur-sm"
              role="tablist"
              aria-label="Slides"
            >
              {data.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-[7px] cursor-pointer rounded-full transition-[width,background] duration-[250ms] ${
                    active === i ? 'w-5 bg-white' : 'w-[7px] bg-white/30'
                  }`}
                  onClick={() => setFocus(i, true)}
                />
              ))}
            </div>
          )}

          {showControls && (
            <button type="button" className={navBtn} aria-label="Next slide" onClick={() => navigateBy(1)}>
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M9 5l7 7-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DepthCarousel;