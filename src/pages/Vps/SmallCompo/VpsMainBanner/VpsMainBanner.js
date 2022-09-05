import React from 'react';

const VpsMainBanner = () => {
    return (
        <div>
            <div className='container'>
                <div className='mt-[118px]'>
                    <div className='flex flex-col md:flex-row  gap-[8px]'>
                        <button className='py-[8px] px-[36px] bg-main-blue text-white rounded-[50px] text-xs font-medium'>VPS</button>
                        <button className='py-[8px] px-[36px] btn rounded-[50px] text-xs font-medium border border-[#D5DCE4]'>Dedicated servers</button>
                        <button className='py-[8px] px-[36px] btn rounded-[50px] text-xs font-medium border border-[#D5DCE4]'>Web hosting</button>
                    </div>

                </div>
            </div>
            <div className='mt-[26px] bg-[#F6F7F9] text-center'>
                <div className="container">
                    <h1 className='pt-[29px] pb-[13] font-bold text-lg'>VPS server</h1>
                    <p>Simply type in your desired name and instantly check domain name availability. Buy and <br /> register a domain easily with Hostinger.</p>
                    <div className='md:flex justify-between mt-[42px]'>

                        <div className='flex md:flex-row flex-col gap-[7px] '>
                            <button className='py-[18px] px-[20px] text-center font-semibold text-ls text-neutral-500  transition-all border-t-[2px] bg-white active-vps'>All plans</button>
                            <button className='py-[18px] px-[20px] text-center bg-white font-semibold text-ls text-neutral-500  transition-all border-t-[2px] '>Lightweight</button>
                            <button className='py-[18px] px-[20px] text-center font-semibold text-ls text-neutral-500  transition-all border-t-[2px] bg-white'>Middleweight</button>
                            <button className='py-[18px] px-[20px] text-center font-semibold text-ls text-neutral-500  transition-all border-t-[2px] bg-white'>Heavyweight</button>
                        </div>
                        <div className='mt-[7px]'>
                            <button className='w-full md:auto py-[18px] px-[20px] text-center font-semibold text-ls text-neutral-500  transition-all border-t-[2px] bg-white'>Billing cycle Monthly</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VpsMainBanner;