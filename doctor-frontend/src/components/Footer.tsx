import { Fragment } from "react";
// import '/Users/mac/myproject_3/env/doctor-frontend/src/Footer.css'


const Footer =() => {
    return(
<Fragment>
<footer className="text-center text-white mt-5"  style={{ position: 'fixed', bottom: '0', left: '0', right: '0', backgroundColor: 'black', textAlign: 'center' }}>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: <a className="text-white">IFTA AI beta </a>
        © 2023 Copyright: <a className="text-white" href="/">logout</a>
      </div>
    </footer>

</Fragment> )
}
export default Footer;