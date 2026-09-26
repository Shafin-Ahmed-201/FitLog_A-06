import Link from "next/link";


const WorkoutDetailsPage = async ({ params }) => {
  const { detailsId } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${detailsId}`);
  const workout = await res.json();
  return (
    <main className="mb-40 bg-[#0d0f12] px-4 py-6 text-white md:px-8">
      <div className="mb-4">
      <Link href={'/myplan'} className="bg-lime-400 text-black py-1 px-4 rounded-xl">Back</Link>
      </div>
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
