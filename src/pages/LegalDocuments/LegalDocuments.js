import React from 'react';
import Footer from '../../ShareComponents/Footer/Footer';
import TopBar from '../../ShareComponents/TopBar/TopBar';

const LegalDocuments = () => {
    return (
        <div>
            <TopBar isDark={true}></TopBar>
            <div style={{ backgroundImage: 'url(/shape/bgLine.png)' }} className=' flex items-center bg-cover bg-no-repeat overflow-hidden '>
                <div className="container">
                    <div>
                        <h1 className='pt-[150px] md:pt-[154px]  text-lg md:text-xl   text-center font-bold'> Legal documents          </h1>
                        <p className='text-center  mt-[13px] pb-[93px] Hosting companies Interested in doing business with you font-normal text-neutral-600 text-sm'>Simply type in your      desired name and instantly check domain name <br /> availability. Buy and register a domain easily with Hostinger.</p>
                    </div>
                    <div className='pb-[100px] md:pb-[215px] flex justify-center'>
                        <div className='max-w-[697px] w-full'>
                            <div className='flex items-center justify-between py-[12px] px-[24px] bg-neutral-100 mb-[16px] gap-4'>
                                <p>Guide RGPD</p>
                                <a href="#" className='min-w-[20px] min-h-[20px]'>
                                    <img src="/icons/download.png" alt="download icon       " />



                                </a>
                            </div>
                            <div className='flex items-center justify-between py-[12px] px-[24px] bg-neutral-100 mb-[16px] gap-4'>
                                <p>Conditions Generales d'utilisation</p>
                                <a href="#" className='min-w-[20px] min-h-[20px]'>
                                    <img src="/icons/download.png" alt="download icon       " />

                                </a>
                            </div>
                            <div className='flex items-center justify-between py-[12px] px-[24px] bg-neutral-100 mb-[16px] gap-4'>
                                <p>Conditions Generales d'utilisation et de vente des VPS</p>
                                <a href="#" className='min-w-[20px] min-h-[20px]'>
                                    <img src="/icons/download.png" alt="download icon       " />

                                </a>
                            </div>
                            <div className='flex items-center justify-between py-[12px] px-[24px] bg-neutral-100 mb-[16px] gap-4'>
                                <p>Conditions Generales d'utilisation et de vente des hebergements web</p>
                                <a href="#" className='min-w-[20px] min-h-[20px]'>
                                    <img src="/icons/download.png" alt="download icon       " />

                                </a>
                            </div>
                            <div className='flex items-center justify-between py-[12px] px-[24px] bg-neutral-100 mb-[16px] gap-4'>
                                <p>Conditions Generales d'utilisation er de vente des VPN</p>
                                <a href="#" className='min-w-[20px] min-h-[20px]'>
                                    <img src="/icons/download.png" alt="download icon       " />

                                </a>
                            </div>
                            <div className='flex items-center justify-between py-[12px] px-[24px] bg-neutral-100 mb-[16px] gap-4'>
                                <p>Mentons legales</p>
                                <a href="#" className='min-w-[20px] min-h-[20px]'  >
                                    <img src="/icons/download.png" alt="download icon       " />

                                </a>
                            </div>

                        </div>
                    </div>


                </div>


            </div>
            <Footer  ></Footer>
        </div>
    );
};

export default LegalDocuments;