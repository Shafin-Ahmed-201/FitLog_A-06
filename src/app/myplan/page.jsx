"use client";
import React, { useContext } from "react";
import { MyPlanContext } from "../context/MyPlanContext";
import TodayPlanContent from "../myplancontent/TodayPlanContent";
import SavedContent from "../myplancontent/SavedContent";
import NothingHere from "../myplancontent/NothingHere";

const MyPlanPage = () => {
  const { todayList, saveList } = useContext(MyPlanContext);
  return (
    <div className="container mx-auto">
      <div className="mt-5">
        <h2 className="text-2xl font-bold">MY PLAN</h2>
        <p className="text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
        <div className="bg-gray-900/50 mt-5 p-7 rounded-2xl">
          <div className="flex justify-around">
            <div>
              <p className="text-gray-400">Exercises</p>
              <h3 className="text-4xl font-bold">2</h3>
            </div>
            <div>
              <p className="text-gray-400">Minutes</p>
              <h3 className="text-4xl font-bold">23</h3>
            </div>
            <div>
              <p className="text-gray-400">Calories</p>
              <h3 className="text-4xl font-bold">190</h3>
            </div>
          </div>
        </div>

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift mt-7 mb-60">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Today's Plan"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {todayList.length <= 0 ? (
              <NothingHere></NothingHere>
            ) : (
              <TodayPlanContent></TodayPlanContent>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Saved"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {saveList.length <= 0 ? (
              <NothingHere></NothingHere>
            ) : (
              <SavedContent></SavedContent>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
