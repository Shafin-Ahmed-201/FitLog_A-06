'use client'
import React, { createContext, useState } from 'react';
export const MyPlanContext=createContext({})
const MyPlanProvider = ({children}) => {
    const [todayList,setTodayList]=useState([])
    const [saveList,setSaveList]=useState([])
    const [asDone,setAsDone]=useState(false)
    const shareData={
       todayList,
       setTodayList,
       saveList,
       setSaveList,
       asDone,
       setAsDone 
    }
    return (
        <MyPlanContext.Provider value={shareData}>{children}</MyPlanContext.Provider>
    );
};

export default MyPlanProvider;