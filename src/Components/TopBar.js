import React from "react";
import hyprlink_title from "../Images/hyprlink_title2.png";
import faces from "../Images/faces3.png";

import phrase from "../Images/phrase.png";
import { Link } from "react-router-dom";

const TopBar = ({ styles }) => {
  const topBarStyle = {
    justifyContent: "space-between",
    position: "fixed",
    top: 0,
    display: "flex",
    // left: -1,
    // marginLeft: "-5px",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    // backgroundColor: "#e6e9f0",
    // backgroundColor: styles.black(0.89),
    // backgroundImage: `linear-gradient(#0a0d13, #20232f, #0a0d13)`;
    // backgroundImage: `url(${header})`,
    borderBottom: `1px solid styles.black(0.89)`,
    fontWeight: "bold",
    // padding: "0px 20px",
    boxSizing: "border-box",
  };

  const imageStyle = {
    top: 15,
    display: "flex",
    marginLeft: "10px",
    alignItems: "center",
    width: "0px 20px",
    height: styles.topBarHeight - 25,
    padding: "0px 0px",
  };

  const titleStyle = {
    top: 10,
    marginLeft: "-90px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "0px 20px",
    height: styles.topBarHeight - 15,

    padding: "0px 0px",

    // marginLeft: "auto",
  };

  const phraseStyle = {
    marginTop: "-5px",
    width: "0px 20px",
    marginLeft: "-115px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    height: styles.topBarHeight - 20,

    padding: "0px 0px",
  };

  return (
    <div style={topBarStyle}>
      <img
        style={imageStyle}
        id="title"
        src={hyprlink_title}
        alt="hyprlink"
      ></img>

      <Link to="/hyprlink/">
        <img style={titleStyle} id="faces" src={faces} alt="faces"></img>
      </Link>

      <Link to="/events">
        <img
          style={phraseStyle}
          id="phrase"
          src={phrase}
          alt="LET'S LINK UP!"
        ></img>
      </Link>
    </div>
  );
};

export default TopBar;
