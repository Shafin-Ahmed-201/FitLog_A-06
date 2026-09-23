'use client'
import React, { useContext } from 'react';
import { MyPlanContext } from '../context/MyPlanContext';
import { toast } from 'react-toastify';

const TodayButton = ({workout}) => {
     const { todayList, setTodayList}=useContext(MyPlanContext)
       const handelTodayButton=(workout)=>{
          if(todayList.includes(workout)){
             toast.error(`${workout.name} already added to Today's Plan`)
          } 
          else{
            setTodayList([...todayList,workout])
             toast.success(`${workout.name} added to Today's Plan`)
          }
       }
    return (
        <div>
             <button onClick={()=>handelTodayButton(workout)} className="rounded-md bg-lime-400 px-4 py-2 text-[10px] font-semibold text-black transition hover:bg-lime-300">
                📅 Add to today&apos;s plan
              </button>
        </div>
    );
};

export default TodayButton;