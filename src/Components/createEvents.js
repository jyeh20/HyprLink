import React from "react";
import { Redirect } from "react-router-dom";

import "../CSS/createEvents.css";

import firebase from "../firebase/firebase";

let db = firebase.firestore();
let newDocRef;
let director;
let toContact;

class createEvents extends React.Component {
  state = {
    redirect: false
  }
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      startTime: "00:00",
      endTime: "00:00",
      date: new Date(),
      description: "",
      rows: 1,
      minRows: 1,
      maxRows: 2,
      rows_1: 5,
      minRows_1: 5,
      maxRows_1: 10,
    };
  }

  handleNameChange = (e) => {
    const textareaLineHeight = 30;
    const { minRows, maxRows } = this.state;

    const previousRows = e.target.rows;
    e.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      e.target.rows = maxRows;
      e.target.scrollTop = e.target.scrollHeight;
    }

    this.setState({
      name: e.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    });
  };

  handleLocationChange = (e) => {
    this.setState({ location: e.target.value });
  };
  handleStartTimeChange = (e) => {
    this.setState({ startTime: e.target.value });
  };
  handleEndTimeChange = (e) => {
    this.setState({ endTime: e.target.value });
  };
  handleDateChange = (e) => {
    this.setState({ date: e.target.value });
  };

  handleDescriptionChange = (e) => {
    const textareaLineHeight = 19;
    const { minRows_1, maxRows_1 } = this.state;

    const previousRows_1 = e.target.rows_1;
    e.target.rows_1 = minRows_1; // reset number of rows in textarea

    const currentRows_1 = ~~(e.target.scrollHeight / textareaLineHeight);

    if (currentRows_1 === previousRows_1) {
      e.target.rows_1 = currentRows_1;
    }

    if (currentRows_1 >= maxRows_1) {
      e.target.rows_1 = maxRows_1;
      e.target.scrollTop = e.target.scrollHeight;
    }

    this.setState({
      description: e.target.value,
      rows_1: currentRows_1 < maxRows_1 ? currentRows_1 : maxRows_1,
    });
  };



  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to= {director} />
    }
  }


  submitForm = () => {
    
    db.collection("events").doc();
    newDocRef = db.collection("events").doc();
    newDocRef.set(this.state);
    const newLink = newDocRef.id;
    console.log(newLink);
    director = `/hyprlink/event/${newLink}`;
    toContact = true
    console.log(director);
    console.log(toContact);
    console.log(director);
    
    //update current event with director and docID
    newDocRef.update({
      newLink: newLink,
      director: director,
    })
    .then(function() {
      console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    this.setState({
      redirect: true
    })
    
  };
  
  render() {
    
    const contentStyle = {
      paddingTop: 40 + 20,
      paddingRight: 20,
      paddingLeft: 20,
    };
  


    return (
      <div style={contentStyle}>
        <form>
          <h2>+ CREATE NEW EVENT</h2>

          <div className="name-group">
            <label htmlFor="name"></label>
            <textarea
              rows={this.state.rows}
              value={this.state.name}
              onChange={this.handleNameChange}
              id="nameInput"
              placeholder="Enter Event Name..."
              autoComplete="off"
            />
          </div>

          <div className="location-group">
            <label htmlFor="locationInput"></label>
            <h5>Location</h5>
            <input
              type="text"
              // name="location"
              value={this.state.location}
              onChange={this.handleLocationChange}
              id="locationInput"
              placeholder="Address or call link"
              autoComplete="off"
            />
          </div>

          <div className="date-group">
            <label htmlFor="dateInput"></label>
            <h5>Date</h5>
            <input
              type="date"
              selected={this.state.date}
              onChange={this.handleDateChange}
            />
          </div>

          <div className="time-group">
            <label htmlFor="timeInput"></label>
            <h5>Time</h5>
            <input
              type="time"
              value={this.state.startTime}
              onChange={this.handleStartTimeChange}
              id="timeInput"
            />
            <span> - </span>
            <input
              type="time"
              value={this.state.endTime}
              onChange={this.handleEndTimeChange}
              id="timeInput"
            />
          </div>

          <div className="description-group">
            <label htmlFor="descriptionInput"></label>
            <h5>Description</h5>
            <textarea
              rows_1={this.state.rows_1}
              type="text"
              // name="description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              id="descriptionInput"
              placeholder="Write about this event"
              autoComplete="off"
            />
          </div>
            {this.renderRedirect()}
            <button
            className="submit" 
            onClick={this.submitForm}>
              HYPRLNK IT
            </button>

          
        </form>

        {/* <img id="smiles" src={faces} alt="smiles"></img> */}
      </div>
      
    )};
  }

export default createEvents;
