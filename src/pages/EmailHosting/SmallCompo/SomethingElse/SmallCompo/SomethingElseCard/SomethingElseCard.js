import React from 'react';

const SomethingElseCard = ({ heading }) => {
    return (
        <div className="pt-[32px]">
            <div className='hover:scale-[1.13] transition-all  bg-white'>
                <div className='p-5 border rounded-b-none border-b-0 border-gray-300 rounded-lg'>
                    <h1 className='text-base font-semibold'>{heading}</h1>
                    <p className='text-neutral-600 text-sm mt-116'>Optimized for small and medium business</p>
                    <div className='mt-[32px]'>
                        <p>
                            <img className='inline-block' src="/icons/smallCheck.png" alt="right" />
                            <span className='font-semibold text-sm text-neutral-600 ml-[10px] mb-116'>Up to 100 Websites</span>

                        </p>
                        <p>
                            <img className='inline-block' src="/icons/smallCheck.png" alt="right" />
                            <span className='font-semibold text-sm text-neutral-600 ml-[10px] mb-116'>Unlimited Bandwith</span>

                        </p>
                        <p>
                            <img className='inline-block' src="/icons/smallCheck.png" alt="right" />
                            <span className='font-semibold text-sm text-neutral-600 ml-[10px] mb-116'>Up to 100  Email Accounts</span>

                        </p>
                        <p>
                            <img className='inline-block' src="/icons/smallCheck.png" alt="right" />
                            <span className='font-semibold text-sm text-neutral-600 ml-[10px] mb-116'>Free SSL Certificate  Domain</span>

                        </p>
                    </div>

                </div>
                <div className='bg-[#FAFBFF] p-5'>
                    <h3 className='font-semibold text-sm text-neutral-600 ml-[10px] mb-116'>From</h3>
                    <h2 className='font-bold text-normal mt-[8px]'>
                        $10.5/mo
                    </h2>


                </div>

            </div>
        </div>
    );
};

export default SomethingElseCard;