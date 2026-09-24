import { MyPlanContext } from '@/app/context/MyPlanContext';
import React, { useContext } from 'react';

const Calories = () => {
    const {activeTab,todayList,saveList} = useContext(MyPlanContext);
        const todayCalories=todayList.reduce((acc,w)=>acc+=w.caloriesBurned,0)
        const saveCalories=saveList.reduce((acc,w)=>acc+=w.caloriesBurned,0)
    return (
        <div>
            {activeTab==='today'?<p>{todayCalories}</p>:<p>{saveCalories}</p>}
        </div>
    );
};

export default Calories;