import React, { useContext } from 'react';
import { MyPlanContext } from '../context/MyPlanContext';
import { toast } from 'react-toastify';

const MarkAsDoneButton = ({workout}) => {
    const {asDone,setAsDone}=useContext(MyPlanContext)
    const handelAsDone=(workout)=>{
        setAsDone(true)
        toast.success(`${workout.name} Done`)
    }
    return (
        <div>
            <button onClick={()=>handelAsDone(workout)}
            className="
            flex items-center gap-2
            rounded-full
            bg-lime-400
            px-5 py-2
            text-xs
            font-semibold
            text-black
            transition
            hover:bg-lime-300
          "
          >
            <span>✓</span>
            {asDone?'Done':'Mark as Done'}
          </button>
        </div>
    );
};

export default MarkAsDoneButton;