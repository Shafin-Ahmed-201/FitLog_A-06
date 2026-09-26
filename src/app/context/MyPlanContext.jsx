"use client";

import React, {
  createContext,
  useEffect,
  useState,
} from "react";

export const MyPlanContext = createContext({});

const MyPlanProvider = ({ children }) => {
  const [todayList, setTodayList] = useState([]);
  const [saveList, setSaveList] = useState([]);
  const [asDone, setAsDone] = useState([]);
  const [activeTab, setActiveTab] = useState("today");
  const [sortBy, setSortBy] = useState("duration");
  const [search, setSearch] = useState("");

  const [loaded, setLoaded] = useState(false);

  // Load from localStorage for todatList
  useEffect(() => {
    const savedTodayList = localStorage.getItem("todayList");

    if (savedTodayList) {
      setTodayList(JSON.parse(savedTodayList));
    }

    setLoaded(true);
  }, []);
 // Load from localStorage for saveList
  useEffect(() => {
    const savedSaveList = localStorage.getItem("saveList");

    if (savedSaveList) {
      setSaveList(JSON.parse(savedSaveList));
    }

    setLoaded(true);
  }, []);
 // Load from localStorage for Mark As Done
  useEffect(() => {
    const savedMarkList = localStorage.getItem("asDone");

    if (savedMarkList) {
      setAsDone(JSON.parse(savedMarkList));
    }

    setLoaded(true);
  }, []);

  // Save to localStorage for todayList
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "todayList",
      JSON.stringify(todayList)
    );
  }, [todayList, loaded]);
 // Save to localStorage for saveList
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "saveList",
      JSON.stringify(saveList)
    );
  }, [saveList, loaded]);
 // Save to localStorage for Mark As Done
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "asDone",
      JSON.stringify(asDone)
    );
  }, [asDone, loaded]);

  const shareData = {
    todayList,
    setTodayList,
    saveList,
    setSaveList,
    asDone,
    setAsDone,
    activeTab,
    setActiveTab,
    sortBy,
    setSortBy,
    search,
    setSearch,
  };

  return (
    <MyPlanContext.Provider value={shareData}>
      {children}
    </MyPlanContext.Provider>
  );
};

export default MyPlanProvider;