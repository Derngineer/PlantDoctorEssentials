import { Fragment } from "react";
import Footer from "../components/Footer.tsx"; // Add 'from' keyword
import TopNav from "../components/TopNav.tsx";

const SafetyPolicy =() =>{
    return(
    <Fragment>
    <TopNav></TopNav>
    <div style={{height:"100px"}}></div>
     <div className="card m-lg-4" style={{padding:"80px", fontFamily:"Montserrat"}}>
      <div className="card-header">
        Safety & Policy
      </div>
      <div className="card-body">
        <h5 className="card-title">Safety Guidelines</h5>
        <p className="card-text">
          Please follow these safety guidelines when using the Plant Detector app:
        </p>
        <ul>
          <li>Ensure the uploaded images are of the plant's leaves only.</li>
          <li>Do not upload inappropriate or unrelated images.</li>
          <li>Use the app responsibly and for intended purposes.</li>
        </ul>

        <h5 className="card-title">Privacy Policy</h5>
        <p className="card-text">
          Our Privacy Policy outlines how your data is collected and used:
        </p>
        <p className="card-text">
          We collect and store images for the sole purpose of plant detection. Your data is not shared with third parties.
        </p>

        <h5 className="card-title">Terms of Service</h5>
        <p className="card-text">
          By using the Plant Detector app, you agree to our Terms of Service:
        </p>
        <p className="card-text">
          You must be at least 18 years old to use this service. Misuse of the app may result in a ban.
        </p>
      </div>
    </div>
    <Footer></Footer>


        </Fragment>
    )
};

export default SafetyPolicy;


 
