import "./styles/index.css";
import "./styles/footer.css";

function Pagefooter({ isLightMode }) {
  return (
    <>
      <div className="footer">
       <div className="name-text">
         <div className="foot-name">
          <span
            className={`ease-in-out duration-400 ${isLightMode ? "text-white" : "text-gray-800"}`}
          >
            JUSTIN.
          </span>
          <span className="text-blue-500">DEV</span>
        </div>
        <span className="justify-between">A BS Information Technology student that develops web systems and programs </span>
       </div>


      </div>
      <div className="cprt-build">
            <div className="rights">© 2026 Justin Adrian Reboton All rights reserved</div> 
            <div className="build">Made with React and Tailwind CSS</div>
      </div>
    </>
  );
}

export default Pagefooter;
