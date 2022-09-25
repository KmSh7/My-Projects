import React from "react";
import "./Help.css";
import titleImage from "./pictures/senopulance.png";
import logo from "./pictures/logo.png";
import FAQ from "./qna.json";

const x1 = "Q";
const x2 = "Ans-> ";
const Help = () => {
  return (
    <div style={{ overflow: "visible",marginBottom:"10%" }}>
      <pre>
        <div className="faq">
          <span className="faq-text">FAQs</span>
          <span className="title-logo">
            {" "}
            <img
              src={titleImage}
              alt="senOpulance"
              id="b2"
              className="titleImage1"
            ></img>
            <img src={logo} className="logo1"></img>
          </span>
        </div>
      </pre>
      <div className="hor"></div>
      {FAQ.map((val, key) => {
        return (
          <>
            <div className="question">
              <div className="qna">
                <h2 className="ques">
                  {`${x1}${key + 1}) `}
                  {val.ques}
                </h2>
                <p className="ans">
                  {x2}
                  {val.answer}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Help;
