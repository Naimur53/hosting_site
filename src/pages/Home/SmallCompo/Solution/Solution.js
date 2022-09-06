import React from 'react';

const Solution = () => {
    return (
        <div className=' pb-[102px]'>
            <div className="container ">
                <div className="md:grid flex flex-col-reverse grid-cols-1  grid-flow-dense direction		 md:grid-cols-2 gap-[20px] xl:gap-[70px] h-full">



                    <div className='h-full flex col-span-1	 justify-center items-center'>
                        <div>
                            <h1 className='heading pt-[80px]'>A Solution that Grows with Your Business</h1>
                            <p className='content-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thdustry's standard dummy text. over wordpress hosting
                            </p>

                            <p className='content-text mt-3 xl:mt-5'>
                                Morem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hosting services and tecnical support
                            </p>
                            <div className='grid grid-cols-2 gap-y-[25px] gap-x-[13px] mt-[30px] xl:mt-[61px] mb-[34px]'>
                                <div className='flex items-center'>
                                    <img src="/shape/check.png" className='inline-block' alt="check" />
                                    <span className='ml-[10px]'>Blog Hosting</span></div>
                                <div className='flex items-center'>
                                    <img src="/shape/check.png" className='inline-block' alt="check" />
                                    <span className='ml-[10px]'>CRM Hosting</span></div>
                                <div className='flex items-center' >
                                    <img src="/shape/check.png" className='inline-block' alt="check" />
                                    <span className='ml-[10px]'>eCommerce Hosting</span></div>
                                <div className='flex items-center'>
                                    <img src="/shape/check.png" className='inline-block' alt="check" />
                                    <span className='ml-[10px]'>CRM Hosting</span></div>
                            </div>
                            <div>

                                <a href='#' className='btn bg-white text-black  border border-[#D5DCE4]'>Join us today</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1	pt-[80px] md:pt-[175px] md:pb-[115px]'>
                        <img src="/images/blueboxs.png" alt="logo" />
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Solution;