import React from 'react';

const MenLaptop = () => {
    return (
        <div className='px-5 md:px-0   grid md:grid-cols-2 grid-cols-1 gap-4'>
            <div className='bg-[#D8EBF5]'>
                <img src="/images/menlaptop.png" alt="menlaptop" />
            </div>
            <div className='flex h-full relative items-center'>
                <div className='bg-dark-blue py-130 px-2 md:px-120 text-white  static md:relative right-60'>
                    <div>

                        <img src="/icons/qute1.png" alt="qute" />
                    </div>
                    <p className='md:px-20 px-0'> I love the performance and the technical support! Since WiredTree acquired me, I've had a lot of downtimes. It's incredible how much faster my site loads now because it works so well. Also, they have the best support. Particularly their technical knowledge. Hostim is great! I'm glad I switched!    </p>
                    <div className='flex justify-end'>
                        <img src="/icons/qute2.png" alt="qute" />

                    </div>
                </div>
            </div>



        </div>
    );
};

export default MenLaptop;