import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode, } from "swiper";
import SomethingElseCard from './SmallCompo/SomethingElseCard/SomethingElseCard';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const SomethingElse = () => {
    const data = [
        {
            heading: 'Domains'
        },
        {
            heading: 'Web Hosting'
        },
        {
            heading: 'Cloud Hosting'
        },
        {
            heading: 'VPS Hosting'
        },
        {
            heading: 'Email Hosting'
        },
    ]
    return (
        <div className='mt-[80px] xl:mt-[181px]'>
            <h2 className='heading text-center'>Are you Looking For Something Else?</h2>
            <div className='mt-[20px]'>
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
                        768: {
                            slidesPerView: 2,
                        },
                        1125: {
                            slidesPerView: 4,
                        },
                    }}
                    grabCursor={true}
                >
                    {
                        data?.map((single, i) => <SwiperSlide key={i}>
                            <SomethingElseCard   {...single}></SomethingElseCard>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default SomethingElse;