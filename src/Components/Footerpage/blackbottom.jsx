import React from "react";
import "./blackbottom.css"
import logo1 from "../../Assets/Images/logo.png"
import facebook from "../../Assets/Icons/facebook.svg"
import twitter from "../../Assets/Icons/twitter.svg"
import linkedin from "../../Assets/Icons/linkedin.svg"
import youtube from "../../Assets/Icons/youtube.svg"
import bxlmedium from "../../Assets/Icons/bxlmedium.svg"
import ellipse from "../../Assets/Icons/ellipse.svg"


const Blackbottom = () => {
  return (
    <div>
      <div className="blackbottom">
        <div className="leftblackbottom">
          <div className="searchbar">
            <input type="text" placeholder="Enter Your  Email Here" />
            <button>Subscribe To Newsletter</button>
          </div>

          <div className="signupinfo">
            <h2>Signup and start enjoying the benifits today!</h2>
          </div>
          <div className="signup">
            <button>Sign Up To Lilypad</button>
          </div>
          <div className="icons">
            <img src={facebook} alt="" />

            <img src={twitter} alt="" />

            <img src={linkedin} alt="" />

            <img src={youtube} alt="" />

            <img src={bxlmedium} alt="" />

            <img src={ellipse} alt="" />
          </div>
        </div>

        <div className="rightblackbottom">
          <div className="reachus">
            <div className="addresscontainer">
              <div className="left">
                <div className="lastlogo">
                  <img src={logo1}alt="" />
                </div>
              </div>
              <div className="right">
                <div className="addressbox">
                  <div className="addresshead">
                    <h4>Reach us at</h4>
                  </div>
                  <div className="address">
                    <p>
                      6751 Columbia Gateway Dr., 3rd floor, Columbia, MD 21046
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rightwrapper">
              <div className="right4">
                <div className="network">
                  <h4>Network</h4>
                  <p>Community</p>
                  <p>Investor</p>
                  <p>Broker</p>
                </div>
                <div className="technology">
                  <h4>Technology</h4>
                  <p>Artificial Intelligence</p>
                  <p>Block Chain</p>
                </div>
              </div>
              <div className="right3">
                <div className="products">
                  <h4>Products</h4>
                  <p>Invest</p>
                  <p>Discover</p>
                  <p>Transact</p>
                  <p>Manage</p>
                </div>
                <div className="Highlights">
                  <h4>Highlights</h4>
                  <p>
                    Impact of COVID-19 on the food and beverage industry and the
                    retail sector
                  </p>
                  <p>
                    Commercial lending during COVID-19: navigating the impact
                  </p>
                </div>
              </div>

              <div className="right2">
                <div className="Ourstory">
                  <h4>Our story</h4>
                  <p>Approach</p>
                  <p>About us</p>
                </div>
                <div className="Knowledge">
                  <h4>Knowledge Center</h4>
                  <p>Resource</p>
                  <p>Blog</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blackbottom;
