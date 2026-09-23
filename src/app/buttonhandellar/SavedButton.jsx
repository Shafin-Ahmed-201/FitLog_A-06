'use client'
import React, { useContext } from 'react';
import { MyPlanContext } from '../context/MyPlanContext';
import { toast } from 'react-toastify';

const SavedButton = ({workout}) => {
    const {saveList,setSaveList }=useContext(MyPlanContext)
    const handelSaveButton=(workout)=>{
        if(saveList.includes(workout)){
            toast.error(`${workout.name} already added to Saved`)
        }
        else{
            setSaveList([...saveList,workout])
             toast.success(`${workout.name} added to Today's Plan`)
        }
    }
    return (
        <div>
           <button onClick={()=>handelSaveButton(workout)} className="rounded-md border border-gray-700 px-4 py-2 text-[10px] text-gray-300 transition hover:bg-[#1b1e24]">
                ♡ Save for later
              </button> 
        </div>
    );
};

export default SavedButton;