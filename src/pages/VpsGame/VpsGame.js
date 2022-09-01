import React from 'react';
import LocationMapSection from '../../ShareComponents/LocationMapSection/LocationMapSection';
import Faq from '../Home/SmallCompo/Faq/Faq';
import Recommendation from './SmallCompo/Recommendation/Recommendation';
import ThreeBanner from './SmallCompo/ThreeBanner/ThreeBanner';
import VpsBanner from './SmallCompo/VpsBanner/VpsBanner';

const VpsGame = () => {
    return (
        <div>
            <VpsBanner></VpsBanner>
            <ThreeBanner></ThreeBanner>
            <Recommendation></Recommendation>
            <LocationMapSection></LocationMapSection>
            <Faq></Faq>
        </div>
    );
};

export default VpsGame;