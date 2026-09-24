"use client";
import React, { useContext } from "react";
import { MyPlanContext } from "../context/MyPlanContext";
import SavedWorkoutCard from "./SavedWorkoutCard";

const SavedContent = ({savedSortedWorkouts}) => {
  return (
    <div>
      {savedSortedWorkouts.map((workout) => (
        <SavedWorkoutCard key={workout.id} workout={workout}></SavedWorkoutCard>
      ))}
    </div>
  );
};

export default SavedContent;
