import React from 'react';
import DomainToHostim from './SmallCompo/DomainToHostim/DomainToHostim';
import EasyStep from './SmallCompo/EasyStep/EasyStep';
import Ensure from './SmallCompo/Ensure/Ensure';
import SomeThing from './SmallCompo/SomeThing/SomeThing';
import TransferBanner from './SmallCompo/TransferBanner/TransferBanner';

const TransferDomain = () => {
    return (
        <div>
            <TransferBanner></TransferBanner>
            <EasyStep></EasyStep>
            <DomainToHostim></DomainToHostim>
            <Ensure></Ensure>
            <SomeThing></SomeThing>
        </div>
    );
};

export default TransferDomain; 