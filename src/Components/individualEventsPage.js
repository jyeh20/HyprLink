import React from "react";
import firebase from "../firebase/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/createEvents.css";

function IndividualEventsPage() {
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
      .get()
      .then((items) => {
        const docData = items.data();
        console.log(window.location.pathname.slice(7));
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
          <h5 id="date">Mon, Apr 20, 2020 ~ 4:20 PM - 9:20 PM</h5>
          {/* <h5>{items.date}</h5> */}
          <label htmlFor="timeInput"></label>
          {/* <h5>{items.startTime}</h5> */}

          {/* <h5>{items.endTime}</h5> */}
        </div>

        <div className="name-group">
          <label htmlFor="name"></label>
          <h5 id="name">420 Zoom Meet</h5>
          {/* <h5>{items.name}</h5> */}
        </div>

        <div className="location-group">
          <label htmlFor="locationInput"></label>
          <h5 id="place">@ www.zoom.com/420</h5>
          {/* <h5>{items.location}</h5> */}
        </div>

        <div className="description-group">
          <label htmlFor="descriptionInput"></label>
          <h2 id="about">About this event:</h2>
          <h5 id="description">420 blaze it mfs</h5>
        </div>

        <div className="link-group">
          <label htmlFor="link"></label>
          <h3 id="shareMessage">It's time to share your hyprlink:</h3>
          <h3 id="link">{window.location.href}</h3>
        </div>

        <div className="share-group">
          <label htmlFor="share"></label>
          <h3 id="copyMessage">Copy &amp; paste to share to:</h3>
          <label htmlFor="apps"></label>
          <h3 id="apps">APPS</h3>
        </div>
      </form>
    </div>
  );
}
export default IndividualEventsPage;
