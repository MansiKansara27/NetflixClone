import "./../SignUp.css";
import logo from "../../../src/assests/logo.png";
import { useNavigate } from "react-router-dom";

const Screen2 = () => {
  const navigate = useNavigate();
  const onNext = () => {
    navigate("/signup/regform");
  };
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
        <button onClick={onNext} className="nextBtn">Next</button>
      </div>
    </div>
  );
};

export default Screen2;
