import { MyPlanContext } from '@/app/context/MyPlanContext';
import React, { useContext } from 'react';

const Exercises = () => {
      const {activeTab,todayList,saveList} = useContext(MyPlanContext);
    
    return (
        <div>
            {activeTab === 'today'? <p>{todayList.length}</p>:<p>{saveList.length}</p>}
        </div>
    );
};

export default Exercises;