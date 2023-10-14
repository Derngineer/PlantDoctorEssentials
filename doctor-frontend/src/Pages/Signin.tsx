// SignIn.js
import { Fragment, useState } from 'react';
import Footer from "../components/Footer.tsx"; // Add 'from' keyword
import TopNav from '../components/TopNav.tsx';
import "./signin.css"


function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignIn = () => {
    // Simulate authentication logic (e.g., check credentials)
    if (username === 'Farmer' && password === '12345') {
      setAuthenticated(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleSignOut = () => {
    setAuthenticated(false);
  };

  return (<Fragment>


    <div className='page-body'>

      {authenticated ? (
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
         <TopNav />
         <p style={{fontFamily:"Montserrat"}}>Heyy, {username}!</p>
         <p style={{fontFamily:"Montserrat"}}>Click prescription to start diagnosing and getting your plant solutions!😃</p>
         <button
           type="submit"
           className="btn btn-primary"
           style={{ background: "white", borderColor: "black", color: "black" }}
           onClick={handleSignOut}
         >
           Sign Out
         </button>
         <Footer></Footer>
       </div>
      ) : (
          
          <div className='container justify-content-center'>
             <div className="row m-5" style={{padding: "40px",background:"linear-gradient(to bottom, #7FFFD4,#097969)",borderRadius:"20px",
             boxShadow:" 0px 0px 10px rgba(0, 0, 0, 0.9)",
             
            }}>
            <div className="col-12">
             <div className='col-2'></div>
             <form className="form col-8" style={{color:"white"}}>
              <img src='/plant-removebg-preview.png' style={{height:"200px"}}></img>
             <div>⚠️Only use the following credentials
                <p>username: Farmer </p>
                <p>password: 12345 </p>
              </div>

              <div className="mb-3 col-md-6">
              <label className="form-label">Username</label>
               <input
                type="text"
                className="form-control"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Password</label>
              <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <button
                    type="submit"
                    className="btn btn-primary mt-3"
                    style={{ background: "white", borderColor: "black",color:"black" }}
                    onClick={handleSignIn}
                  >
                    Sign In
            </button>
              <div id="emailHelp" className="form-text">
                We'll never share your data with anyone else.

          <label className="form-check-label">Check me out</label>
              </div>
            </div>


             </form>
             <div className='col-2'></div>
 
          </div></div>
          
        </div>
      )}

    </div>
    
    </Fragment>);
}

export default SignIn;
