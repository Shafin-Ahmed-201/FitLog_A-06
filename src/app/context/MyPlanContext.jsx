'use client'
import React, { createContext, useState } from 'react';
export const MyPlanContext=createContext({})
const MyPlanProvider = ({children}) => {
    const [todayList,setTodayList]=useState([])
    const [saveList,setSaveList]=useState([])
    const [asDone,setAsDone]=useState([])
    const [activeTab, setActiveTab] = useState("today")
    const [sortBy, setSortBy] = useState("duration")
    const shareData={
       todayList,
       setTodayList,
       saveList,
       setSaveList,
       asDone,
       setAsDone,
       activeTab,
       setActiveTab,
       sortBy,
       setSortBy 
    }
    return (
        <MyPlanContext.Provider value={shareData}>{children}</MyPlanContext.Provider>
    );
};

export default MyPlanProvider;