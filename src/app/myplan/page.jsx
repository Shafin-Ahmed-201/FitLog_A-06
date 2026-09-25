"use client";
import React, { useContext } from "react";
import { MyPlanContext } from "../context/MyPlanContext";
import TodayPlanContent from "../myplancontent/TodayPlanContent";
import SavedContent from "../myplancontent/SavedContent";
import NothingHere from "../myplancontent/NothingHere";
import Exercises from "@/components/myplancount/Exercises";
import Minutes from "@/components/myplancount/Minutes";
import Calories from "@/components/myplancount/Calories";

const MyPlanPage = () => {
  const { saveList, todayList, activeTab, setActiveTab, sortBy, setSortBy } = useContext(MyPlanContext);

  return (
    <div className="container mx-auto">
      <div className="mt-5">
        <div className="text-center lg:text-left">
        <h2 className="text-2xl font-bold">MY PLAN</h2>
        <p className="text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
        </div>
        <div className="bg-gray-900/50 mt-5 p-7 rounded-2xl">
          <div className="flex justify-around">
            <div>
              <p className="text-gray-400">Exercises</p>
              <h3 className="text-4xl font-bold text-[#c2f800]">
                <Exercises></Exercises>
              </h3>
            </div>
            <div>
              <p className="text-gray-400">Minutes</p>
              <h3 className="text-4xl font-bold">
                <Minutes></Minutes>
              </h3>
            </div>
            <div>
              <p className="text-gray-400">Calories</p>
              <h3 className="text-4xl font-bold">
                <Calories></Calories>
              </h3>
            </div>
          </div>
        </div>
        {/* Sort Option */}
        <div className="flex justify-end items-center gap-1 mt-9">
          <p className="text-gray-400">Sort By</p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select w-27"
          >
            <option value={"duration"}>Duration</option>
            <option value={"calories"}>Calories</option>
            <option value={"rating"}>Rating</option>
          </select>
        </div>
        {/* Plan Tab */}
        <div className="tabs tabs-lift mb-85">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Today's Plan"
            checked={activeTab === "today"}
            onChange={() => setActiveTab("today")}
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
            checked={activeTab === "saved"}
            onChange={() => setActiveTab("saved")}
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
