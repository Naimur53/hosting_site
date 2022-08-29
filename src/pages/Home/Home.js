import React from 'react';
import HomeBanner from './SmallCompo/HomeBanner/HomeBanner';
import MenCall from './SmallCompo/MenCall/MenCall';
import Solution from './SmallCompo/Solution/Solution';
import StarSection from './SmallCompo/StarSection/StarSection';
import TrustCompany from './SmallCompo/TrustCompany/TrustCompany';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <TrustCompany></TrustCompany>
            <StarSection></StarSection>
            <Solution></Solution>
            <MenCall></MenCall>

        </div>
    );
};

export default Home;