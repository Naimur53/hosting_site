import React from 'react';

const Solution = () => {
    return (
        <div className='bg-[#FAFBFF] pb-[102px]'>
            <div className="container ">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-[70px] h-full">



                    <div className='h-full flex justify-center items-center'>
                        <div>
                            <h1 className='heading pt-[86px]'>A Solution that Grows with Your Business</h1>
                            <p className='content-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thdustry's standard dummy text.

                                over wordpress hosting <br />
                                <br />
                                Morem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hosting services and tecnical support
                            </p>
                            <div className='grid grid-cols-2 gap-y-[25px] gap-x-[13px] mt-[61px] mb-[34px]'>
                                <div  >
                                    <img src="/shape/check.png" className='inline-block' alt="check" />
                                    <span className='ml-[10px]'>Blog Hosting</span></div>
                                <div  >
                                    <img src="/shape/check.png" className='inline-block' alt="check" />
                                    <span className='ml-[10px]'>CRM Hosting</span></div>
                                <div  >
                                    <img src="/shape/check.png" className='inline-block' alt="check" />
                                    <span className='ml-[10px]'>eCommerce Hosting</span></div>
                                <div  >
                                    <img src="/shape/check.png" className='inline-block' alt="check" />
                                    <span className='ml-[10px]'>CRM Hosting</span></div>
                            </div>
                            <div>

                                <a href='#' className='btn bg-white text-black  border border-[#D5DCE4]'>Join us today</a>
                            </div>
                        </div>
                    </div>
                    <div className=' md:mt-[100px] md:mb-[115px]'>
                        <img src="/images/blueboxs.png" alt="logo" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Solution;