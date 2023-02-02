import React from "react";
export default function Goal(props) {
  const { deleteGoal, title } = props;

  return (
    <div onClick={() => deleteGoal(title)} className="goal">
      {title}!
    </div>
  );
}
