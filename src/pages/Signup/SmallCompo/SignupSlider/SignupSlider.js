import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode, } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SignupSliderCard from '../SignupSliderCard';
const data = [
    {
        text: "J'adore les performances et le support technique ! Depuis que je suis chez Hostim, je n’ai eu de temps d'arrêt. C'est incroyable à quel point mon site se charge plus rapidement maintenant parce qu'il fonctionne si bien."
    },
    {
        text: "J'adore les performances et le support technique ! Depuis que je suis chez Hostim, je n’ai eu de temps d'arrêt. C'est incroyable à quel point mon site se charge plus rapidement maintenant!"
    },
    {
        text: "J'adore les performances et le support technique ! Depuis que je suis chez Hostim, je n’ai eu de temps d'arrêt. C'est incroyable à quel point mon site se charge plus rapidement maintenant parce qu'il fonctionne si bien."
    },
    {
        text: " J'adore les performances et le support technique ! Depuis que je suis chez Hostim, je n’ai eu de temps d'arrêt. C'est incroyable à quel point mon site se charge plus rapidement maintenant!"
    },
]

const SignupSlider = () => {

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
                        slidesPerView: 1,
                    },
                    1025: {
                        slidesPerView: 2,
                    },
                }}
                grabCursor={true}
            >
                {
                    data.map((single, i) => <SwiperSlide key={i}>
                        <SignupSliderCard text={single.text}></SignupSliderCard>
                    </SwiperSlide>)
                }

            </Swiper>
        </div >
    );
};

export default SignupSlider;