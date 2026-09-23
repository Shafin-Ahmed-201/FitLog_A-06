import React from 'react';

const WorkoutCard = ({workout}) => {
    return (
        <div>
            <div className="w-[300px] overflow-hidden rounded-xl border border-gray-800 bg-[#15171c] shadow-lg">

      {/* Image */}
      <div className="h-[170px] w-full overflow-hidden">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Muscle Groups */}
        <div className="mb-2 flex gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-md bg-lime-300 px-2 py-1 text-[9px] font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h2 className="text-sm font-bold uppercase text-white">
          {workout.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-[10px] text-gray-400">
          {workout.equipment}
        </p>

        {/* Divider */}
        <div className="my-3 border-t border-gray-700"></div>

        {/* Workout Information */}
        <div className="flex items-center justify-between text-[10px] text-gray-400">

          {/* Duration */}
          <div className="flex items-center gap-1">
            <span>◷</span>
            <span>{workout.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1">
            <span>♨</span>
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span>{workout.rating}</span>
          </div>

        </div>
      </div>
    </div>
        </div>
    );
};

export default WorkoutCard;