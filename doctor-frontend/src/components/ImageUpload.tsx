import  { useState,useEffect } from 'react';
import axios from 'axios';
import TimeCounter from './TimeCounter';
import Video from './Video';

function ImageUpload() {

  const [isCounting, setIsCounting] = useState(false);

  const startCounter = () => {
    setIsCounting(true);
  };

  const stopCounter = () => {
    setIsCounting(false);
  };




  const [image, setImage] = useState(null);
  const [plantName, setPlantName] = useState('');
  const [result, setResult] =useState('');
  const [disease, setDisease] = useState('');
  const [prescription, setPrescription] = useState('');
  const [errorMessage, setErrorMessage] =useState("")

  const googleImageUrl = `https://www.google.com/images?q=${disease}`;

  const formIsValid = () => {
    if (!image) {
      setErrorMessage('Please select an image.'); // Display an error message
      return false;
    }
    if (!plantName) {
      setErrorMessage('Please select a plant.'); // Display an error message
      return false;
    }
    setErrorMessage(''); // Clear any previous error message
    return true;
  };


  const handleImageChange =(e)=> {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append('image', image);
    formData.append('plant_name', plantName);
    
 

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/predict/', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });

      setResult(response.data.status);
      setDisease(response.data.predicted_class);
      setPrescription(response.data.prescription);
      console.log(response.data);

    } catch (error) {
      console.error(error);
      setResult("an error occured");
    }

    };

    useEffect(() => {
      // When the disease text changes, automatically stop the counter
      if (disease !== "") {
        stopCounter();
      }
    }, [disease]);

  return (

    <div className='mt-5'>
      <div className="row m-5">
        <div className ="col-md-4" style={{fontFamily:"Montserrat"}}>
          
          <form onSubmit={(e) => {
                  e.preventDefault(); // Prevent the default form submission
                  if (formIsValid()) { // You need to implement form validation logic here
                    handleSubmit(e); // Call the handleSubmit function if the form is valid
                    startCounter(); // Call the startCounter function
                  }
              }} encType="multipart/form-data">

          <div className="mb-3">
          <label  className="form-label">Upload leaf image</label>
          <input 
          type="file" 
          accept="image/jpeg,image/png,image/gif"
          onChange={handleImageChange}
          className="form-control" 
          id="formFile"/>
          </div>

          <select           
            placeholder="Plant Name"
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
            className="form-select" aria-label="Default select example"
            >

            <option value="">Open this select menu</option>
            <option value="corn_maize">corn_maize</option>
            <option value="grapes">grapes</option>
            <option value="tomato">tomato</option>
            <option value="potato">potato</option>
          </select>

          <br></br>
          <button type="submit" className="btn btn-outline-dark  rounded-0">Get Prescription</button>
          </form> 
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <TimeCounter isCounting={isCounting}   />
        </div>




<div className ="col-md-7" style={{fontFamily:"Montserrat"}}>            
    <div>
      <p> RESULT: </p>
      <div className="card bg-light p-3 shadow">
          <div className="card-header">
            API connection result
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{result}</p>
              <footer className="blockquote-footer"><cite title="Source Title"> 200-success 300 -redirect - 400 client side error 500 server side error </cite></footer>
            </blockquote>
          </div>
        </div>
      <br></br>
      <p>DISEASE: </p>
     <div className="card bg-light p-3 shadow">
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">{disease}</p>
        <a href={googleImageUrl} target="_blank" className="btn btn-outline-dark rounded-0">similar problems</a>
      </div>
    </div>

      <br></br>
      <p>PRESCRIPTION: </p>
        <div className="card bg-light p-3 shadow mb-5">
          <div className="card-body">
          <div dangerouslySetInnerHTML={{ __html:prescription }} style={{fontSize:"14px"}}></div>
          </div>
        </div>  
        <br></br>
        <p>HELP: </p>    
        <Video />

      </div>
    </div>     
    </div>
  </div>

  );
}

export default ImageUpload;
