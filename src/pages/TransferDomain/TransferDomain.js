import React from 'react';
import Footer from '../../ShareComponents/Footer/Footer';
import TopBar from '../../ShareComponents/TopBar/TopBar';
import DomainToHostim from './SmallCompo/DomainToHostim/DomainToHostim';
import EasyStep from './SmallCompo/EasyStep/EasyStep';
import Ensure from './SmallCompo/Ensure/Ensure';
import SomeThing from './SmallCompo/SomeThing/SomeThing';
import TransferBanner from './SmallCompo/TransferBanner/TransferBanner';

const TransferDomain = () => {
    return (
        <div>
            <TopBar isDark={true}></TopBar>
            <TransferBanner></TransferBanner>
            <EasyStep></EasyStep>
            <DomainToHostim></DomainToHostim>
            <Ensure></Ensure>
            <SomeThing></SomeThing>
            <Footer className=' '></Footer>
        </div>
    );
};

export default TransferDomain; 