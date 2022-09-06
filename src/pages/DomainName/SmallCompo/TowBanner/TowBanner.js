import React from 'react';

const TowBanner = () => {
    return (
        <div>
            <div className='bg-cover mt-[20px] md:mt-0 bg-no-repeat overflow-hidden  '>
                <div className="container h-full">
                    <div className="banner_grid h-full">
                        <div className='h-full flex justify-center items-center'>
                            <div>
                                <h1 className='banner_heading'>Your Privacy is Taken <br /> Care Of</h1>
                                <p className='banner_content'>
                                    To a degree, Lorem ipsum dolor sit amet,
                                    <br /> consectetur adipiscing elit, sed do eiusmod magna <br /> aliqua.
                                </p>

                            </div>
                        </div>

                        <div className='overflow-hidden  flex justify-center   h-full'  >
                            <div>

                                <img className='banner_img' src="/shape/shapes1.png" alt="shapes" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=' bg-cover bg-no-repeat overflow-hidden mb-[100px] mt-10 xl:mt-0'>
                <div className="container h-full">
                    <div className="banner_grid h-full">
                        <div className='overflow-hidden  flex justify-center items-center  h-full  '  >
                            <div className=''>

                                <img className='banner_img' src="/shape/shapes2.png" alt="shapes" />
                            </div>
                        </div>
                        <div className='h-full w-full flex justify-center items-center'>
                            <div className='w-full'>
                                <h1 className='banner_heading'>Got a Domain Name Already?
                                    Transfer It to Hostinger Today</h1>
                                <p className='banner_content'>
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