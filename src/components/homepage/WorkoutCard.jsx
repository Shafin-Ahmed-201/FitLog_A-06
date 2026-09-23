import Link from "next/link";
import React from "react";

const WorkoutCard = ({ workout }) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div>
        <div className="w-[300px] overflow-hidden rounded-xl border border-gray-800 bg-[#15171c] shadow-lg">
          <div className="h-[170px] w-full overflow-hidden">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-4">
            <div className="mb-2 flex gap-2">
              {workout.muscleGroups.map((muscle) => (
                <p
                  key={muscle}
                  className="rounded-md bg-lime-300 px-2 py-1 text-[9px] font-bold uppercase text-black"
                >
                  {muscle}
                </p>
              ))}
            </div>

            <h2 className="text-sm font-bold uppercase text-white">
              {workout.name}
            </h2>

            <p className="mt-1 text-[10px] text-gray-400">
              {workout.equipment}
            </p>

            <div className="my-3 border-t border-gray-700"></div>

            <div className="flex items-center justify-between text-[10px] text-gray-400">
              <div className="flex items-center gap-1">
                <p>◷</p>
                <p>{workout.duration} min</p>
              </div>

              <div className="flex items-center gap-1">
                <p>♨</p>
                <p>{workout.caloriesBurned} kcal</p>
              </div>

              <div className="flex items-center gap-1">
                <p className="text-yellow-400">★</p>
                <p>{workout.rating}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
