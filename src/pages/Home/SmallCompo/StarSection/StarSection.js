import React from 'react';

const StarSection = () => {
    return (
        <div className=''>
            <div className="container ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-[20px] xl:gap-[160px] h-full">


                    <div className='md:pt-[119px] pt-[60px]'>
                        <img src="/images/googlestart.png" alt="logo" />
                    </div>
                    <div className='h-full flex justify-center items-center pt-[20px] md:pt-[157px]'>
                        <div>
                            <h1 className='heading'>More than 96K brands join & website owners are satisfied</h1>
                            <p className='content-text mb-[37px]'>Don't just take our word for it. We're the web hosting provider of choice for thousands of happy customers.</p>
                            <div>

                                <a href='#' className='btn bg-white btn  text-black  border border-[#D5DCE4]'>Join us today</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StarSection;