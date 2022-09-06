import React from 'react';

const RecomCard = ({ dollar, }) => {
    return (
        <div className='px-4'>
            <div className='border mt-5 md:mt-0  border-[#64788E] border-t-0 rounded-[8px] bg-[#172535] relative mb-10    text-center font-inter'>
                <div className='text-white text-xs bg-dark-bright-blue rounded-bl-none rounded-br-none w-full uppercase px-3 font-light py-3 rounded '>
                    Special deals
                </div>
                <div className=' px-[64px]'>

                    <div className='py-136'>

                        <h2 className='text-normal mb-118 font-bold'>Value</h2>
                        <p className='text-ls text-neutral-200 mb-120'> US$ 6</p>
                        <div>
                            <h1 className='text-xl xl:text-2xl   font-semibold mr-1'>US$ {dollar}</h1>
                        </div>
                        <div className='mt-1 mb-120'>
                            <p className='text-xs'>ex. GST/month during two years</p>
                            <span className='mt-120 inline-block bg-[#0074FF]/[0.14] rounded-md text-[#358EF9] p-2 '>24 months commitment (-30%)</span>
                        </div>
                        <div className='flex justify-center'>

                            <button className='text-white  bg-dark-bright-blue py-[16px] px-[50px] font-light text-xs 2xl:text-sm  rounded-full block  '>Order Now</button>
                        </div>
                        <p className='my-118 text-xs font-medium text-[#BEF1FF]'>
                            1 vCore
                            <br />
                            2 GB
                            <br />
                            40 GB SSD NVMe
                            <br />
                            250 Mbps unmetered

                        </p>
                        <button className='text-[#74B3FF] mt-5'>Compare &gt;</button>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default RecomCard;