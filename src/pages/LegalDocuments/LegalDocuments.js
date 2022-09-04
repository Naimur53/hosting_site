import React from 'react';

const LegalDocuments = () => {
    return (
        <div>
            <div style={{ backgroundImage: 'url(/shape/bgLine.png)' }} className=' flex items-center bg-cover bg-no-repeat overflow-hidden '>
                <div className="container">
                    <div>
                        <h1 className='pt-10 md:pt-[74px]  text-lg md:text-xl   text-center font-bold'> Legal documents          </h1>
                        <p className='text-center  mt-[13px] pb-[93px] Hosting companies Interested in doing business with you font-normal text-neutral-600 text-sm'>Simply type in your      desired name and instantly check domain name <br /> availability. Buy and register a domain easily with Hostinger.</p>
                    </div>
                    <div className='pb-[100px] md:pb-[215px] flex justify-center'>
                        <div className='max-w-[697px] w-full'>
                            <div className='flex justify-between py-[12px] px-[24px] bg-neutral-100 mb-[16px]'>
                                <p>Guide RGPD</p>
                                <img src="/icons/download.png" alt="download icon       " />
                            </div>
                            <div className='flex justify-between py-[12px] px-[24px] bg-neutral-100 mb-[16px]'>
                                <p>Conditions Generales d'utilisation</p>
                                <img src="/icons/download.png" alt="download icon       " />
                            </div>
                            <div className='flex justify-between py-[12px] px-[24px] bg-neutral-100 mb-[16px]'>
                                <p>Conditions Generales d'utilisation et de vente des VPS</p>
                                <img src="/icons/download.png" alt="download icon       " />
                            </div>
                            <div className='flex justify-between py-[12px] px-[24px] bg-neutral-100 mb-[16px]'>
                                <p>Conditions Generales d'utilisation et de vente des hebergements web</p>
                                <img src="/icons/download.png" alt="download icon       " />
                            </div>
                            <div className='flex justify-between py-[12px] px-[24px] bg-neutral-100 mb-[16px]'>
                                <p>Conditions Generales d'utilisation er de vente des VPN</p>
                                <img src="/icons/download.png" alt="download icon       " />
                            </div>
                            <div className='flex justify-between py-[12px] px-[24px] bg-neutral-100 mb-[16px]'>
                                <p>Mentons legales</p>
                                <img src="/icons/download.png" alt="download icon       " />
                            </div>

                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default LegalDocuments;