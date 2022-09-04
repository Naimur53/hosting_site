import React from 'react';
import BoxSection from './SmallCompo/BoxSection/BoxSection';
import BusinessMind from './SmallCompo/BusinessMind/BusinessMind';
import EcoLogy2Banner from './SmallCompo/Ecology2Banner/EcoLogy2Banner';
import EcologyLastBanner from './SmallCompo/EcologyLastBanner/EcologyLastBanner';

const Ecology2 = () => {
    return (
        <div>
            <EcoLogy2Banner></EcoLogy2Banner>
            <BusinessMind ></BusinessMind>
            <BoxSection></BoxSection>
            <EcologyLastBanner></EcologyLastBanner>

        </div>
    );
};

export default Ecology2;