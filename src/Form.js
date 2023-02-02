import React, { useState } from "react";

export default function Form(props) {
  const { addGoal } = props;
  const [formdata, setFormdata] = useState("");
  return (
    <div className="form-container">
      <form className="form">
        <label>
          Course Goal
          <input
            type="text"
            value={formdata}
            onChange={(e) => setFormdata(e.target.value)}
          ></input>
        </label>
      </form>
      <br />
      <button className="add-btn" onClick={() => addGoal(formdata)}>
        Add Goal
      </button>
    </div>
  );
}
