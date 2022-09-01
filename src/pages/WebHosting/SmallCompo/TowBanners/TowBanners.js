import React from 'react';

const TowBanners = () => {
    return (
        <div>
            <div className='h-screen bg-cover bg-no-repeat overflow-hidden bg-[#EDF2F4]'>
                <div className="container h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                        <div className='overflow-hidden bg-no-repeat bg-center h-full' >
                            <div>

                                <img className='mt-0 md:mt-36 -ro tate-12' src="/images/box4.png" alt="logo" />
                            </div>
                        </div>
                        <div className='h-full flex justify-center items-center'>
                            <div>
                                <h5 className='text-xs text-neutral-500 mb-116'>Spacific tags</h5>
                                <h1 className='mt-10 md:mt-0 heading font-bold'>Lorem Ipsum is probably the most popular </h1>
                                <p className='mt-120 mb-148 text-neutral-600 font-normal text-[16px]'>To a degree, Lorem Ipsum is gibberish, but it is rooted in a real language: Latin. The text's origins are based on a passage from a piece of classicall. </p>
                                <div>

                                    <a href='#' className='btn bg-seen-blue text-white mr-116'>CTA Button</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <div className='h-screen bg-cover bg-no-repeat overflow-hidden bg-[#EDF2F4]'>
                <div className="container h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                        <div className='h-full flex justify-center items-center'>
                            <div>
                                <h5 className='text-xs text-neutral-500 mb-116'>Spacific tags</h5>
                                <h1 className='mt-10 md:mt-0 heading font-bold'>Lorem Ipsum is probably the most popular </h1>
                                <p className='mt-120 mb-148 text-neutral-600 font-normal text-[16px]'>To a degree, Lorem Ipsum is gibberish, but it is rooted in a real language: Latin. The text's origins are based on a passage from a piece of classicall. </p>
                                <div>

                                    <a href='#' className='btn bg-seen-blue text-white mr-116'>CTA Button</a>
                                </div>
                            </div>
                        </div>

                        <div className='overflow-hidden bg-no-repeat bg-center h-full' >
                            <div>

                                <img className='mt-0 md:mt-36 -ro tate-12' src="/images/box3.png" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TowBanners;