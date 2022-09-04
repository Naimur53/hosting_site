import React from 'react';

const EmailBanner = () => {
    return (
        <div>
            <div>
                <div style={{ backgroundImage: 'url(/shape/Line4.png)' }} className=' relative flex items-center bg-cover bg-no-repeat overflow-hidden '>
                    <div className="container">
                        <div>
                            <h1 className='pt-[88px]  text-lg md:text-2xl   text-center font-bold'> Business Email Hosting</h1>
                            <p className='text-center  mt-[15px] mb-[27px] Hosting companies Interested in doing business with you font-normal text-[16px] text-neutral-600                   '>Make moves a free domain and SSL included with a yearly <br /> susbscription.</p>
                            <div className='text-center relative z-10 font-poppins'>

                                <a href='#' className='btn bg-seen-blue text-white mr-116'>Start Now</a>
                                <a href='#' className='btn relative z-10 bg-white text-black mt-5 md:mt-0'>Try a free demo</a>
                            </div>
                            <div className='mt-[50px] relative flex justify-center z-10'>
                                <img src="/images/EMail-Service.png" alt="web" />
                            </div>
                        </div>
                        {/* background blur effect  */}
                        <div className="absolute  -translate-x-[200px] left-2/4 top-[300px]">
                            <div className='bg-[#07E1BA] absolute rotate-[14deg] blur-[150px] h-[150px] w-[70px] md:w-[640px] -translate-x-1/2'>

                            </div>
                            <div className='bg-[#0074FF] absolute rotate-[-4deg] blur-[150px] h-[150px]  w-[70px] md:w-[640px]'>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default EmailBanner;