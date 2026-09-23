"use client";
import React, { useContext } from "react";
import { MyPlanContext } from "../context/MyPlanContext";
import TodayWorkoutCard from "./TodayWorkoutCard";

const TodayPlanContent = () => {
  const { todayList } = useContext(MyPlanContext);
  return (
    <div>
      {todayList.map((workout) => (
        <TodayWorkoutCard key={workout.id} workout={workout}></TodayWorkoutCard>
      ))}
    </div>
  );
};

export default TodayPlanContent;
