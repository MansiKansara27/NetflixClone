import "./../SignUp.css";
import { useEffect, useState } from "react";
import logo from "../../../src/assests/logo.png";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
const Screen3 = () => {
  const navigate = useNavigate();
 

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(db.collection);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        navigate("/signup");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(userData);
  };

  return (
    <div>
      <div className="navbar s2navbar">
        <img src={logo} alt="" />
        <div className="btns">Sign In</div>
      </div>
      <div className="screen3">
        <p className="step">STEP 1 OF 3</p>
        <p className="finish">Create a password to start your membership</p>
        <p className="desc">
          Just a few more steps and you're done! We hate paperwork, too.
        </p>
        <input
          type="email"
          className="emailInput2"
          placeholder="Email address"
          name="email"
          onChange={handleInput}
        />
        <input
          type="password"
          className="passInput"
          placeholder="Add a Password"
          name="password"
          onChange={handleInput}
        />
        <button onClick={handleSubmit} className="nextBtn">
          Next
        </button>
      </div>
    </div>
  );
};

export default Screen3;
