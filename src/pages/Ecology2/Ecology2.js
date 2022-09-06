import React from 'react';
import Footer from '../../ShareComponents/Footer/Footer';
import TopBar from '../../ShareComponents/TopBar/TopBar';
import BoxSection from './SmallCompo/BoxSection/BoxSection';
import BusinessMind from './SmallCompo/BusinessMind/BusinessMind';
import EcoLogy2Banner from './SmallCompo/Ecology2Banner/EcoLogy2Banner';
import EcologyLastBanner from './SmallCompo/EcologyLastBanner/EcologyLastBanner';

const Ecology2 = () => {
    return (
        <div>
            <TopBar isDark={true}></TopBar>

            <EcoLogy2Banner></EcoLogy2Banner>
            <BusinessMind ></BusinessMind>
            <BoxSection></BoxSection>
            <EcologyLastBanner></EcologyLastBanner>
            <Footer className='xl:mt-[175px] mt-[80px]'></Footer>

        </div>
    );
};

export default Ecology2;