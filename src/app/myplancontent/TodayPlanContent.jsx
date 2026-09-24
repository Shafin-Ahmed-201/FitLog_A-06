"use client";
import React, { useContext } from "react";
import { MyPlanContext } from "../context/MyPlanContext";
import TodayWorkoutCard from "./TodayWorkoutCard";

const TodayPlanContent = ({todaySortedWorkouts}) => {
  return (
    <div>
      {todaySortedWorkouts.map((workout) => (
        <TodayWorkoutCard key={workout.id} workout={workout}></TodayWorkoutCard>
      ))}
    </div>
  );
};

export default TodayPlanContent;
