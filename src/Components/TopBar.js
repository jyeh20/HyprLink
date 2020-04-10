import React from "react";
import hyprlink_title from "../Images/hyprlink_title2.png";
import faces from "../Images/faces.png";
import header from "../Images/header.png";
import phrase from "../Images/phrase.png";
import {Link} from "react-router-dom";

const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundImage: `url(${header})`,
    borderBottom: `1px solid ${styles.black(0.1)}`,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box",
  };

  const imageStyle = {
    position: "fixed",
    top: 25,
    left: -5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "0px 20px",
    height: styles.topBarHeight - 55,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box",
  };

  const titleStyle = {
    position: "fixed",
    top: 25,
    left: "50%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "0px 20px",
    height: styles.topBarHeight - 35,
    fontWeight: "bold",
    padding: "0px 0px",
    boxSizing: "border-box",
    marginLeft: "-100px",
    transform: "translate(20%, -20%)",
  };

  const phraseStyle = {
    color: `${styles.white()}`,
    position: "fixed",
    top: 25,
    left: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "0px 50px",
    height: styles.topBarHeight - 40,
    fontWeight: "bold",
    padding: "0px 45px",
    boxSizing: "border-box",
    marginLeft: "-100px",
    transform: "translate(0%, -20%)",
  };

  return (
    <div style={topBarStyle}>
      <Link to="/hyprlink/">
      <img style={imageStyle} id="faces" src={faces} alt="faces"></img>
      </Link>
      <img
        style={titleStyle}
        id="title"
        src={hyprlink_title}
        alt="hyprlink"
      ></img>
      <Link to= "/events">
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
