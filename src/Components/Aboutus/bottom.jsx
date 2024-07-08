import React from "react";
import "./bottom.css"
import investerLogo from "../../Assets/Icons/Investor.svg" 
import decisionlogo from "../../Assets/Icons/decision.svg"
import managerlogo from "../../Assets/Icons/Manager.svg"
import allocationlogo from "../../Assets/Icons/alloccation.svg"
import subscriberlogo from "../../Assets/Icons/subscriber.svg"



const Bottom = () => {
  return (
    <div>
      <div className="bottompart">
        <div className="bottom1">
          <div className="about">
            <div className="line2"></div>
            <div className="aboutus">
              <h1>About us</h1>
            </div>
          </div>
          <div className="lillypad">
            <h1>
              Lillypad is the only Real Estate Investment tool you need for your
              business
            </h1>
          </div>
        </div>
        <div className="bottom2">
          <div className="logobox2">
            <div className="investorlogo">
              <img src={investerLogo} alt=""  />
            </div>
            <div className="investorlogoheading">
              <h4>Become a Data-Driven Investor</h4>
            </div>
          </div>
          <div className="investorinfo">
            Lilypads is the cloud-based real estate investment platform that
            helps you make data-driven investment decisions and assists with
            reaching your long term investment objectives.
          </div>
        </div>
        <div className="bottom3">
          <div className="logobox2">
            <div className="decisionlogo">
              <img src={decisionlogo} alt=""  />
            </div>
            <div className="decisionheading">
              <h4>Lilypads can help you make smarter decisions.</h4>
            </div>
          </div>
          <div className="decisioninfo">
            Streamline your investment evaluation process and collaborate in
            reaching your long term investment objectives
          </div>
        </div>

        <div className="bottom4">
          <div className="logobox2">
            <div className="investorlogo">
              <img src={managerlogo} alt="" />
            </div>
            <div className="investorlogoheading">
              <h4>Manager Due Diligence</h4>
            </div>
          </div>
          <div className="investorinfo">
            Evaluate managers against your objectives using traditional risk
            metrics with the addition of factor analysis. All it takes is a set
            of returns
          </div>
        </div>
        <div className="bottom5">
          <div className="logobox2">
            <div className="investorlogo">
              <img src={allocationlogo} alt="" />
            </div>
            <div className="investorlogoheading">
              <h4>Optimize Asset Allocation</h4>
            </div>
          </div>
          <div className="investorinfo">
            Understand the underlying risk drivers in your portfolio using the
            Lilypads analysis factors and then optimize that portfolio based on
            objectives
          </div>
        </div>
        <div className="bottom6">
          <div className="logobox2">
            <div className="investorlogo">
              <img src={subscriberlogo} alt="" />
            </div>
            <div className="investorlogoheading">
              <h4>Our Subscribers</h4>
            </div>
          </div>
          <div className="investorinfo">
            <p>
              Serving a constellation of global subscribers Pension funds, Funds
              of Funds, Banks, Family offices, Asset managers, Wealth Managers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
