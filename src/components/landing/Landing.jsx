import React from "react";
import "./Landing.css";
import Nav from "../navbar/Nav";
import group from "../../images/group.png";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";


function Landing() {
  return (
    <div>
      <Nav />
      <div className="main">
        <div className="box1">
          <h1>
            Explore your <span className="s1">hobby</span> or{" "}
            <span className="s2">passion</span>
          </h1>
          <p className="firstp">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>{" "}
          <p className="secondp">
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
          <img src={group} />
        </div>

        <div className="box2">
            <div className="nav-btn">
                <button>Sign In</button>
                <button>Join In</button>
            </div>
            <button className="google"><FcGoogle className="gicon"/>Continue with Google</button>
            <button className="fb"><SiFacebook color="blue" className="gicon"/>Continue with Facebook</button>
             
             <div className="seperator">
            <div className="left"></div>
            <p>Or connect with</p>
            <div className="right"></div>
            </div>

            
            <div className="form">
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
                <div className="pstr">password strength</div>
                <p className="terms">By continuing, you agree to our<span>Terms of Service</span> and <span>Privacy Policy</span>.</p>
                <button className="agree">Agree aand Continue</button>
            </div>


        </div>
      </div>

     </div>
  );
}

export default Landing;
