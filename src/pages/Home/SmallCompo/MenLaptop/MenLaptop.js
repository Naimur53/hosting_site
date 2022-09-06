import React from 'react';

const MenLaptop = () => {
    return (
        <div className=" ">
            <div className='   grid lg:grid-cols-5 grid-cols-1  lg:gap-4'>
                <div className='bg-[#D8EBF5] col-span-3'>
                    <img className='pt-[31px] pb-[6px] pr-[28px] pl-[16px]' src="/images/menlaptop.png" alt="menlaptop" />
                </div>
                <div className='flex w-full mt-5 lg:mt-0 relative items-center col-span-2'>
                    <div className='bg-dark-blue py-130  max-w-[720px] lg:w-[50vw] pl-[37px] text-white  static lg:absolute w-full   right-0'>
                        <div>

                            <img className='w-[60px] lg:w-auto' src="/icons/qute1.png" alt="qute" />
                        </div>
                        <p className='text-[20px] lg:text-normal font-normal   pr-[30px]'> I love the performance and the technical support! Since WiredTree acquired me, I've had a lot of downtimes. It's incredible how much faster my site loads now because it works so well. Also, they have the best support. Particularly their technical knowledge. Hostim is great! I'm glad I switched!    </p>
                        <div className='flex justify-end'>
                            <img className='w-[60px] lg:w-auto' src="/icons/qute2.png" alt="qute" />

                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default MenLaptop;