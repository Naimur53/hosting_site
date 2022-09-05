import React from 'react';
import Footer from '../../ShareComponents/Footer/Footer';
import TopBar from '../../ShareComponents/TopBar/TopBar';
import EmailPackage from '../EmailHosting/SmallCompo/EmailPackage/EmailPackage';
import Faq from '../Home/SmallCompo/Faq/Faq';
import DatabaseBanner from './SmallCompo/DatabaseBanner/DatabaseBanner';
import DomainBanner from './SmallCompo/DomainBanner/DomainBanner';
import TowBanner from './SmallCompo/TowBanner/TowBanner';

const DomainName = () => {
    return (
        <div>
            <TopBar isDark={true}></TopBar>
            <DomainBanner></DomainBanner>
            <DatabaseBanner></DatabaseBanner>
            <EmailPackage></EmailPackage>
            <TowBanner></TowBanner>
            <Faq></Faq>
            <Footer className='mt-[103px]'></Footer>
        </div>
    );
};

export default DomainName;