import React from "react";

const WorkoutDetailsPage = async ({ params }) => {
  const { workId } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${workId}`);
  const workout = await res.json();
  return (
    <main className="min-h-screen bg-[#0d0f12] px-4 py-6 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-lg">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full min-h-[400px] w-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold uppercase tracking-tight md:text-3xl">
              {workout.name}
            </h1>

            <p className="mt-2 max-w-2xl text-xs leading-5 text-gray-400">
              {workout.description}
            </p>

            <div className="mt-3 flex gap-2">
              {workout.muscleGroups.map((muscle) => (
                <p
                  key={muscle}
                  className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-bold text-black"
                >
                  {muscle}
                </p>
              ))}
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-[#242831] bg-[#15181e]">
              <div className="flex items-center justify-between border-b border-[#242831] px-4 py-3">
                <p className="text-[9px] font-medium uppercase text-gray-500">
                  Equipment
                </p>

                <p className="text-[10px] text-gray-300">{workout.equipment}</p>
              </div>

              <div className="flex items-center justify-between border-b border-[#242831] px-4 py-3">
                <p className="text-[9px] font-medium uppercase text-gray-500">
                  Difficulty
                </p>

                <p className="text-[10px] text-gray-300">
                  {workout.difficulty}
                </p>
              </div>

              <div className="flex items-center justify-between border-b border-[#242831] px-4 py-3">
                <p className="text-[9px] font-medium uppercase text-gray-500">
                  Sets
                </p>

                <p className="text-[10px] text-gray-300">{workout.sets}</p>
              </div>

              <div className="flex items-center justify-between border-b border-[#242831] px-4 py-3">
                <p className="text-[9px] font-medium uppercase text-gray-500">
                  Reps
                </p>

                <p className="text-[10px] text-gray-300">{workout.reps}</p>
              </div>

              <div className="flex items-center justify-between border-b border-[#242831] px-4 py-3">
                <p className="text-[9px] font-medium uppercase text-gray-500">
                  Duration
                </p>

                <p className="text-[10px] text-gray-300">
                  {workout.duration} min
                </p>
              </div>

              <div className="flex items-center justify-between border-b border-[#242831] px-4 py-3">
                <p className="text-[9px] font-medium uppercase text-gray-500">
                  Calories
                </p>

                <p className="text-[10px] text-gray-300">
                  {workout.caloriesBurned} kcal
                </p>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <p className="text-[9px] font-medium uppercase text-gray-500">
                  Rating
                </p>

                <p className="text-[10px] text-gray-300">{workout.rating}</p>
              </div>
            </div>

            <div className="mt-5">
              <h2 className="text-sm font-bold uppercase">Instructions</h2>

              <div className="mt-3 space-y-2">
                {workout.instructions.map((instruction, index) => (
                  <div
                    key={index}
                    className="flex gap-3 text-[10px] leading-4 text-gray-400"
                  >
                    <p className="text-gray-500">{index + 1}.</p>

                    <p>{instruction}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <button className="rounded-md bg-lime-400 px-4 py-2 text-[10px] font-semibold text-black transition hover:bg-lime-300">
                📅 Add to today&apos;s plan
              </button>

              <button className="rounded-md border border-gray-700 px-4 py-2 text-[10px] text-gray-300 transition hover:bg-[#1b1e24]">
                ♡ Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
