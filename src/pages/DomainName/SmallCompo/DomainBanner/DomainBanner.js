import React from 'react';
import DomainSlider from '../DomainSlider/DomainSlider';
import SearchArea from '../SearchArea/SearchArea';

const DomainBanner = () => {
    return (
        <div>
            <div style={{ backgroundImage: 'url(/shape/Line4.png)' }} className=' flex items-center bg-cover bg-no-repeat overflow-hidden '>
                <div className="container">
                    <div className='pb-[116px]'>
                        <h1 className=' pt-[154px] text-lg md:text-2xl   text-center font-bold'> Got a Domain Name               </h1>
                        <p className='text-center  mt-[13px]  Hosting companies Interested in doing business with you font-normal text-neutral-600 text-[16px]'>Simply type in your      desired name and instantly check domain name <br /> availability. Buy and register a domain easily with Hostinger.</p>
                    </div>
                    <div className=' flex justify-center'>
                        <div className='max-w-[856px] w-full'>

                            <SearchArea></SearchArea>
                        </div>

                    </div>


                </div>


            </div>
            <div className="mt-[103px]">

                <DomainSlider></DomainSlider>
            </div>
        </div>
    );
};

export default DomainBanner;