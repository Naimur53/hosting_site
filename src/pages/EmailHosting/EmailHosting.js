import React from 'react';
import Faq from '../Home/SmallCompo/Faq/Faq';
import CreateEmail from './SmallCompo/CreateEmail/CreateEmail';
import EmailBanner from './SmallCompo/EmailBanner/EmailBanner';
import EmailPackage from './SmallCompo/EmailPackage/EmailPackage';
import MoneyBack from './SmallCompo/MoneyBack/MoneyBack';
import SomethingElse from './SmallCompo/SomethingElse/SomethingElse';
import TenSection from './SmallCompo/TenSection/TenSection';

const EmailHosting = () => {
    return (
        <div>
            <EmailBanner></EmailBanner>
            <CreateEmail></CreateEmail>
            <EmailPackage></EmailPackage>
            <TenSection></TenSection>
            <MoneyBack></MoneyBack>
            <Faq></Faq>
            <SomethingElse></SomethingElse>
        </div>
    );
};

export default EmailHosting;