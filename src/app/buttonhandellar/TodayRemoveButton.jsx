"use client";
import React, { useContext } from "react";
import { MyPlanContext } from "../context/MyPlanContext";
import { Bounce, toast } from "react-toastify";

const TodayRemoveButton = ({ workout }) => {
  const { todayList, setTodayList} = useContext(MyPlanContext);
  const handelRemoveButton = (workout) => {
    const newtoday = todayList.filter((w) => w.id !== workout.id);
    setTodayList(newtoday);

    toast.info(`${workout.name} removed from Today's Plan`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <div>
      <button
        onClick={() => handelRemoveButton(workout)}
        className=" cursor-pointer
            ml-1
            text-xl
            text-gray-500
            transition
            hover:text-white
          "
      >
        ×
      </button>
    </div>
  );
};

export default TodayRemoveButton;
