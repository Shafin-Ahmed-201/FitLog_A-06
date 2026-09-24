"use client";
import React, { useContext } from "react";
import { MyPlanContext } from "../context/MyPlanContext";
import SavedWorkoutCard from "./SavedWorkoutCard";

const SavedContent = () => {
const { saveList, sortBy } =useContext(MyPlanContext);

  const savedSortedWorkouts = [...saveList].sort((a, b) => {
    if (sortBy === "duration") {
      return b.duration - a.duration;
    }

    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });
  return (
    <div>
      {savedSortedWorkouts.map((workout) => (
        <SavedWorkoutCard key={workout.id} workout={workout}></SavedWorkoutCard>
      ))}
    </div>
  );
};

export default SavedContent;
