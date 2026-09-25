"use client";
import React, { useContext, useEffect, useState} from "react";
import { MyPlanContext } from "../context/MyPlanContext";
import TodayWorkoutCard from "./TodayWorkoutCard";

const TodayPlanContent = () => {
 const { todayList,setTodayList,sortBy} = useContext(MyPlanContext);

   const todaySortedWorkouts = [...todayList].sort((a, b) => {
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
      {todaySortedWorkouts.map((workout) => (
        <TodayWorkoutCard key={workout.id} workout={workout}></TodayWorkoutCard>
      ))}
    </div>
  );
};

export default TodayPlanContent;
