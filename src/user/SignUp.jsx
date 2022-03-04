import React, { useState } from "react";
import "./SignUp.css";
import logo from "../../src/assests/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [screen, setScreen] = useState(1);
  const navigate = useNavigate();
  const onNext = () => {
    navigate("/signup/registration");
  };
  const Screen1 = () => {
    return (
      <div className="signUp">
        <div className="navbar">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
          <div className="btns">
            <Link to="/signin"><button className="btn">Sign In</button></Link>
          </div>
        </div>
        <div className="mainContainer">
          <p className="h6">Unlimited movies, TV shows and more.</p>
          <p className="h5">Watch anywhere. Cancel anytime.</p>
          <p className="h4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <input
            className="emailInput"
            type="email"
            name="email"
            placeholder="Email address"
          />
          <button onClick={onNext} className="startedbtn">Get Started</button>
        </div>
      </div>
    );
  };

  const Screen2 = () => {
    return (
      <div>
        <div className="navbar s2navbar">
          <img src={logo} alt="" />
          <div className="btns">Sign In</div>
        </div>
        <div className="scrren2">
          <p className="step">STEP 1 OF 3</p>
          <p className="finish">Finish setting up your account</p>
          <p className="desc">
            Netflix is personalised for you. Create a password to watch on any
            device at any time.
          </p>
          <button className="nextBtn">Next</button>
        </div>
      </div>
    );
  };

  const Screen3 = () => {
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
          />
          <input
            type="password"
            className="passInput"
            placeholder="Add a Password"
          />
          <button className="nextBtn">Next</button>
        </div>
      </div>
    );
  };

  const Screen4 = () => {
    return (
      <div>
        <div className="navbar s2navbar">
          <img src={logo} alt="" />
          <div className="btns">Sign In</div>
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

  return (
    <div className="signUpContainer">
      <div>
        <div>{Screen1()}</div>
        {/* <div>{Screen2()}</div>
        <div>{Screen3()}</div>
        <div>{Screen4()}</div> */}
      </div>
    </div>
  );
}
