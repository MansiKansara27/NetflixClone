import React, { useState } from "react";
import "./SignIn.css";
import { auth, db } from "./../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  let navigate = useNavigate();
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const { email, password } = userInput;

  const handleInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="body">
      <div className="signinContainer">
        <div>
          <svg className="svg" viewBox="0 0 110 110">
            <g id="nfLogo">
              <path
                d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                id="Fill-14"
              ></path>
            </g>
          </svg>
        </div>

        <div className="form-box">
          <div className="form">
            <h1 className="h1">Sign In</h1>
            <br />
            <form>
              <input
                placeholder="Email or phone number"
                name="email"
                id="email"
                type="text"
                onChange={handleInput}
              />
              <br />
              <input
                placeholder="Password"
                name="password"
                id="pass"
                type="password"
                onChange={handleInput}
              />
              <br />
              <button type="submit" onClick={handleSubmit} className="subbtn">
                Sign In
              </button>
            </form>
            <br />
            <div className="divremember">
              <label className="remember_me">
                <input type="checkbox" className="rem" name="remember" />
                Remember me{" "}
              </label>
              <a className="need_help" target="_blank">
                Need help?
              </a>
            </div>
            <div className="facebook">
              <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" />
              <a>
                {" "}
                <span>Login with Facebook</span>
              </a>
            </div>
            <br />
            <span className="span">New to Netflix?</span>{" "}
            <a target="_blank">Sign up now</a>
            <br />
            <div className="recaptcha">
              <span className="span1">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </span>
              <a target="_blank"> Learn more.</a>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footerdiv">
            <span className="text-sm">Questions? Call 000-800-040-1843</span>
            <ul className="flex-container">
              <li>FAQ</li>
              <li>Help Centre</li>
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
              <li>Corporate Information</li>
            </ul>
            <div className="selectdiv">
              <select className="selectdemo">
                <option value="0">English</option>
                <option value="1">हिन्दी</option>
              </select>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
