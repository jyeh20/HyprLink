import React from 'react';
import firebase from '../firebase/firebase';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import getData from './Helpers';

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
        getData(item.id, item.id.slice(0, 5)),
        <h1 key={item.id}>
        <Link to={`/hyprlink/${item.id}`}>{<button id="submitButton" className="submit">{item.data().name}</button>}</Link>
      {/*/DONT CHANGE, WORKS FOR LOCAL AND GITHUB*/}
        </h1>
      ))}
    </div>
  );
}
  export default AllEventsPage;  