import React from "react";
import firebase from "../firebase/firebase";
import { useRef, useEffect, useState } from "react";
import "../CSS/createEvents.css";
import "../CSS/shareableIcons.css";
import { useClipboard } from "use-clipboard-copy";
import ExtenderApp from "./ExtenderApp";

export default function IndividualEventsPage() {
  const [copySuccess, setCopySuccess] = useState("", "");
  const textAreaRef = useRef(null);

  const contentStyle = {
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
  };

  const [items, setItems] = useState([]);

  useEffect((e) => {
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

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    e.preventDefault();
    setCopySuccess("✅");
  }

  console.log(items);

  return (
    console.log(items.date),
    <div style={contentStyle}>
      <form id="headerGroup">
        <h2 id="timeHeaderText">
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
        </h2>
        {console.log(items.date)}
        {console.log(new Date(items.date))}
        {console.log(new Date(items.date).toDateString())}
        <h2 id="dateHeaderText">{new Date(items.date).toDateString()}</h2>
      </form>
      <form id="detailsForm">
        <div className="name-group">
          <label htmlFor="name"></label>
          <h5 id="name">{items.name}</h5>
        </div>

        <div className="location-group">
          <label htmlFor="locationInput"></label>
          <h5 id="place">📍{items.location}</h5>
        </div>

        <div className="description-group">
          <label htmlFor="descriptionInput"></label>
          <h2 id="about">About this event:</h2>
          <h5 id="description">{items.description}</h5>
        </div>
      </form>
      <form id="sharingForm">
        <div id="linkGroup" className="link-group">
          <label htmlFor="link"></label>
          <h3 id="shareMessage">It's time to share your Hyprlink!</h3>
          🔗
          <input
            id="link"
            ref={textAreaRef}
            value={window.location.href}
            readOnly
          />
          <button id="iconButton" onClick={copyToClipboard}>
            {copySuccess == "" ? "📋" : "✅"}
          </button>
        </div>

        <div className="share-group">
          <label htmlFor="share"></label>
          <h3 id="copyMessage">Copy the link &amp; share to:</h3>
          <label htmlFor="apps"></label>
          <ExtenderApp />
        </div>
      </form>
    </div>
  );
}
