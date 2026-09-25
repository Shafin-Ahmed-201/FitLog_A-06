'use client'
import { MyPlanContext } from '@/app/context/MyPlanContext';
import React, { useContext } from 'react';

const Search = () => {
    const {search,setSearch}=useContext(MyPlanContext)
    return (
        <div>
           <div className="mx-auto mt-3 max-w-xl">
          <div className="flex items-center rounded-xl border border-gray-700 bg-gray-900 px-4 shadow-lg">
            <span className="mr-3 text-xl">🔍</span>

            <input
              type="text"
              placeholder="Search for a lifts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-3 text-white outline-none placeholder:text-gray-500"
            />
          </div>
        </div> 
        </div>
    );
};

export default Search;