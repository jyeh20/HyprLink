import React from 'react';
import firebase from '../firebase/firebase';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function IndividualEventsPage() {
    const[items, setItems] = useState([]);

    useEffect(() => {
          const db = firebase.firestore();
          (db.collection("events").doc(window.location.pathname.slice(7)).get().then(items => {
          const docData = items.data();
          console.log(window.location.pathname.slice(7));
          console.log(docData);
          setItems(docData);
        }));
      }, []);   

  console.log(items);
  return (
    <div>
        <h1>{items.name}</h1>
        <h3>{items.location}</h3>
        <h3>{items.date}</h3>
        <h3>{items.time}</h3>
        <h3>{items.price}</h3>
        <h3>{items.description}</h3>
        <h3>
        <Link to={window.location.pathname}>{window.location.href}</Link>
        </h3>
    </div>
  );
}
export default IndividualEventsPage;
