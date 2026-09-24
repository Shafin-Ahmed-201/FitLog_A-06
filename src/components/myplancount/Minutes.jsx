import { MyPlanContext } from '@/app/context/MyPlanContext';
import React, { useContext } from 'react';

const Minutes = () => {
    const {activeTab,todayList,saveList} = useContext(MyPlanContext);
    const todayMinute=todayList.reduce((acc,w)=>acc+=w.duration,0)
    const saveMinute=saveList.reduce((acc,w)=>acc+=w.duration,0)
    return (
        <div>
            {activeTab==='today'?<p>{todayMinute}</p>:<p>{saveMinute}</p>}
        </div>
    );
};

export default Minutes;