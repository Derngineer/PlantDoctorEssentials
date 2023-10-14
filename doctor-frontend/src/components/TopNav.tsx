import { Fragment } from "react";
import "./TopNav.css"






const TopNav =() =>{


    return(
    <Fragment>

<nav className="navbar navbar-expand-lg navbar-dark fixed-top mb-5">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home"><img src="/plant-removebg-preview.png" alt="Banner Image" className="img-fluid" style={{height:"60px",width:"200px", objectFit:"cover"}}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="/home" style={{color:"black"}}>PRESCRIPTION</a>
        <a className="nav-link" href="/safety-policy" style={{color:"black"}}>SAFETY & POLICY</a>
        <a className="nav-link" href="/contactus" style={{color:"black"}} >CONTACTS</a>
        {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
      </div>
    </div>
  </div>
</nav>
    </Fragment>

    )
}


export default TopNav;