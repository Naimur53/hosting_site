import React from 'react';
import Footer from '../../ShareComponents/Footer/Footer';
import LocationMapSection from '../../ShareComponents/LocationMapSection/LocationMapSection';
import TopBar from '../../ShareComponents/TopBar/TopBar';
import Faq from '../Home/SmallCompo/Faq/Faq';
import TrustCompany from '../Home/SmallCompo/TrustCompany/TrustCompany';
import PaymentOption from './SmallCompo/PaymentOption/PaymentOption';
import VpsFilter from './SmallCompo/VpsFilter/VpsFilter';
import VpsMainBanner from './SmallCompo/VpsMainBanner/VpsMainBanner';
import VpsMainTable from './SmallCompo/VpsMainTable/VpsMainTable';
import VpsTowBanner from './SmallCompo/VpsTowBanner/VpsTowBanner';
import VpsCompare from './VpsCompare/VpsCompare';

const Vps = () => {
    return (
        <div>
            <TopBar isDark={true}></TopBar>

            <VpsMainBanner></VpsMainBanner>
            <VpsFilter></VpsFilter>
            <VpsMainTable></VpsMainTable>
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

export default Vps;