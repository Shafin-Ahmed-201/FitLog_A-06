"use client";

import { MyPlanContext } from "@/app/context/MyPlanContext";
import { useContext } from "react";
import WorkoutCard from "./WorkoutCard";

const WorkoutList = ({ workouts }) => {
  const { search } = useContext(MyPlanContext);

  const filterWorkouts = workouts.filter((workout) =>
    workout.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid gap-15 justify-center py-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filterWorkouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout}/>
      ))}
    </div>
  );
};

export default WorkoutList;