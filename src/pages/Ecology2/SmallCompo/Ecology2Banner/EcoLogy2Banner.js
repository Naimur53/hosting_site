import React from 'react';

const EcoLogy2Banner = () => {
    return (
        <div>
            <div className='  bg-left-bottom bg-no-repeat overflow-hidden mt-[32px] bg-[length:460px_616px]' style={{
                backgroundImage: 'url(/images/greendot.png)',
            }}>
                <div className="container  ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                        <div className=' pb-10  pt-10 md:pt-[70px] md:pb-[118px]' >
                            <div>

                                <img src="/images/boy.png" alt="logo" />
                            </div>
                        </div>
                        <div className='  flex justify-center items-center'>
                            <div>
                                <h1 className='md:pt-[271px]  pt-10 text-base md:text-xl  font-bold '> Providing fast, eco- <br /> friendly, and secure web hosting.</h1>
                                <p className='mt-[36px] md:pb-[269px] pb-10  text-neutral-600 font-normal text-sm'>Environmental pollution is a major problem caused by the Internet. The leading eco-friendly web hosting provider can help you make a positive impact on the environment.  </p>

                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default EcoLogy2Banner;