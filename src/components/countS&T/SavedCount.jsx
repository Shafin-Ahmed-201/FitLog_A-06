'use client'
import { MyPlanContext } from '@/app/context/MyPlanContext';
import React, { useContext } from 'react';

const SavedCount = () => {
    const {saveList}=useContext(MyPlanContext)
    return (
        <div>
            <p className='bg-gray-600 p-0.5 rounded-[40%]'>{saveList.length}</p>
        </div>
    );
};

export default SavedCount;