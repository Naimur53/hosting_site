import React from 'react';

const TowBanner = () => {
    return (
        <div>
            <div className='bg-cover bg-no-repeat overflow-hidden  '>
                <div className="container h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[273px] h-full">
                        <div className='h-full flex justify-center items-center'>
                            <div>
                                <h1 className='pt-10 md:pt-[266px] heading font-bold'>Your Privacy is Taken <br /> Care Of</h1>
                                <p className='mt-[32px] mb-148 text-neutral-600 font-normal text-[16px]'>
                                    To a degree, Lorem ipsum dolor sit amet,
                                    <br /> consectetur adipiscing elit, sed do eiusmod magna <br /> aliqua.
                                </p>

                            </div>
                        </div>

                        <div className='overflow-hidden  flex justify-center   h-full'  >
                            <div>

                                <img className='pt-10 md:pt-[137px] -ro tate-12' src="/shape/shapes1.png" alt="shapes" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=' bg-cover bg-no-repeat overflow-hidden mb-[100px] '>
                <div className="container h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[195px] h-full">
                        <div className='overflow-hidden  flex justify-center items-center h-full px-0 md:px-20'  >
                            <div className=''>

                                <img className='pt-10 md:pt-[263px]  pb-10 md:pb-[281px] ' src="/shape/shapes2.png" alt="shapes" />
                            </div>
                        </div>
                        <div className='h-full flex justify-center items-center'>
                            <div>
                                <h1 className='pt-10 md:pt-[235px] heading font-bold'>Got a Domain Name Already?
                                    <br /> Transfer It to Hostinger Today</h1>
                                <p className='mt-[26px] mb-148 text-neutral-600 font-normal pb-10 md:pb-[334px] text-[16px]'>
                                    To a degree, Lorem ipsum dolor sit amet,
                                    <br /> consectetur adipiscing elit, sed do eiusmod magna <br /> aliqua.
                                </p>


                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default TowBanner;