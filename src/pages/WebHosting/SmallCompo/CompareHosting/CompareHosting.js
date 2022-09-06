import { Tooltip } from '@material-tailwind/react';
import React from 'react';

const CompareHosting = () => {
    return (
        <div className='container flex flex-col items-center mt-[80px] lg:mt-[148px] mb-[60px] lg:mb-[118px]'>
            <h1 className='text-base font-semibold text-center md:text-xl mb-[63px]'>Compare All Web Hosting Plans</h1>

            <div className='border border-gray-300 rounded-md p-4 px-10 xl:w-full md:overflow-hidden overflow-x-scroll w-[80vw]  '>

                <table className='text-left md:w-full w-[600px]'>
                    <tr className='border-b border-gray-300  '>
                        <th className='text-normal font-semibold pb-5'>Plan Features</th>
                        <th className='text-center pb-5'>
                            <h5 className='table-heading'>Single</h5>
                            <p className='text-ls text-neutral-500 mt-1 font-normal'>$1.99/mo</p>

                        </th>
                        <th className='text-center pb-5'>
                            <h5 className='table-heading'>Premium</h5>
                            <p className='text-ls text-neutral-500 mt-1 font-normal'>$2.99/mo</p>

                        </th>
                        <th className='text-center pb-5'>
                            <h5 className='table-heading'>Business</h5>
                            <p className='text-ls text-neutral-500 mt-1 font-normal'>$3.99/mo</p>

                        </th>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>Websites</td>
                        <td>1</td>
                        <td>100</td>
                        <td>100 </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            SSD Storage
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td>50 GB</td>
                        <td>100 GB</td>
                        <td>200 GB</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Bandwidth
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td>100 GB</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            MySQL Databases
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td>2</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Free Domain Registration
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/close.png" alt="wrong" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Free SSL Certificates
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Daily Backups
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/close.png" alt="wrong" /></td>
                        <td><img className=' py-1' src="/icons/close.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Email Accounts
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip></td>
                        <td>1</td>
                        <td>100</td>
                        <td>100 </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            99.9% Uptime Guarantee
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            24/7/365 Support
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Powerful Control Panel
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Webmail access
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            DNS management
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Subdomains per account
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip></td>
                        <td>2</td>
                        <td>100</td>
                        <td>100 </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Parked Domains
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip></td>
                        <td>2</td>
                        <td>100</td>
                        <td>100 </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            FTP Accounts
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip></td>
                        <td>1</td>
                        <td>Unlimited</td>
                        <td>Unlimited </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>Websites</td>
                        <td>1</td>
                        <td>100</td>
                        <td>100 </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            SSD Storage
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td>50 GB</td>
                        <td>100 GB</td>
                        <td>200 GB</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Bandwidth
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td>100 GB</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            MySQL Databases
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td>2</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Free Domain Registration
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/close.png" alt="wrong" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Free SSL Certificates
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Daily Backups
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/close.png" alt="wrong" /></td>
                        <td><img className=' py-1' src="/icons/close.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Email Accounts
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip></td>
                        <td>1</td>
                        <td>100</td>
                        <td>100 </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            99.9% Uptime Guarantee
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            24/7/365 Support
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Powerful Control Panel
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Webmail access
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            DNS management
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Subdomains per account
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip></td>
                        <td>2</td>
                        <td>100</td>
                        <td>100 </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Parked Domains
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip></td>
                        <td>2</td>
                        <td>100</td>
                        <td>100 </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            FTP Accounts
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip></td>
                        <td>1</td>
                        <td>Unlimited</td>
                        <td>Unlimited </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Inodes
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip></td>
                        <td>200000</td>
                        <td>400000</td>
                        <td>600000 </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            FTP over SSL
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>

                    <tr>
                        <td className='table-row-heading'>
                            File Manager
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Weekly Backups
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Access Manager
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Multiple PHP Versions
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            PHP Configuration
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Remote MySQL
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            InnoDB
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            1-Click Installer
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Cache Manager
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            SSH Access
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/close.png" alt="close" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Cronjobs
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td>2</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            WordPress
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Cloud Linux
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Hotlink Protection                             <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            GIT
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip>
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Database size
                        </td>
                        <td>3 GB</td>
                        <td>3 GB</td>
                        <td>3 GB </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            RAM </td>
                        <td>768 MB</td>
                        <td>1024 MB</td>
                        <td>1536 MB</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Entry processes
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip></td>
                        <td>10</td>
                        <td> 20</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Active processes
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip></td>
                        <td>25</td>
                        <td> 40</td>
                        <td>60</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            I/O (KB/s)
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip></td>
                        <td>1024</td>
                        <td> 1024</td>
                        <td>1024</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            IOPS
                            <Tooltip className='text-xs' content='lorem will go '>
                                <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                            </Tooltip></td>
                        <td>64</td>
                        <td> 128</td>
                        <td>128</td>
                    </tr>
                    <tr className='border-t border-gray-300 '>
                        <td className='table-row-heading pt-5'>
                        </td>
                        <td className='text-center'><button className='py-3 btn px-10 border border-gray-300 rounded-full'>Select</button></td>
                        <td className='text-center'> <button className='py-3  btn px-10 border border-gray-300 rounded-full'>Select</button></td>
                        <td className='text-center'><button className='py-3  btn px-10 border border-gray-300 rounded-full'>Select</button></td>
                    </tr>
                </table>

            </div>


        </div>
    );
};

export default CompareHosting;