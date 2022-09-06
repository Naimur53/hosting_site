import React from 'react';
const SignupSliderCard = ({ text }) => (
    <div className='flex flex-col justify-center items-center '>

        <div className="flex justify-center">
            <div className='relative top-[40px] inline-block'>
                <img src="/images/user_slider.png" alt="user" />
                <div className='absolute -bottom-2 -right-4 bg-white rounded-full user_star_shawdow' >
                    <div className='py-[4px] px-[9px] flex gap-[6px] justify-center items-center'>
                        <img src="/icons/yellowstar.png" alt="star" />
                        <p className='font-poppins text-xs font-semibold text-[#172228]'>4.9</p>
                    </div>
                </div>
            </div>
        </div>
        <div className=' h-[274px]    bg-white text-center pt-[55px] px-[16px] pb-[39px] rounded-[26px] '>
            <p className='text-medium text-ls text-[#172228] '>
                {
                    text
                }
            </p>
        </div>
    </div>
)

export default SignupSliderCard;