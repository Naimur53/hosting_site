import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode, } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const SignupSlider = () => {
    const data = [
        {
            heading: 'Domains'
        },
    ]
    return (
        <div className='pb-[44px]'>
            <Swiper
                spaceBetween={16}
                slidesPerView={4}
                freeMode={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, FreeMode,]}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },
                }}
                grabCursor={true}
            >
                <SwiperSlide  >
                    <div className='flex flex-col justify-center items-center h-full'>

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
                        <div className=' w-full  bg-white text-center pt-[55px] px-[16px] pb-[49px] rounded-[26px] '>
                            <p className='text-medium text-ls text-[#172228] '>
                                J'adore les performances et le
                                <br />
                                support technique ! Depuis que je <br /> suis chez Hostim, je n’ai eu de <br /> temps d'arrêt. C'est incroyable à <br /> quel point mon site se charge <br /> plus rapidement maintenant <br /> parce qu'il fonctionne si bien.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide  >
                    <div className='flex flex-col justify-center items-center h-full'>
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
                        <div className=' w-full  bg-white text-center pt-[55px] px-[16px] pb-[49px] rounded-[26px] '>
                            <p className='text-medium text-ls text-[#172228] '>
                                J'adore les performances et le
                                <br />
                                support technique ! Depuis que je <br /> suis chez Hostim, je n’ai eu de <br /> temps d'arrêt. C'est incroyable à <br /> quel point mon site se charge <br /> plus rapidement maintenant <br /> parce qu'il fonctionne si bien.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide  >
                    <div className='flex flex-col justify-center items-center h-full'>

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
                        <div className=' w-full  bg-white text-center pt-[55px] px-[16px] pb-[49px] rounded-[26px] '>
                            <p className='text-medium text-ls text-[#172228] '>
                                J'adore les performances et le
                                <br />
                                support technique ! Depuis que je <br /> suis chez Hostim, je n’ai eu de <br /> temps d'arrêt. C'est incroyable à <br /> quel point mon site se charge <br /> plus rapidement maintenant <br /> parce qu'il fonctionne si bien.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide  >
                    <div className='flex flex-col justify-center items-center h-full'>
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
                        <div className=' w-full  bg-white text-center pt-[55px] px-[16px] pb-[49px] rounded-[26px] '>
                            <p className='text-medium text-ls text-[#172228] '>
                                J'adore les performances et le
                                <br />
                                support technique ! Depuis que je <br /> suis chez Hostim, je n’ai eu de <br /> temps d'arrêt. C'est incroyable à <br /> quel point mon site se charge <br /> plus rapidement maintenant <br /> parce qu'il fonctionne si bien.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default SignupSlider;