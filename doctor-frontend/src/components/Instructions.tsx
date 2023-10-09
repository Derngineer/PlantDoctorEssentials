import { Fragment } from "react";


const Instructions =()=>{


    return(<Fragment>
 <div className="card m-5" style={{fontFamily:"Helvetica",fontSize:"18px"}}>
        <div className="card-header">
            INSTRUCTIONS⚠️
        </div>
        <div className="card-body">
      <div className="row m-5" style ={{fontSize:"14px", fontFamily:"Montserrat"}}>
      <p>☞Take a picture of your diseased plant</p>
      <p>☞From the drop down menu pick the right plant name</p>
      <p>☞Submit your form</p>
      <p>☞If the counter start it means your request has been sent</p>
      <p>☞The counter will run till the disease is detected and the prescription is available</p>
      <p>☞Press similar problems to see plants with similar issues on google and get more data</p>
      <p>☞ Read your prescription</p>
      <p>Happy farming 😇</p>
      <p><cite>Data is generate by AI & llms and thus subject to  llm hallucinations and computer errors</cite></p>
    </div>
  </div>
 </div>
</Fragment>)


}

export default Instructions;