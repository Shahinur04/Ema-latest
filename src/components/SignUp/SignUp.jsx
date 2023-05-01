import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const {createUser}=useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);
    setError('');
    if (password !== confirm) {
      setError("did not match");
      return;
    } else if (password.length < 6) {
      setError("must 6 ");
      return
    }
    createUser(email,password)
    .then(result=>{
        const loggedUser =result.user;
        console.log(loggedUser);
    })
    .catch(error=>{
        console.error(error);
        setError(error.message);
    })
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="from-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="from-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="from-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="" required />
        </div>
        <input className="btn-submit" type="submit" value="SignUp" />
      </form>
      <p>
        <small>
          Already have a Account ?<Link to="/logIn">LogIn</Link>
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
