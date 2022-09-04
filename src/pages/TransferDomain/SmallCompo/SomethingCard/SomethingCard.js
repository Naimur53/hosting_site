import React from 'react';

const SomethingCard = ({ active }) => {
    return (
        <div className={!active ? "py-[35px]" : ''}>
            {
                active && <div className='text-white py-[6px] text-center   bg-main-blue'>
                    <h2>MOST POPULAR</h2>

                </div>
            }
            <div className='border border-[#E8E8E8] rounded-[6px] py-[20px] px-[32px] '>

                <div className='border-b text-center border-[#E8E8E8]'>
                    <h1 className='text-neutral-800 font-semibold text-sm mb-[8px]'>Cloud hosting</h1>
                    <p className='text-ls pb-116'>For large scale projects</p>

                </div>
                <div className='mt-[24px]'>
                    <div className='mb-[11px]' >
                        <img src="/icons/right.png" className='inline-block' alt="check" />
                        <span className='ml-[14px]'>30 GB Email storage</span>
                    </div>
                    <div className='mb-[11px]' >
                        <img src="/icons/right.png" className='inline-block' alt="check" />
                        <span className='ml-[14px]'>Read Receips</span>
                    </div>
                    <div className='mb-[11px]' >
                        <img src="/icons/right.png" className='inline-block' alt="check" />
                        <span className='ml-[14px]'>Email Templates</span>
                    </div>
                    <div className='mb-[20px]' >
                        <img src="/icons/right.png" className='inline-block' alt="check" />
                        <span className='ml-[14px]'>Follow-up Reminders</span>
                    </div>
                </div>
                <div className='border-t text-center border-[#E8E8E8]   '>
                    <h2 className='pt-[12px] text-normal font-semibold '>$2.99/mo</h2>
                </div>

            </div>
        </div>
    );
};

export default SomethingCard;