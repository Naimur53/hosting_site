import React from 'react';

const BusinessMind = () => {
    return (
        <div className=''>
            <div className='bg-dark-blue  pb-[60px] xl:pb-[123px] pr-5'>
                <div className='container  text-center text-white'>
                    <div className='xl:pt-[111px] pt-[50px]'>
                        <h1 className='heading text-white mb-[16px]'>Services that keep your business in mind</h1>
                        <p className='content-text pb-[80px]'>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry  hosting service provider</p>
                        <div className='grid text-left grid-cols-2 md:grid-cols-4 gap-10'>
                            <div>
                                <img src="/icons/net.png" alt="net" />
                                <h4 className='text-ls mt-3'>Service title</h4>
                                <p className='text-xs mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>

                            </div>
                            <div>
                                <img src="/icons/com-data.png" alt="net" />
                                <h4 className='text-ls mt-3'>Service title</h4>
                                <p className='text-xs mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>

                            </div>
                            <div>
                                <img src="/icons/database.png" alt="net" />
                                <h4 className='text-ls mt-3'>Service title</h4>
                                <p className='text-xs mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>

                            </div>
                            <div>
                                <img src="/icons/cloud.png" alt="net" />
                                <h4 className='text-ls mt-3'>Service title</h4>
                                <p className='text-xs mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessMind;