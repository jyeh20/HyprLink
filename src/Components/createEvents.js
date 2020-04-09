import React from "react";

import "../CSS/createEvents.css";

import firebase from "../firebase/firebase";

// let newLink;

class createEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      startTime: "00:00",
      endTime: "00:00",
      date: new Date(),
      price: "0",
      description: "",
      toContact: false,
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
  handlePriceChange = (e) => {
    this.setState({ price: e.target.value });
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

  submitForm = () => {
    let db = firebase.firestore();
    db.collection("events")
      .add(this.state)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        // newLink = docRef.id;
        // console.log(newLink);
        // console.log(typeof(newLink));
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const contentStyle = {
      paddingTop: 40 + 20,
      paddingRight: 20,
      paddingLeft: 20,
    };

    // if (newLink == String) {
    //   return <Redirect to={`/event/${newLink}`} />
    // }

    return (
      <div style={contentStyle}>
        <form>
          <h2>+ CREATE NEW EVENT</h2>

          <div className="name-group">
            <label htmlFor="name"></label>
            <textarea
              rows={this.state.rows}
              name="name"
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
              name="location"
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
              name="startTime"
              value={this.state.startTime}
              onChange={this.handleStartTimeChange}
              id="timeInput"
            />
            <span> - </span>
            <input
              type="time"
              name="endTime"
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
              name="description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              id="descriptionInput"
              placeholder="Write about this event"
              autoComplete="off"
            />
          </div>

          <button className="submit" onClick={this.submitForm}>
            HYPRLINK IT
          </button>
        </form>

        {/* <img id="smiles" src={faces} alt="smiles"></img> */}
      </div>
    );
  }
}

export default createEvents;
