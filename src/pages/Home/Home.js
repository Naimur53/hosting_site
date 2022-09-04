import React from 'react';
import HomeBanner from './SmallCompo/HomeBanner/HomeBanner';
import HostingPackage from './SmallCompo/HostingPackage/HostingPackage';
import MenCall from './SmallCompo/MenCall/MenCall';
import MenLaptop from './SmallCompo/MenLaptop/MenLaptop';
import ServiceInclude from './SmallCompo/ServiceInclude/ServiceInclude';
import Solution from './SmallCompo/Solution/Solution';
import StarSection from './SmallCompo/StarSection/StarSection';
import Testimonials from './SmallCompo/Testimonials/Testimonials';
import TrustCompany from './SmallCompo/TrustCompany/TrustCompany';
import Faq from './SmallCompo/Faq/Faq';
import RandomSection from './SmallCompo/RandomSection/RandomSection'
import LocationMapSection from '../../ShareComponents/LocationMapSection/LocationMapSection'
import TopBar from '../../ShareComponents/TopBar/TopBar';
const Home = () => {
    return (
        <div>
            <TopBar></TopBar>
            <HomeBanner></HomeBanner>
            <TrustCompany></TrustCompany>
            <StarSection></StarSection>
            <Solution></Solution>
            <MenCall></MenCall>
            <HostingPackage></HostingPackage>
            <ServiceInclude></ServiceInclude>
            <MenLaptop></MenLaptop>
            <Testimonials></Testimonials>
            <RandomSection></RandomSection>
            <LocationMapSection></LocationMapSection>
            <Faq></Faq>

        </div>
    );
};

export default Home;