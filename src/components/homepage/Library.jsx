
import Search from './Search';
import WorkoutList from './WorkoutList';
const getData=async()=>{
    const res=await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data=await res.json()
    return data
}

const Library = async() => {
    const workouts= await getData()
    return (
        <div className='container mx-auto grid justify-center mt-5'>
            <div className='flex justify-between gap-5'>
            <div>
            <h2 className='text-3xl font-bold text-white'>THE LIBRARY</h2>
            <p className='text-gray-400'>Twelve lifts covering every major muscle group.</p>
            </div>
            <Search workouts={workouts}></Search>         
            </div>
            <div>
              {
                <WorkoutList workouts={workouts}></WorkoutList>
              }
            </div>
        </div>
    );
};

export default Library;