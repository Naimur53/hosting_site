import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, } from "swiper";
import TestimonialsCard from './SmallCompo/TestimonialsCard';
const Testimonials = () => {
    const data = [
        {
            start: "/icons/stars5.png",
            describe: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor ed do amet sint. Velit officia consequat duis enim velit mollit. rcitation veniam consequat sunt',
            userImg: '/images/user.png',
            name: 'Ahmed Khokon',
            work: 'Brand Desinger',

        },
        {
            start: "/icons/stars5.png",
            describe: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor ed do amet sint. Velit officia consequat duis enim velit mollit. rcitation veniam consequat sunt',
            userImg: '/images/user.png',
            name: 'Ahmed Khokon',
            work: 'Brand Desinger',

        },
        {
            start: "/icons/stars5.png",
            describe: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor ed do amet sint. Velit officia consequat duis enim velit mollit. rcitation veniam consequat sunt',
            userImg: '/images/user.png',
            name: 'Ahmed Khokon',
            work: 'Brand Desinger',

        },
        {
            start: "/icons/stars5.png",
            describe: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor ed do amet sint. Velit officia consequat duis enim velit mollit. rcitation veniam consequat sunt',
            userImg: '/images/user.png',
            name: 'Ahmed Khokon',
            work: 'Brand Desinger',

        },
        {
            start: "/icons/stars5.png",
            describe: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor ed do amet sint. Velit officia consequat duis enim velit mollit. rcitation veniam consequat sunt',
            userImg: '/images/user.png',
            name: 'Ahmed Khokon',
            work: 'Brand Desinger',

        },
    ]
    const [my_swiper, set_my_swiper] = useState({});
    const [my_swiper_status, set_my_swiper_status] = useState({
        isBeginning: true,
        isEnd: false
    });
    return (
        <div className='container mt-[135px] pb-[154px]'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                    },
                }}
                grabCursor={true}
                onSlideChange={(ev) => {
                    set_my_swiper(ev)

                    set_my_swiper_status({
                        isBeginning: ev.isBeginning,
                        isEnd: ev.isEnd,
                    })
                }}
                onInit={(ev) => {
                    set_my_swiper(ev)
                }}
            >
                {
                    data?.map((single, i) => <SwiperSlide key={i}>
                        <TestimonialsCard   {...single}></TestimonialsCard>
                    </SwiperSlide>)
                }
            </Swiper>
            <div className='flex justify-center items-center mt-[75px]'>
                <div className="flex">
                    <div className='mr-[40px] cursor-pointer' onClick={() => my_swiper.slidePrev()}>
                        <img src="/icons/Arrowleft.png" alt="arrow" />
                    </div>
                    <div className='cursor-pointer' onClick={() => my_swiper.slideNext()} >
                        <img src="/icons/Arrowright.png" alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;