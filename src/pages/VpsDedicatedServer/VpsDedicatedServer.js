import React from 'react';
import Footer from '../../ShareComponents/Footer/Footer';
import LocationMapSection from '../../ShareComponents/LocationMapSection/LocationMapSection';
import TopBar from '../../ShareComponents/TopBar/TopBar';
import Faq from '../Home/SmallCompo/Faq/Faq';
import PaymentOption from '../Vps/SmallCompo/PaymentOption/PaymentOption';
import VpsFilter from '../Vps/SmallCompo/VpsFilter/VpsFilter';
import VpsMainBanner from '../Vps/SmallCompo/VpsMainBanner/VpsMainBanner';
import VpsTowBanner from '../Vps/SmallCompo/VpsTowBanner/VpsTowBanner';
import VpsCompare from '../Vps/VpsCompare/VpsCompare';
import VpsDedicatedTable from './SmallCompo/VpsDedicatedTable';

const VpsDedicatedServer = () => {
    return (
        <div>
            <TopBar isDark={true}></TopBar>

            <VpsMainBanner dedicated={true}></VpsMainBanner>
            <VpsFilter></VpsFilter>
            <VpsDedicatedTable></VpsDedicatedTable>
            <VpsTowBanner></VpsTowBanner>
            <PaymentOption></PaymentOption>
            <VpsCompare></VpsCompare>
            <div className='container mt-[94px] pb-[7px]'>
                <img className='grayscale' src="/images/Trust Company Log.png" alt="" />

            </div>
            <LocationMapSection></LocationMapSection>
            <div className='pt-[92px]'>
                <Faq></Faq>
            </div>
            <Footer className='mt-[103px]'></Footer>
        </div>
    );
};

export default VpsDedicatedServer;