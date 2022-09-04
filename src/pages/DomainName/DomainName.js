import React from 'react';
import EmailPackage from '../EmailHosting/SmallCompo/EmailPackage/EmailPackage';
import Faq from '../Home/SmallCompo/Faq/Faq';
import DatabaseBanner from './SmallCompo/DatabaseBanner/DatabaseBanner';
import DomainBanner from './SmallCompo/DomainBanner/DomainBanner';
import TowBanner from './SmallCompo/TowBanner/TowBanner';

const DomainName = () => {
    return (
        <div>
            <DomainBanner></DomainBanner>
            <DatabaseBanner></DatabaseBanner>
            <EmailPackage></EmailPackage>
            <TowBanner></TowBanner>
            <Faq></Faq>
        </div>
    );
};

export default DomainName;