import { Link } from "react-router-dom";
import { isAuthenticated,handleLogout,user} from "./Login";
import "./Navbar.css"


export default function NavBar(){

  
  return(
    
   <>   
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid  mt-0 pt-0 text-green">
    <h3 className="navbar-brand">React</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          {isAuthenticated?  <Link className="nav-link" to="/fetchdata">Fetch Data</Link>:<Link className="nav-link" to='/failed'>Fetch Data</Link>}
        </li>
        
       
      </ul>
    {isAuthenticated?  <div  className="activeuser">
       <h5 className="activation">{user}</h5>
      </div>:undefined}
      <form className="d-flex" role="search">
      {isAuthenticated ?<Link to='/' > <button className="btn btn-success" type="submit" 
      onClick={handleLogout} >LogOut</button></Link>
      :<Link to="/login"> <button className="btn btn-success" type="submit">Log-In</button></Link>}
      </form>
    </div>
  </div>
</nav>
   </> 
  )
}