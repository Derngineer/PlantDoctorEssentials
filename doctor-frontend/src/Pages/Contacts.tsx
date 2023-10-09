import { useState } from "react";
import { Fragment } from "react";
import App from "../App.tsx"; // Make sure to use correct import statements
import Footer from "../components/Footer.tsx"; // Add 'from' keyword
import TopNav from "../components/TopNav.tsx"; // Add 'from' keyword

const ContactUs = () => {
  const [name, setName] = useState("Joel");
  const [surname, setSurname] = useState("Doe");
  const [email, setEmail] = useState("example@gmail.com");
  const [text, setText] = useState("Hi;");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted successfully');
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return <App />;
  }

  return (
    <Fragment>
      <TopNav />
      <div className="row m-5" style={{padding: "40px"}}>
        <div className="col-2"></div>
        <form className="form col-8" onSubmit={handleSubmit}>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label">First name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Surname</label>
              <input
                type="text"
                className="form-control"
                value={surname}
                onChange={(event) => setSurname(event.target.value)}
              />
              <div id="emailHelp" className="form-text">
                {surname}
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div id="emailHelp" className="form-text">
              {email}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Check me out</label>
          </div>
          <div className="mb-3">
            <label className="form-label">Send us a message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={12}
              value={text}
              onChange={(event) => setText(event.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ background: "white", borderColor: "black",color:"black" }}
          >
            Submit
          </button>
        </form>
        <div className="col-2"></div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ContactUs;
