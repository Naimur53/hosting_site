import React from 'react';
import Footer from '../../ShareComponents/Footer/Footer';
import LocationMapSection from '../../ShareComponents/LocationMapSection/LocationMapSection';
import TopBar from '../../ShareComponents/TopBar/TopBar';
import Faq from '../Home/SmallCompo/Faq/Faq';
import HostingPackage from '../Home/SmallCompo/HostingPackage/HostingPackage';
import Choisissez from './SmallCompo/Choisissez/Choisissez';
import CompareHosting from './SmallCompo/CompareHosting/CompareHosting';
import HostingBanner from './SmallCompo/HostingBanner/HostingBanner';
import TowBanners from './SmallCompo/TowBanners/TowBanners';
import VpsDonne from './SmallCompo/VpsDonne/VpsDonne';

const WebHosting = () => {
    return (
        <div>
            <TopBar isDark={true}></TopBar>
            <HostingBanner></HostingBanner>
            <HostingPackage></HostingPackage>
            <CompareHosting></CompareHosting>
            <TowBanners></TowBanners>
            <VpsDonne></VpsDonne>
            <Choisissez></Choisissez>
            <LocationMapSection></LocationMapSection>
            <Faq></Faq>
            <Footer className='mt-[103px]'></Footer>
        </div>
    );
};

export default WebHosting;