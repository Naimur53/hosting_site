import React from 'react';

const DomainSliderCard = ({ logo, describe, price, year }) => {
    return (
        <div className='border border-neutral-300 rounded-[16px] px-116 py-[22px]'>
            <div className='px-5' >
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className=''>
                    <p className='text-ls text-neutral-700 mt-[17px] mb-[23px]'>{describe}</p>
                </div>
                <div className='mb-[42px]'>
                    <span className='text-neutral-500 text-ls inline-block mb-[5px]'>{price}</span>
                    <div className='flex'>
                        <span className='text-neutral-500 text-ls inline-block  '>$</span>
                        <h2 className='text-xl text-neutral-700 font-bold'>

                            {year} <span className='text-neutral-500 text-ls'>/yr</span></h2>
                    </div>


                </div>

            </div>
            <div className='text-center'>
                <a href="#" className='block rounded-full py-[16px] text-white bg-main-blue'>Register</a>
            </div>

        </div>
    );
};

export default DomainSliderCard;