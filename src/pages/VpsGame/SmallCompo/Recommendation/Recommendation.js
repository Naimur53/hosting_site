import React from 'react';
import RecomCard from './SmallCompo/RecomCard/RecomCard';

const Recommendation = () => {
    return (
        <div>
            <div className='min-h-screen relative bg-cover overflow-hidden bg-no-repeat pb-10 text-white bg-banner'>

                <div className='text-center px-2 pt-[80px] text-neutral-300 '>
                    <h1 className='text-normal md:text-lg   font-semibold '>Our recommendations</h1>
                </div>


                <div className='container mt-[62px]'>
                    <div className="block relative z-20 md:flex justify-center">
                        <RecomCard dollar='4.18'></RecomCard>
                        <RecomCard dollar='8.016'></RecomCard>
                    </div>
                </div>

                {/* background blur effect  */}
                <div className="absolute pointer-events-none  left-1/2 top-[300px]">
                    <div className='bg-[#07E1BA] absolute rotate-[14deg] blur-[150px] h-[177px] w-[100px] md:w-[851px] -translate-x-1/2'>

                    </div>
                    <div className='bg-[#0074FF] -translate-x-1/2 absolute rotate-[-4deg] blur-[227px] h-[150px]  w-[100px] md:w-[961px]'>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Recommendation;