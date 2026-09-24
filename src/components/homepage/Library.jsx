import React from 'react';
import WorkoutCard from './WorkoutCard';
const getData=async()=>{
    const res=await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data=await res.json()
    return data
}
const Library = async() => {
    const workouts= await getData()
    return (
        <div className='container mx-auto grid justify-center mt-5'>
            <h2 className='text-2xl font-bold text-white'>THE LIBRARY</h2>
            <p className='text-gray-400'>Twelve lifts covering every major muscle group.</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 py-5'>
              {
                workouts.map((workout)=><WorkoutCard key={workout.id} workout={workout}></WorkoutCard>)
              }
            </div>
        </div>
    );
};

export default Library;