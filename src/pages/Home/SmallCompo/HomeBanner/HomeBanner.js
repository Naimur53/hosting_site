import React from 'react';

const HomeBanner = () => {
    return (
        <div style={{ backgroundImage: 'url(/shape/Line4.png)' }} className='pb-[77px] bg-cover bg-no-repeat overflow-hidden bg-banner  '>
            <div className="container h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                    <div className='   justify-center items-center'>
                        <div>
                            <h1 className='pt-[175px]  text-lg 2xl:text-3xl text-white font-bold'>Affordable <br /> Hostim Solution <br /> Website</h1>
                            <p className='mt-[22px] md:w-4/5 w-full mb-[44px] text-white font-normal text-[16px]'>Make moves a free domain and SSL included with a yearly   susbscription.</p>
                            <div>

                                <a href='#' className='btn mb-5 lg:mb-0 bg-seen-blue text-white mr-116'>See plans</a>
                                <a href='#' className='btn  bg-white text-black mt-5 md:mt-0'>Try a free demo</a>
                            </div>
                            <p className='mt-[19px] md:pb-0 pb-[77px] text-neutral-400'>30 day money back guarantee</p>
                        </div>
                    </div>

                    <div className='h-full flex justify-center items-end'>
                        <img className='mt-0 relative top-0 xl:top-[180px] md:mt-[0px]' src="/images/banner-logo.png" alt="logo" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeBanner;