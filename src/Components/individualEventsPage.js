import React from "react";
import firebase from "../firebase/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <h2>+ CREATE NEW EVENT</h2>

        <div className="date-group">
          <label htmlFor="dateInput"></label>
          <h5>{items.date}</h5>
          <label htmlFor="timeInput"></label>
          <h5>{items.startTime}</h5>
          <span> - </span>
          <h5>{items.endTime}</h5>
        </div>

        <div className="name-group">
          <label htmlFor="name"></label>
          <h5>{items.name}</h5>
        </div>

        <div className="location-group">
          <label htmlFor="locationInput"></label>
          <h5>{items.location}</h5>
        </div>

        <div className="description-group">
          <label htmlFor="descriptionInput"></label>
          <h5>{items.description}</h5>
        </div>
        <h3>
          <Link to={window.location.pathname}>{window.location.href}</Link>
        </h3>
      </form>
    </div>
  );
}
export default IndividualEventsPage;
