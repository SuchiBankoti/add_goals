import React, { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Form";
import Goal from "./Goal";
function App() {
  const [goals, setGoals] = useState([]);
  function deleteGoal(title) {
    setGoals((prev) => prev.filter((element) => element !== title));
  }
  function addGoal(title) {
    setGoals((prev) => [...prev, title]);
  }
  const goal_list = goals.map((element) => (
    <Goal key={nanoid()} deleteGoal={deleteGoal} title={element} />
  ));
  return (
    <div>
      <Form addGoal={addGoal} />
      <div className="goal-container">{goal_list}</div>
    </div>
  );
}

export default App;
