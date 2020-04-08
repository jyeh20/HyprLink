import React from 'react';
import firebase from '../firebase/firebase';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function AllEventsPage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
          const db = firebase.firestore();
          (db.collection("events").get().then(items => {
          const docData = items.docs;
          console.log(docData);
          setItems(docData);
        }));
      }, []);    

  return (
    <div>
      {items.map(item => (
        <h1 key={item.id}>
        <Link to={`/event/${item.id.slice(0, 5)}`}>{item.data().name}</Link>
        </h1>
      ))}
    </div>
  );
}
  export default AllEventsPage;

function getOrigininalId(url) {
  
}