import React from 'react';
import { HashLink } from 'react-router-hash-link';


const BusinessCard = () => {
    return (
        <div className='border w-full relative  px-[32px] border-[#64788E] rounded-[8px] bg-[#172535] text-white text-center font-inter'>
            <div className='pt-136 pb-[38px] border-b border-gray-800  mb-[40px]'>

                <h2 className='text-sm font-semibold mb-150'>Business </h2>

                <div>
                    <span className='text-sm font-light mr-1'>$9.99</span>
                    <span className='text-white text-xs bg-dark-bright-blue px-3 font-light py-2 rounded-3xl'>SAVE 80%</span>
                </div>
                <div className='mt-1 mb-120'>
                    <sup className='text-normal font-medium mr-2  inline-block'>$</sup>
                    <h2 className='inline-block text-2xl font-bold'>0.99</h2>
                    <sub className='text-ls text-neutral-400'>/mo</sub>
                    <h6 className='text-center'>price per mailbox</h6>
                </div>
                <button className='text-white relative z-10 btn bg-dark-blue py-[15px] font-light text-sm  rounded-3xl  block w-full'>Select</button>
                <p className='mt-118'>$3.99/mo when you renew</p>
            </div>

            <div className='text-left'>
                <h1 className='text-ls mb-120 text-neutral-100'>Top feature comparison</h1>
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
                <HashLink to='/web-hosting#compare' className='flex justify-center border-t py-116 border-gray-800 items-center mt-[41px]'>
                    <h4>See all features</h4>

                    <img className='ml-2' src="/icons/keyboard_arrow_down.png" alt="" />
                </HashLink>

            </div>

        </div>
    );
};

export default BusinessCard;