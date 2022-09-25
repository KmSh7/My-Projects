import React from "react";
import Media from "react-media";
import Player from "react-player";
import video1 from "./videos/about3.mp4";
import "./About.css";
import imgabout from "./pictures/op1.3.jpg"
const About = () => {
  const width1 = "(max-width:700px)";

  const forPcnTab = () => {
    return (
      <>
        <div className="about-page">
          <div className="video1">
            <span className="text">
              <br></br>About<br></br>Sen Opulence
            </span>
            <Player
              url={video1}
              height={"100%"}
              width={"100%"}
              playing
              loop={true}
            />
          </div>
        </div>
        <div className="content">
          <h1 className="about-headding">What is Sen Opulence?</h1>
          <p className="h1-para">
            Sen Opulence is more than just an affiliated website; it is a
            lifestyle brand rooted in the core values of freedom of expression,
            equality and the conviction that pleasure is a fundamental human
            right. A purveyor of culture and an avid supporter of art,
            innovation and bold perspectives. As the world progresses, so do we.
            We are undergoing a major transformation, inside and out. We remain
            committed to our role as a progresssive force, but we’re changing
            the lens. Through our experiences, products and content, we
            encourage all to find comfort and confidence in their own bodies and
            to explore what pleasure means to them.
          </p>
          <h1 className="about-headding">Our affiliated partner(s)</h1>
          <p className="h1-para">
            <h1 className="affiliate">
             1. Amazon Associates - Amazon's affiliate marketing program
            </h1>
            <p className="affiliate-para">
              Welcome to one of the largest affiliate marketing programs in the
              world. The Amazon Associates Program helps content creators,
              publishers and bloggers monetize their traffic. With millions of
              products and programs available on Amazon, associates use easy
              link-building tools to direct their audience to their
              recommendations, and earn from qualifying purchases and programs.
            </p>
          </p>
        </div>
      </>
    );
  };
  const forPhone = () => {
    return <>
            <div className="about-page-ph">
          <div className="about-pic">
            <span className="text">
              <br></br>About<br></br> Sen Opulence
            </span>
<img src={imgabout} height={"100%"} width={"100%"}></img>
          </div>
        </div>
        <div className="content">
          <h1 className="about-headding">What is Sen Opulence?</h1>
          <p className="h1-para">
            Sen Opulence is more than just an affiliated website; it is a
            lifestyle brand rooted in the core values of freedom of expression,
            equality and the conviction that pleasure is a fundamental human
            right. A purveyor of culture and an avid supporter of art,
            innovation and bold perspectives. As the world progresses, so do we.
            We are undergoing a major transformation, inside and out. We remain
            committed to our role as a progresssive force, but we’re changing
            the lens. Through our experiences, products and content, we
            encourage all to find comfort and confidence in their own bodies and
            to explore what pleasure means to them.
          </p>
          <h1 className="about-headding">Our affiliated partner(s)</h1>
          <p className="h1-para">
            <h1 className="affiliate">
             1. Amazon Associates - Amazon's affiliate marketing program
            </h1>
            <p className="affiliate-para">
              Welcome to one of the largest affiliate marketing programs in the
              world. The Amazon Associates Program helps content creators,
              publishers and bloggers monetize their traffic. With millions of
              products and programs available on Amazon, associates use easy
              link-building tools to direct their audience to their
              recommendations, and earn from qualifying purchases and programs.
            </p>
          </p>
        </div>
    </>;
  };
  return (
    <div>
      <Media query={width1}>
        {(matches) => {
          return matches ? forPhone() : forPcnTab();
        }}
      </Media>
    </div>
  );
};
export default About;
