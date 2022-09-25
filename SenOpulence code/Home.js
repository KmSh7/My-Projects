import React, { useState } from "react";
import "./Home.css";
import DATA from './mock.json'
const Home = (props) => {
  return (
    <div className="home">
      <div id="item-box" className="items-container">
        {props.srchValue.map((val) => {
          return (
            <div className="item">
              <a target="_blank" href={val.source} className="items-item align-img">
                <img src={val.source_img} className="item-img link-item"></img>
                {/* <div className="cost link-item">{val.price}</div> */}
              </a>
              <div className="items-item cost">
                <div className="cost1 price">{val.price}</div>
                <div className="cost1 buyOrAdd">
                  {/* <a target="_blank" href="">
                    <button className="buy">BUY</button>
                  </a> */}
                <a target="_blank" href={val.source}>
                    <button className="addtocart">Buy here</button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
