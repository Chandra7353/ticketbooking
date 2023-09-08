import Footer from "./Footer";
import Navbar from "./Navbar";


const Home = () => {
    return ( <div className="homebody" >

        <Navbar/>
      <div>
        <img src="https://thumbs.dreamstime.com/b/paper-cut-india-landmark-travel-tourism-concept-paper-cut-india-landmark-travel-tourism-concept-eps-vector-213260371.jpg" alt="" />
        
         
          <button>BUS</button>
          <button>FLIGHT</button>
         
      </div>
    

        <Footer/>
    </div> );
}
 
export default Home;