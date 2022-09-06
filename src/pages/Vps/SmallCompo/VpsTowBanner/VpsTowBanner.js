import React from 'react';

const VpsTowBanner = () => {
    return (
        <div className='bg-[#F6F7F9] xl:mt-[111px] mt-[50px]'>
            <div className='  '>
                <div className="container  h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[92px] h-full">
                        <div className='overflow-hidden  flex justify-center items-center h-full  '  >
                            <div className=''>

                                <img className='pt-10   xl:pt-[104px]   ' src="/images/box4.png" alt="shapes" />
                            </div>
                        </div>
                        <div className='h-full flex justify-center items-center'>
                            <div>
                                <h1 className='pt-20  xl:pt-[142px] text-base xl:text-lg font-semibold'> Main Title gose here</h1>
                                <p className='mt-120 mb-[32px] text-neutral-600 font-normaltext-sm'>
                                    The gift of asceticism, just as in the juxtaposition of

                                    the verbs, introduces a profound sense of    thankfulness by explaining the form. </p>

                                <button className='py-[16px] px-[36px] bg-[#0067FF] text-white btn text-xs'>Build Your Server</button>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
            <div className='  '>
                <div className="container h-full">
                    <div className=" md:grid flex flex-col-reverse grid-cols-1 md:grid-cols-2 gap-4 xl:gap-[92px] h-full">

                        <div className='h-full flex xl:justify-center items-center'>
                            <div className='md:pb-[120px] pb-10'>
                                <h1 className='pt-20  xl:pt-[188px] text-base xl:text-lg font-semibold'> Main Title gose here</h1>
                                <p className='mt-120 mb-[32px] text-neutral-600 font-normaltext-sm'>
                                    The gift of asceticism, just as in the juxtaposition of
                                    <br />
                                    the verbs, introduces a profound sense of <br />  thankfulness by explaining the form. </p>

                                <button className='py-[16px] px-[36px] bg-[#0067FF] text-white btn text-xs'>Build Your Server</button>
                            </div>

                        </div>
                        <div className='overflow-hidden  flex justify-center items-center h-full  '  >
                            <div className=''>

                                <img className='pt-10  pb-[0px] xl:pb-[82px] xl:pt-[150px]   ' src="/images/box4.png" alt="shapes" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default VpsTowBanner;