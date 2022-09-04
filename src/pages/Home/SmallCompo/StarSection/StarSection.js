import React from 'react';

const StarSection = () => {
    return (
        <div className='md:mt-[130px] mt-[80px] mb-[94px]'>
            <div className="container ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[160px] h-full">


                    <div className=' '>
                        <img src="/images/googlestart.png" alt="logo" />
                    </div>
                    <div className='h-full flex justify-center items-center'>
                        <div>
                            <h1 className='heading'>More than 96K brands join & website owners are satisfied</h1>
                            <p className='content-text mb-[37px]'>Don't just take our word for it. We're the web hosting provider of choice for thousands of happy customers.</p>
                            <div>

                                <a href='#' className='btn bg-white text-black mt-5 md:mt-0 border border-[#D5DCE4]'>Join us today</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StarSection;