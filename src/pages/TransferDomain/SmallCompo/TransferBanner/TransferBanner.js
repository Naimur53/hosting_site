import React from 'react';

const TransferBanner = () => {
    return (
        <div>
            <div style={{ backgroundImage: 'url(/shape/Line5.png)' }} className='pb-[56px] flex items-center bg-cover bg-right-bottom bg-no-repeat overflow-hidden mt-10'>
                <div className="container">
                    <div>
                        <h1 className='pt-10 md:pt-[151px]  text-lg md:text-2xl   text-center font-bold'>Transfer your domain  </h1>
                        <p className='text-center  mt-[12px] mb-[32px] Hosting companies Interested in doing business with you font-normal text-neutral-600 text-sm'>Don't just take our word for it. We're the web hosting provider of <br /> choice for thousands of happy customers.</p>
                    </div>
                    <div className='mt-[32px] flex justify-center '>
                        <div className='md:block flex flex-col justify-center items-center'>
                            <input type="text" className='py-[16px] text-xs placeholder:text-neutral-500 border border-[#D5DCE4] inline-block w-full md:w-[340px] rounded-[50px] px-[32px] mr-[12px]' placeholder='enter the domain you want to transfer ' />
                            <button className='py-[16px] md:mt-0 mt-5  text-xs text-white bg-[#0067FF] rounded-[50px] px-[32px]'> Transfer now</button>
                        </div>
                    </div>
                    <div className="mt-[24px]   text-center">
                        <p className='text-ls font-medium'>Looking for a new domain name? <span className='text-main-blue'>Try new one</span></p>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default TransferBanner;