import React from 'react';
import Footer from '../../ShareComponents/Footer/Footer';
import LocationMapSection from '../../ShareComponents/LocationMapSection/LocationMapSection';
import TopBar from '../../ShareComponents/TopBar/TopBar';
import Faq from '../Home/SmallCompo/Faq/Faq';
import Recommendation from './SmallCompo/Recommendation/Recommendation';
import ThreeBanner from './SmallCompo/ThreeBanner/ThreeBanner';
import VpsBanner from './SmallCompo/VpsBanner/VpsBanner';

const VpsGame = () => {
    return (
        <div>
            <TopBar isDark={true}></TopBar>
            <VpsBanner></VpsBanner>
            <ThreeBanner></ThreeBanner>
            <Recommendation></Recommendation>
            <LocationMapSection></LocationMapSection>
            <Faq></Faq>
            <Footer className='mt-[103px]'></Footer>
        </div>
    );
};

export default VpsGame;