import React from 'react';

const MenCall = () => {
    return (
        <div className='  grid grid-cols-1 md:grid-cols-2 gap-0  '>
            <div className='md:pl-[143px] pl-[40px] mt-[34px] '>
                <div className='relative   bg-left-bottom bg-no-repeat' style={{ backgroundImage: "url(/shape/blue-bol.png)" }}>

                    <img className='ml-0 md:ml-10 mb-[40px] md:mb-[97px]' src="/images/men-smile.png" alt="men" />
                    <div className='absolute bottom-[50px] left-1/3 -rotate-[17deg]'>
                        <a href="tel:123-456-7890" className=' flex justify-center items-center py-2 rounded-md px-2 md:px-12 bg-seen-blue text-white rounded-0 '>
                            <img className='w-[46px]' src="/icons/phone.png" alt="phone" /> <span className='ml-4'>(123) 234 - 5678</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='bg-dark-blue pb-[70px] pl-5 md:pl-[50px] pr-5'>
                <div className='h-full flex justify-center items-center text-white'>
                    <div>
                        <h1 className='heading font-semibold text-white mt-[50px]'>Services that keep your business in mind</h1>
                        <p className='content-text mb-[97px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry  hosting service provider</p>
                        <div className='grid grid-cols-2 gap-[48px]'>
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

export default MenCall;