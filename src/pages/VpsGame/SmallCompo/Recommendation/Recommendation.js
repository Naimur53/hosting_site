import React from 'react';
import RecomCard from './SmallCompo/RecomCard/RecomCard';

const Recommendation = () => {
    return (
        <div>
            <div className='min-h-screen relative bg-cover overflow-hidden bg-no-repeat pb-10 text-white bg-banner'>

                <div className='text-center px-2 pt-[80px] text-neutral-300 '>
                    <h1 className='text-normal md:text-base mb-118  font-semibold md:font-lg '>Our recommendations</h1>
                </div>


                <div className='container mt-10'>
                    <div className="block md:flex justify-center">
                        <RecomCard dollar='4.18'></RecomCard>
                        <RecomCard dollar='8.016'></RecomCard>
                    </div>
                </div>

                {/* background blur effect  */}
                <div className="absolute   left-1/2 top-[300px]">
                    <div className='bg-[#07E1BA] absolute rotate-[14deg] blur-[200px] h-[150px] w-[100px] md:w-[640px] -translate-x-1/2'>

                    </div>
                    <div className='bg-[#0074FF] absolute rotate-[-4deg] blur-[200px] h-[150px]  w-[100px] md:w-[640px]'>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Recommendation;