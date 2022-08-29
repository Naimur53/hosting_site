import React from 'react';

const HomeBanner = () => {
    return (
        <div style={{ backgroundImage: 'url(/shape/Line4.png)' }} className='h-screen bg-cover bg-no-repeat overflow-hidden bg-banner'>
            <div className="container h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                    <div className='h-full flex justify-center items-center'>
                        <div>
                            <h1 className='mt-10 md:mt-0 text-lg md:text-3xl text-white font-bold'>Affordable <br /> Hostim Solution <br /> Website</h1>
                            <p className='mt-120 mb-148 text-white font-normal text-[16px]'>Make moves a free domain and SSL included with a yearly susbscription.</p>
                            <div>

                                <a href='#' className='btn bg-seen-blue text-white mr-116'>See plans</a>
                                <a href='#' className='btn bg-white text-black mt-5 md:mt-0'>Try a free demo</a>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-hidden'>
                        <img className='mt-0 md:mt-36 -ro tate-12' src="/images/banner-logo.png" alt="logo" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeBanner;