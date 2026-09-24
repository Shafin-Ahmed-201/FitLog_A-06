"use client";

import React, { useContext } from "react";
import { MyPlanContext } from "../context/MyPlanContext";
import { toast } from "react-toastify";

const MarkAsDoneButton = ({ workout }) => {
  const { asDone, setAsDone } = useContext(MyPlanContext);

  const isDone = asDone.includes(workout.id);

  const handleAsDone = () => {
    if (!isDone) {
      setAsDone([...asDone, workout.id]);

      toast.success(`${workout.name} completed!`);
    }
  };

  return (
    <button
      onClick={handleAsDone}
      className="flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2 text-xs font-semibold text-black transition hover:bg-lime-300"
    >
      <span>✓</span>

      {isDone ? "Done" : "Mark as Done"}
    </button>
  );
};

export default MarkAsDoneButton;