import React from 'react';

const ThreeBanner = () => {
    return (
        <div>
            <div className=' bg-cover  bg-no-repeat overflow-hidden bg-[#EDF2F4]'>
                <div className="container h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[49px] h-full">
                        <div className=' flex justify-center items-center'>
                            <div className=''>
                                <h5 className='text-xs pt-[128px] text-neutral-500 mb-116'>Spacific tags</h5>
                                <h1 className=' heading text-lg font-semibold'>What operating system <br /> should I choose for my virtual private server? </h1>
                                <p className='mt-120   text-neutral-600 font-normal text-[16px]'> With a VPS, you get root access to your server — so you are free to configure it and adapt it to your needs.</p>
                                <p className='mt-120 pb-0 md:pb-[159px] text-neutral-600 font-normal text-[16px]'> To get the most out of your VPS, install the operating system you want your environment to be based on. Choose the option that suits you best, between a Windows server and a Linux server.</p>
                            </div>
                        </div>

                        <div>
                            <div className='overflow-hidden bg-no-repeat bg-center fl ex justify-center items-center h-full pt-[56px] bg-contain ' style={{
                                backgroundImage: 'url(/images/bannerbg.png)'
                            }}>
                                <div>

                                    <img className='mt-0 md:pt-[90px] mb-[100px] ml-[40px]   ' src="/images/control_panel.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='  bg-cover bg-no-repeat overflow-hidden  '>
                <div className="container ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[121px] h-full">
                        <div className='overflow-hidden mt-[40px] md:mt-0 pt-[43px] bg-contain bg-no-repeat bg-center h-full' style={{
                            backgroundImage: 'url(/images/bannerbgblue.png)'
                        }}>
                            <div>

                                <img className='mt-0 md:pt-[139px] ml-[18px]  ' src="/images/control_panel2.png" alt="logo" />
                            </div>
                        </div>
                        <div className='h-full flex justify-center items-center'>
                            <div>
                                <h5 className='text-xs text-neutral-500 pt-0 md:pt-[192px] mb-116'>Spacific tags</h5>
                                <h1 className=' text-lg heading font-semibold'> What is the best way to choose? Gaje VPS</h1>
                                <p className='mt-120 pb-[153px] text-neutral-600 font-normal text-[16px]'>First of all, it is good to take note of the specific features of the game you want to host on your Game VPS. The minimum and optimal configuration recommendations are listed on the game publisher’s website. These tips provide information on the number of processors (CPUs), their frequency, the volume of RAM, and the network bandwidth required to run the game smoothly.  </p>

                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <div className=' bg-cover  bg-no-repeat overflow-hidden bg-[#EDF2F4]'>
                <div className="container h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[49px] h-full">
                        <div className=' flex justify-center items-center'>
                            <div className=''>
                                <h5 className='text-xs pt-[80px] md:pt-[138px] text-neutral-500 mb-116'>Spacific tags</h5>
                                <h1 className=' heading text-lg font-semibold'>Continually monitor performance </h1>
                                <p className='mt-120  pb-0px md:pb-[220px] text-neutral-600 font-normal text-[16px]'>Your server is configured and ready to host players for hours of gameplay. Monitor your machine’s scalability as your users connect. Also, when you install extensions, it is crucial to ensure that they do not require more resources than your Game VPS can provide. This way, you get optimal stability throughout your games..</p>

                            </div>
                        </div>

                        <div>
                            <div className='overflow-hidden bg-no-repeat bg-center fl ex justify-center items-center h-full pt-[56px] bg-contain ' style={{
                                backgroundImage: 'url(/images/bannerbg.png)'
                            }}>
                                <div>

                                    <img className='mt-0 md:pt-[90px] mb-[100px] ml-[40px]   ' src="/images/control_panel.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ThreeBanner;