import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode, } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SomethingCard from '../SomethingCard/SomethingCard';
const SomeThing = () => {
    const data = [
        {}, {}, { active: true }, {}, {}
    ]
    return (
        <div >
            <div className=''>
                <div className=' bg-cover bg-left-bottom pt-[120px] pb-[34px] bg-no-repeat' style={{ backgroundImage: 'url(/shape/Line5.png)' }}>

                    <h2 className='heading text-center'>Are you Looking For Something Else?</h2>
                    <p className='mt-[24px] text-center text-neutral-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been thdustry's standard dummy text.</p>
                </div>
                <div className='pb-[69px] '>
                    <Swiper
                        spaceBetween={20}
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
                                slidesPerView: 4,
                            },
                        }}
                        grabCursor={true}
                    >
                        {
                            data?.map((single, i) => <SwiperSlide className='h-full' key={i}>
                                <SomethingCard   {...single}></SomethingCard>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>

        </div>
    );
};

export default SomeThing;