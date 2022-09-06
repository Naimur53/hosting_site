import React from 'react';
import Footer from '../../ShareComponents/Footer/Footer';
import TopBar from '../../ShareComponents/TopBar/TopBar';
import Ecology1Banner from './SmallCompo/Ecology1Banner/Ecology1Banner';
import TitleSections from './SmallCompo/TitleSections/TitleSections';

const Ecology1 = () => {
    return (
        <div>
            <TopBar isDark={true}></TopBar>
            <Ecology1Banner></Ecology1Banner>
            <TitleSections></TitleSections>
            <Footer className='xl:mt-[175px] mt-[80px]'></Footer>
        </div>
    );
};

export default Ecology1;