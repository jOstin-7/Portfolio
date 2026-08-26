
import './styles/index.css'
import PageHeader from './PageHeader.jsx';
function App() {
  return (
    <>
    {/*  */}
    {/* Page Header */}
    <PageHeader />
    {/* partitions */}  
      <div className="partitions" id="home">
        home
      </div>
      <div className="partitions" id="about">
        about
      </div>
      <div className="partitions" id="skills">
        skills
      </div>
      <div className="partitions" id="services">
        services
      </div>
      <div className="partitions" id="contact">
        contact
      </div>
      <div className="footer"></div>
    </>
  );
}
export default App;
