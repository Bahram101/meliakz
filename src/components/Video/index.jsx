import React from "react";
import logo from "../../assets/images/logo3.png";
import "./video.scss";
import { Animated } from "react-animated-css";

export const Video = (props) => {
  //   let sectionCount = 0;
  const { state } = props;
  //   sectionCount = state?.destination?.index;
  //   console.log("sectionCount", sectionCount);

  const player = document.getElementById("bgVideo");
  if (player) {
    player.play();
  }

  return (
    <section className="section video-block" style={{ height: "100vh" }}>
      
      <div className="overlay"></div>
      <Animated
        animationIn="bounceInDown"
        animationOut="slideOutDown"
        animationInDuration={1400}
        isVisible="true"
      >
        <img src={logo} alt="лого" />
      </Animated>
    </section>
  );
};
