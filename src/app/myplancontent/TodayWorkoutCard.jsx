import Link from "next/link";
import React from "react";
import TodayRemoveButton from "../buttonhandellar/TodayRemoveButton";
import MarkAsDoneButton from "../buttonhandellar/MarkAsDoneButton";

const TodayWorkoutCard = ({ workout }) => {
  return (
    <div>
      <div className="flex w-full items-center justify-center md:justify-between rounded-2xl border border-[#292e38] bg-[#15181e] p-4">
        <div className="flex items-center gap-4">
          <div className="h-20 w-36 shrink-0 overflow-hidden rounded-xl">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-base font-bold uppercase text-white">
              {workout.name}
            </h2>

            <p className="mt-1 text-xs text-gray-400">{workout.equipment}</p>

            <div className="mt-2 flex items-center gap-4 text-xs text-gray-300">
              <span className="flex items-center gap-1">
                <span className="text-lime-400">◷</span>
                {workout.duration} min
              </span>

              <span className="flex items-center gap-1">
                <span className="text-lime-400">♨</span>
                {workout.caloriesBurned} kcal
              </span>

              <span className="flex items-center gap-1">
                <span className="text-lime-400">☆</span>
                {workout.rating}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link href={`/details/${workout.id}`}>
            <button
              className=" cursor-pointer
            rounded-full
            border border-[#39404c]
            px-5 py-2
            text-xs
            text-gray-200
            transition
            hover:bg-[#20242c]
          "
            >
              View Details
            </button>
          </Link>

          <MarkAsDoneButton workout={workout}></MarkAsDoneButton>

          <TodayRemoveButton workout={workout}></TodayRemoveButton>
        </div>
      </div>
    </div>
  );
};

export default TodayWorkoutCard;
