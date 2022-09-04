import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode, } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import DomainSliderCard from '../DomainSliderCard/DomainSliderCard';
const DomainSlider = () => {
    const data = [
        {
            logo: "/images/site.png",
            describe: 'Show your clients you do business in the .shop',
            price: '$34.99',
            year: '8.99'
        },
        {
            logo: "/images/shop.png",
            describe: 'Show your clients you do business in the .shop',
            price: '$34.99',
            year: '8.99'
        },
        {
            logo: "/images/com.png",
            describe: 'Show your clients you do business in the .shop',
            price: '$34.99',
            year: '8.99'
        },
        {
            logo: "/images/online.png",
            describe: 'Show your clients you do business in the .shop',
            price: '$34.99',
            year: '8.99'
        },
        {
            logo: "/images/shop.png",
            describe: 'Show your clients you do business in the .shop',
            price: '$34.99',
            year: '8.99'
        },
        {
            logo: "/images/shop.png",
            describe: 'Show your clients you do business in the .shop',
            price: '$34.99',
            year: '8.99'
        },
    ]
    return (
        <div className='relative'>
            <Swiper
                spaceBetween={30}
                slidesPerView={5}
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
                        slidesPerView: 5,
                    },
                }}
                grabCursor={true}
            >
                {
                    data?.map((single, i) => <SwiperSlide key={i}>
                        <DomainSliderCard  {...single}></DomainSliderCard>
                    </SwiperSlide>)
                }
            </Swiper>
            <div className="hidden md:flex absolute pointer-events-none inset-0  z-10 justify-between">
                <div className='w-1 bg-white h-full ' style={{

                    boxShadow: 'white 48px 0px 100px 80px'
                }}></div>
                <div className='w-1 bg-white h-full ' style={{

                    boxShadow: 'white -48px 0px 100px 80px'
                }}></div>

            </div>
        </div>
    );
};

export default DomainSlider;