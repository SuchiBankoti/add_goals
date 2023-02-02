import React, { useState } from "react";

export default function Form(props) {
  const { addGoal } = props;
  const [formdata, setFormdata] = useState("");
  function handleChange(e) {
    setFormdata(e.target.value);
  }
  return (
    <div className="form-container">
      <form className="form">
        <label>
          Course Goal
          <input type="text" value={formdata} onChange={handleChange}></input>
        </label>
      </form>
      <br />
      <button
        className={formdata ? "blur-btn" : "add-btn"}
        onClick={() => addGoal(formdata)}
      >
        Add Goal
      </button>
    </div>
  );
}
