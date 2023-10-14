import { Fragment } from 'react'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import ImageUpload from "./components/ImageUpload"
import Instructions from './components/Instructions'

function App() {



  return (<Fragment>

<div className="gradient-background">
<TopNav></TopNav>
<div className='row' style={{minHeight:"100px"}}>
</div>
<ImageUpload />
<Instructions></Instructions>
  
<Footer />
</div>
</Fragment>
)
}
export default App
