import React from "react";
import logo from "../../Assets/Images/logo.png"
import "./container.css"
import arrow from "../../Assets/Icons/arrow-right-line 1.svg"
import mobileimage from "../../Assets/Images/Group 48096398.png"
const Container = () => {
  return (
    <div>
      <div className="container">
        <div className="leftside">
          <nav>
            <div className="navbarcontainer">
              <div className="logo">
              <img src={logo} alt="logo" /> 
              </div>
              <div className="left_nav">
                <ul>
                  <li className="Home">Home</li>
                  <li>Network</li>
                  <li>Product</li>
                  <li>Technology</li>
                  <li>Our Story</li>
                  <li>Knowledge Center</li>
                </ul>
              </div>
              <a href="#" className="nav-toggle">
                Open{" "}
              </a>
            </div>
          </nav>
          <div className="leftcontainer">
            <div className="welcomebox">
              <div className="line"></div>
              <div className="welcometo">
                <p>Welcome to the</p>
              </div>
            </div>
            <div className="name">
              <h1>
                Unprecedented Era of <span>Real Estate Investing</span>
              </h1>
              <p>
                Lilypads uses sophisticated technologies for data-driven
                decisions in investing, managing and funding commercial real
                estate assets
              </p>
              <div className="buttondiv">
                <button>
                  Start Investing Now
                  <img src={arrow } alt="" />
                </button>
              </div>
              <div className="stats">
                <div className="stats1">
                  <div className="stats1n">658+</div>
                  <div className="stats1h">Properties Registered</div>
                </div>
                <div className="stats2">
                  <div className="stats2n">685+</div>
                  <div className="stats2h">Deals Cracked</div>
                </div>
                <div className="stats3">
                  <div className="stats3n">255+</div>
                  <div className="stats3h">Investors</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rightside">
          <div className="right_nav">
            <div className="login">
              <button>Login</button>
            </div>
            <div className="contactus">
              <button>Contact Us</button>
            </div>
          </div>
          <div className="imagediv">
            <img src={mobileimage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
