import { Link} from "react-router-dom";
function Home() {
    return ( 
        <div>
        
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
      <h2>Home page</h2>
        <Link to="/register">Register </Link>
      </div>
      </div>
        </div>
     );
}

export default Home;