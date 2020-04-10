import React from "react";
import firebase from "../firebase/firebase";
import { useEffect, useState } from "react";
import "../CSS/createEvents.css";
import { useClipboard } from "use-clipboard-copy";
import clipboardIcon from "../Images/clipboard_icon.png";
import check from "../Images/check.png";

function IndividualEventsPage() {
  const clipboard = useClipboard({ copiedTimeout: 750 });
  const contentStyle = {
    paddingTop: 40 + 20,
    paddingRight: 20,
    paddingLeft: 20,
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("events")
      .doc(window.location.pathname.slice(7))
      //DONT CHANGE, WORKS FOR LOCAL AND GITHUB
      .get()
      .then((items) => {
        const docData = items.data();
        console.log(window.location.pathname.slice(7));
        //DONT CHANGE, WORKS FOR LOCAL AND GITHUB
        console.log(docData);
        setItems(docData);
      });
  }, []);

  console.log(items);

  return (
    <div style={contentStyle}>
      <form>
        <div className="date-group">
          <label htmlFor="dateInput"></label>
          <h5 id="date">
            {new Date(items.date).toDateString()} ~{" "}
            {new Date(
              0,
              0,
              0,
              new String(items.startTime).slice(0, 2),
              new String(items.startTime).slice(3, 5),
              0,
              0
            ).toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}{" "}
            -{" "}
            {new Date(
              0,
              0,
              0,
              new String(items.endTime).slice(0, 2),
              new String(items.endTime).slice(3, 5),
              0,
              0
            ).toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </h5>
          <label htmlFor="timeInput"></label>
        </div>

        <div className="name-group">
          <label htmlFor="name"></label>
          <h5 id="name">{items.name}</h5>
        </div>

        <div className="location-group">
          <label htmlFor="locationInput"></label>
          <h5 id="place"> @ {items.location}</h5>
        </div>

        <div className="description-group">
          <label htmlFor="descriptionInput"></label>
          <h2 id="about">About this event:</h2>
          <h5 id="description">{items.description}</h5>
        </div>

        <div id="linkGroup" className="link-group">
          <label htmlFor="link"></label>
          <h3 id="shareMessage">It's time to share your hyprlink:</h3>
          <input
            id="link"
            ref={clipboard.target}
            value={window.location.href}
            readOnly
          />
          <button id="iconButton" onClick={clipboard.copy}>
            {clipboard.copied ? "✅" : "📋"}
          </button>
        </div>

        <div className="share-group">
          <label htmlFor="share"></label>
          <h3 id="copyMessage">Copy your link &amp; share to:</h3>
          <label htmlFor="apps"></label>
          <h3 id="apps">APPS</h3>
        </div>
      </form>
    </div>
  );
}
export default IndividualEventsPage;
