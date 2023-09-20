import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="upcom-div">
      <div className="examinations-div">
        <h2 className="upcom-head">
          Upcoming
          <br />
          Examinations
        </h2>
        <p className="upcom-text">
          Enquire about the examination & register for the exams
        </p>
      </div>
      <div className="events-div">
        <i className="fa fa-calendar-o calendar"></i>
        <div>
          <p className="date">02th October 2014</p>
          <p className="level">Level 1 exam</p>
        </div>
      </div>
      <div className="events-div">
        <i className="fa fa-calendar-o calendar"></i>
        <div style={{ marginRight: "40px" }}>
          <p className="date">Nov-Dec 2016</p>
          <p className="level">Level 1</p>
          <p className="level">Lorem Ipsum</p>
        </div>
      </div>
      <div className="events-div">
        <i className="fa fa-calendar-o calendar"></i>
        <div>
          <p className="date">Ongoing this year</p>
          <p className="level">Level 3 (Grad)</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
