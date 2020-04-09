import React from "react";
import DatePicker from "react-datepicker";
import {Link} from 'react-router-dom';

import "../CSS/createEvents.css";



import "react-datepicker/dist/react-datepicker.css";
import hyprlink_title from "../Images/hyprlink_title2.png";
import plus from "../Images/plus.png";
import faces from "../Images/faces3.png";
import firebase from "../firebase/firebase";

class createEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      time: "00:00",
      date: new Date(),
      price: "0",
      description: "",
      toContact: false
    };
  }
  
  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleLocationChange = e => {
    this.setState({ location: e.target.value });
  };
  handleTimeChange = e => {
    this.setState({ time: e.target.value });
  };
  handleDateChange = e => {
    this.setState({ date: e });
  };
  handlePriceChange = e => {
    this.setState({ price: e.target.value });
  };
  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  submitForm = () => {
    let db = firebase.firestore();
    db.collection("events")
      .add(this.state)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    //add linking statement here once megan pushes

    return (
      <div>
        <img id="title" src={hyprlink_title} alt="hyprlink"></img>
        <img id="plus" src={plus} alt="+"></img>

        <form >
          <h2>CREATE NEW EVENT</h2>

          <div className="form-group">
            <label htmlFor="nameInput"></label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
              className="form-control"
              id="nameInput"
              placeholder="ENTER EVENT NAME"
            />
          </div>

          <div className="form-group">
            <label htmlFor="locationInput"></label>
            <span>Location</span>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleLocationChange}
              className="form-control"
              id="locationInput"
              placeholder="Address or link"
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateInput"></label>
            <span>Date</span>
            <DatePicker
              selected={this.state.date}
              onChange={this.handleDateChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="timeInput"></label>
            <span>Time</span>
            <input
              type="time"
              name="time"
              value={this.state.time}
              onChange={this.handleTimeChange}
              className="form-control"
              id="timeInput"
            />
          </div>

          <div className="form-group">
            <label htmlFor="priceInput"></label>
            <span>Price</span>
            <input
              type="price"
              name="price"
              value={this.state.price}
              onChange={this.handlePriceChange}
              className="form-control"
              id="priceInput"
              />
          </div>

          <div className="form-group">
            <label htmlFor="descriptionInput"></label>
            <span>Description</span>
            <textarea
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              className="form-control"
              id="descriptionInput"
              placeholder="Write about this event"
            />
          </div>

          <Link to={'/events'}>
          <button className="submit" onClick={this.submitForm}>
            HYPRLNK IT
          </button>
          </Link>
        </form>

        <img id="smiles" src={faces} alt="smiles"></img>
      </div>
    );
  }
}

export default createEvents;
