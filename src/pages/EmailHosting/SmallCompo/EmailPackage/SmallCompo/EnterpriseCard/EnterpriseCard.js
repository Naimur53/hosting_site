import React from 'react';
import { HashLink } from 'react-router-hash-link';

const EnterpriseCard = () => {
    return (
        <div className='border w-full mt-5 md:mt-0  border-[#64788E] rounded-[8px] bg-white relative mb-10 z-20   text-center font-inter'>
            <div className='text-white text-xs bg-dark-bright-blue w-full uppercase px-3 font-light py-3 rounded '>
                Most popular
            </div>
            <div className=' px-[32px]'>

                <div className='pt-136 border-gray-400 border-b'>

                    <h2 className='text-sm font-semibold mb-[50px]'>Enterprise</h2>
                    <div>
                        <span className='text-sm font-light text-[#999999] mr-1'>$12.49</span>
                        <span className='text-white text-xs bg-dark-bright-blue px-3 font-light py-2 rounded-3xl'>SAVE 76%</span>
                    </div>
                    <div className='mt-1 mb-120'>
                        <sup className='text-normal font-medium mr-2  inline-block'>$</sup>
                        <h2 className='inline-block text-2xl font-bold'>2.99</h2>
                        <sub className='text-ls text-neutral-400'>/mo</sub>
                        <h6 className='text-center'>price per mailbox</h6>
                    </div>
                    <button className='text-white cursor-pointer hover:bg-dark-blue bg-dark-bright-blue py-[15px] font-light text-sm  rounded-3xl  block w-full'>Select</button>
                    <p className='mt-[15px] pb-[37px] text-[#999999]'>$6.99/mo when you renew</p>
                </div>

                <div className='text-left mt-[34px]'>
                    <h1 className='text-ls mb-120 text-neutral-500'>Top feature comparison</h1>
                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/right.png" alt="" />

                            <span className='font-normal ml-2'>30 GB Email storage
                            </span>
                        </p>
                    </div >
                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/right.png" alt="" />

                            <span className='font-normal ml-2'>Read Receips
                            </span>
                        </p>
                    </div >
                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/right.png" alt="" />

                            <span className='font-normal ml-2'>Email Templates
                            </span>
                        </p>
                    </div >
                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/right.png" alt="" />

                            <span className='font-normal ml-2'>Follow-up Reminders
                            </span>
                        </p>
                    </div >
                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/right.png" alt="" />

                            <span className='font-normal ml-2'>Multi-account support
                            </span>
                        </p>
                    </div >
                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/right.png" alt="" />

                            <span className='font-normal ml-2'>10 email aliases
                            </span>
                        </p>
                    </div >
                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/right.png" alt="" />

                            <span className='font-normal ml-2'>Send as Alias
                            </span>
                        </p>
                    </div >
                    <div className='mb-2 flex justify-center items-center' >
                        <img className='inline-block mr-2 ' src="/icons/right.png" alt="" />
                        <p className='font-bold ml-2'>


                            <span className='font-normal '>One-click import of existing
                                emails and contacts
                            </span>
                        </p>
                    </div >
                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/right.png" alt="" />

                            <span className='font-normal ml-2'>Inbuilt colendar and contacts
                            </span>
                        </p>
                    </div >
                </div >
                <HashLink to='/web-hosting#compare' className='flex justify-center border-t py-116 border-gray-500 items-center mt-[47px]'>
                    <h4>See all features</h4>

                    <img className='ml-2' src="/icons/keyboard_arrow_down_dark.png" alt="" />
                </HashLink>




            </div>
        </div>
    );
};

export default EnterpriseCard;