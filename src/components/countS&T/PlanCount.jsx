"use client";
import { MyPlanContext } from "@/app/context/MyPlanContext";
import React, { useContext } from "react";

const PlanCount = () => {
  const { todayList } = useContext(MyPlanContext);
  return (
    <div>
      <p className="bg-[#c2f800] text-black p-0.5 rounded-[40%]">
        {todayList.length}
      </p>
    </div>
  );
};

export default PlanCount;
