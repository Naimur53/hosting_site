import React from 'react';

const TowBanners = () => {
    return (
        <div>
            <div className=' bg-cover pb-[40px] lg:pb-[90px] bg-no-repeat overflow-hidden bg-[#EDF2F4]'>
                <div className="container h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[121px] h-full">
                        <div>
                            <div className='overflow-hidden bg-no-repeat bg-bottom flex justify-center items-center h-full  pt-[47px] bg-contain '  >
                                <div>

                                    <img className='mt-[30px] lg:mt-[108px]  mb-[0px] lg:mb-[60px]  ' src="/images/box4.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <div>
                                <h5 className='text-xs pt-[50px] lg:pt-[129px]  text-neutral-500  mb-116'>Spacific tags</h5>
                                <h1 className=' heading font-bold'>Lorem Ipsum is probably the most popular </h1>
                                <p className='mt-120 mb-[20px] lg:mb-148 text-neutral-600 font-normal text-[16px]'>To a degree, Lorem Ipsum is gibberish, but it is rooted in a real language: Latin. The text's origins are based on a passage from a piece of classicall. </p>
                                <div>

                                    <a href='#' className='btn bg-seen-blue text-white mr-116'>CTA Button</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <div className=' bg-cover pb-[40px] lg:pb-[90px] bg-no-repeat overflow-hidden bg-[#EDF2F4]'>
                <div className="container h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[121px] h-full">

                        <div className=' flex justify-center items-center'>
                            <div>
                                <h5 className='text-xs pt-[50px] lg:pt-[129px]  text-neutral-500  mb-116'>Spacific tags</h5>
                                <h1 className=' heading font-bold'>Lorem Ipsum is probably the most popular </h1>
                                <p className='mt-120 mb-[20px] lg:mb-148 text-neutral-600 font-normal text-[16px]'>To a degree, Lorem Ipsum is gibberish, but it is rooted in a real language: Latin. The text's origins are based on a passage from a piece of classicall. </p>
                                <div>

                                    <a href='#' className='btn bg-seen-blue text-white mr-116'>CTA Button</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='overflow-hidden bg-no-repeat bg-bottom flex justify-center items-center h-full  pt-[47px] bg-contain ' >
                                <div>

                                    <img className='mt-[0px] lg:mt-[108px]  mb-[0px] lg:mb-[60px] ' src="/images/box3.png" alt="logo" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default TowBanners;