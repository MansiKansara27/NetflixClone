import logo from "../../../src/assests/logo.png";
import "./../SignUp.css";
import { auth, db } from "./../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
const Screen4 = () => {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
        console.log("user = " + user.email);
      } else {
        setEmail(null);
        console.log("user = " + user);
      }
    });
  }, []);
  return (
    <div>
      <div className="navbar s2navbar">
        <img src={logo} alt="" />
        <div className="btns">{email} </div>
      </div>
      <div className="scrren2">
        <p className="step">STEP 2 OF 3</p>
        <p className="finish">Choose your plan.</p>
        <div className="plan">
          <p className="desc">* No commitments, cancel anytime.</p>
          <p className="desc">* Everything on Netflix for one low price.</p>
          <p className="desc">* No ads and no extra fees. Ever.</p>
        </div>
        <button className="nextBtn">Next</button>
      </div>
    </div>
  );
};

export default Screen4;

