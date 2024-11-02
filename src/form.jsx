import React, { useState } from "react";

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstnameError, setFirstnameError] = useState(false);
  const [secondnameError, setSecondnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setFirstnameError(firstname === "");
    setSecondnameError(secondname === "");
    setEmailError(email === "");
    setPasswordError(password === "");


    if (firstname && secondname && email && password) {
      console.log("Form submitted with:");
      console.log("First Name:", firstname);
      console.log("Second Name:", secondname);
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div>
      <h1 className="mt-5 pt-5">Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="p-2">First Name</label><br></br>
          <input
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
              if (firstnameError) setFirstnameError(false);
            }}
            type="text"
            placeholder="Enter your first name"
          />
          {firstnameError && (
            <p className="text-danger">First name is required</p>
          )}
        </div>
        <div>
          <label className="p-2">Second Name</label><br></br>
          <input
            value={secondname}
            onChange={(e) => {
              setSecondname(e.target.value);
              if (secondnameError) setSecondnameError(false);
            }}
            type="text"
            placeholder="Enter your second name"
          />
          {secondnameError && (
            <p className="text-danger">Second name is required</p>
          )}
        </div>
        <div>
          <label className="p-2">Email</label><br></br>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError(false);
            }}
            type="text"
            placeholder="Enter your email"
          />
          {emailError && <p className="text-danger">Email is required</p>}
        </div>
        <div>
          <label className="p-2">Password</label><br></br>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (passwordError) setPasswordError(false);
            }}
            type="password"
            placeholder="Enter your password"
          />
          {passwordError && <p className="text-danger">Password is required</p>}
        </div>
        <button type="submit" className="mt-3">
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;
