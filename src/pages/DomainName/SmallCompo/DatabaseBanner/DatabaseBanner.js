import React from 'react';

const DatabaseBanner = () => {
    return (
        <div className='  '>
            <div className="container ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px] h-full">

                    <div className='h-full flex justify-center pb-0 md:pb-[283px] items-center'>
                        <div className='text-neutral-700 '>
                            <h1 className='pt-10 md:pt-[213px] text-normal md:text-base  font-semibold '>Your domain is
                                <br />
                                more than a name.</h1>
                            <p className='content-text mt-[12px]'>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been thdustry's standard dummy text. <br />
                                over hosting service in here
                            </p>
                            <div className='grid grid-cols-2 gap-5'>
                                <div  >
                                    <img src="/shape/check.png" className='inline-block' alt="check" />
                                    <span className='ml-[10px]'>24/7 Support</span></div>
                                <div  >
                                    <img src="/shape/check.png" className='inline-block' alt="check" />
                                    <span className='ml-[10px]'>ISO Certified</span></div>
                                <div  >
                                    <img src="/shape/check.png" className='inline-block' alt="check" />
                                    <span className='ml-[10px]'>Wordpress Builder</span></div>
                                <div  >
                                    <img src="/shape/check.png" className='inline-block' alt="check" />
                                    <span className='ml-[10px]'>Data Security</span></div>
                                <div  >
                                    <img src="/shape/check.png" className='inline-block' alt="check" />
                                    <span className='ml-[10px]'>Add Local Domain</span></div>
                                <div  >
                                    <img src="/shape/check.png" className='inline-block' alt="check" />
                                    <span className='ml-[10px]'>World Class Domain</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center '>
                        <img className='pt-10 md:pt-[159px] pb-10 md:pb-[176px]' src="/images/database.png" alt="logo" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DatabaseBanner;