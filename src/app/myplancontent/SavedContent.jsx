"use client";
import React, { useContext } from "react";
import { MyPlanContext } from "../context/MyPlanContext";
import SavedWorkoutCard from "./SavedWorkoutCard";

const SavedContent = () => {
  const { saveList } = useContext(MyPlanContext);
  return (
    <div>
      {saveList.map((workout) => (
        <SavedWorkoutCard key={workout.id} workout={workout}></SavedWorkoutCard>
      ))}
    </div>
  );
};

export default SavedContent;
