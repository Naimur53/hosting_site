import { Tooltip } from '@material-tailwind/react';
import React from 'react';
import { HashLink } from 'react-router-hash-link';

const PremiumPackage = () => {
    return (
        <div className='border mt-5 md:mt-0  border-[#64788E] rounded-[8px] bg-white relative mb-10 z-20   text-center font-inter'>
            <div className='text-white text-xs bg-dark-bright-blue w-full uppercase px-3 font-light py-3 rounded '>
                Most popular
            </div>
            <div className=' px-[30px]'>

                <div className='py-136'>

                    <h2 className='text-sm font-semibold'>Premium Shared Hosting</h2>
                    <p className=' font-light mb-150'>Perfect package for personal websites</p>
                    <div>
                        <span className='text-sm font-light mr-1'>$12.49</span>
                        <span className='text-white text-xs bg-dark-bright-blue px-3 font-light py-2 rounded-3xl'>SAVE 76%</span>
                    </div>
                    <div className='mt-1 mb-120'>
                        <sup className='text-normal font-medium mr-2  inline-block'>$</sup>
                        <h2 className='inline-block text-2xl font-bold'>2.99</h2>
                        <sub className='text-ls text-neutral-400'>/mo</sub>
                        <h6 className='text-center'>USD</h6>
                    </div>
                    <button className='text-white  bg-dark-bright-blue py-[15px] font-light text-sm  rounded-3xl  block w-full'>Select</button>
                    <p className='mt-118'>$6.99/mo when you renew</p>
                </div>
                <div className='text-left'>
                    <h1 className='text-ls mb-120  text-neutral-800 font-semibold'>Top feature comparison</h1>
                    <div className='mb-2'>
                        <p className='font-bold'>
                            100
                            <span className='font-normal ml-2'> website
                            </span>
                        </p>
                    </div>
                    <div className='mb-2'>
                        <p className='font-bold'>
                            100 GB
                            <span className='font-normal ml-2'> SSD Storage
                            </span>
                        </p>
                    </div>
                    <div className='mb-2'>
                        <p className='font-bold'>
                            ~25 000
                            <span className='font-normal ml-2'> Visits Monthly
                            </span>
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_black.png" alt="" />
                            </Tooltip>
                        </p>
                    </div >
                    <div className='mb-2'>
                        <p className='font-bold'>
                            Free
                            <span className='font-normal ml-2'> Email
                            </span>
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_black.png" alt="" />
                            </Tooltip>
                        </p>
                    </div>
                    <div className='mb-2'>
                        <p className='font-bold'>
                            Unlimited
                            <span className='font-normal ml-2'> Bandwidth
                            </span>
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_black.png" alt="" />
                            </Tooltip>
                        </p>
                    </div>
                    <div className='mb-2'>
                        <p className='font-bold'>
                            Unlimited
                            <span className='font-normal ml-2'> Databases
                            </span>
                        </p>
                    </div>

                </div>
                <div className='text-left'>
                    <h1 className='text-ls mt-136 mb-120  text-neutral-800 font-semibold'>Security</h1>
                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/right.png" alt="" />
                            Unlimited
                            <span className='font-normal ml-2'> Free SSL
                            </span>
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_black.png" alt="" />
                            </Tooltip>
                        </p>
                    </div >
                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/right.png" alt="" />
                            Cloudflare
                            <span className='font-normal ml-2'> Protected
                                <br />
                                Nameservers
                            </span>
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_black.png" alt="" />
                            </Tooltip>
                        </p>
                    </div >
                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/wrong.png" alt="" />
                            Cloudflare
                            <span className='font-normal ml-2'> CDN ($9.95 value)
                            </span>
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_black.png" alt="" />
                            </Tooltip>
                        </p>
                    </div >

                </div>
                <div className='text-left'>
                    <h1 className='text-ls mt-136 mb-120  text-neutral-800 font-semibold'>Free Bonuses</h1>

                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/right.png" alt="" />
                            Weekly Backups
                        </p>
                    </div >

                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/right.png" alt="" />
                            Free
                            <span className='font-normal ml-2'> Domain ($8.99 value)
                            </span>
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_black.png" alt="" />
                            </Tooltip>
                        </p>
                    </div >
                </div>
                <div className='text-left'>
                    <h1 className='text-ls mt-136 mb-120  text-neutral-800 font-semibold'>WordPress Options</h1>

                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/right.png" alt="" />
                            Managed
                            <span className='font-normal ml-2'> WordPress
                            </span>
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_black.png" alt="" />
                            </Tooltip>
                        </p>
                    </div >
                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/wrong.png" alt="" />
                            WordPress
                            <span className='font-normal ml-2'> Acceleration
                            </span>
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_black.png" alt="" />
                            </Tooltip>
                        </p>
                    </div >
                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/wrong.png" alt="" />
                            WordPress Staging Tool
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_black.png" alt="" />
                            </Tooltip>
                        </p>
                    </div >


                </div>
                <div className='text-left'>
                    <h1 className='text-ls mt-136 mb-120  text-neutral-800 font-semibold'>Service and Support</h1>

                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/right.png" alt="" />
                            30 Days
                            <span className='font-normal ml-2'> Money Back <br />Guarantee
                            </span>
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_black.png" alt="" />
                            </Tooltip>
                        </p>
                    </div >
                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/right.png" alt="" />
                            24/7/365
                            <span className='font-normal ml-2'> Support
                            </span>
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_black.png" alt="" />
                            </Tooltip>
                        </p>
                    </div >
                    <div className='mb-2'>
                        <p className='font-bold'>
                            <img className='inline-block mr-2' src="/icons/right.png" alt="" />
                            99.9%
                            <span className='font-normal ml-2'>
                                Uptime Guarantee
                            </span>
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_black.png" alt="" />
                            </Tooltip>
                        </p>
                    </div >


                </div>
                <HashLink to='/web-hosting#compare' className='flex justify-center border-t py-116 border-gray-300 items-center mt-120'>
                    <h4>See all features</h4>

                    <img className='ml-2' src="/icons/keyboard_arrow_down_dark.png" alt="" />
                </HashLink>



            </div>
        </div>

    );
};

export default PremiumPackage;