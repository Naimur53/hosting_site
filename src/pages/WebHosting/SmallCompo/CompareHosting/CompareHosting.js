import React from 'react';

const CompareHosting = () => {
    return (
        <div className='container mt-[148px] mb-[118px]'>
            <h1 className='text-base font-semibold text-center md:text-xl mb-[63px]'>Compare All Web Hosting Plans</h1>

            <div className='border border-gray-300 rounded-md p-4 px-10 md:w-full md:overflow-hidden overflow-x-scroll w-[360px]'>

                <table className='text-left w-full'>
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
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td>50 GB</td>
                        <td>100 GB</td>
                        <td>200 GB</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Bandwidth
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td>100 GB</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            MySQL Databases
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td>2</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Free Domain Registration
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/close.png" alt="wrong" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Free SSL Certificates
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Daily Backups
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/close.png" alt="wrong" /></td>
                        <td><img className=' py-1' src="/icons/close.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Email Accounts
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" /></td>
                        <td>1</td>
                        <td>100</td>
                        <td>100 </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            99.9% Uptime Guarantee
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            24/7/365 Support
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Powerful Control Panel
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Webmail access
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            DNS management
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Subdomains per account
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" /></td>
                        <td>2</td>
                        <td>100</td>
                        <td>100 </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Parked Domains
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" /></td>
                        <td>2</td>
                        <td>100</td>
                        <td>100 </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            FTP Accounts
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" /></td>
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
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td>50 GB</td>
                        <td>100 GB</td>
                        <td>200 GB</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Bandwidth
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td>100 GB</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            MySQL Databases
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td>2</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Free Domain Registration
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/close.png" alt="wrong" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Free SSL Certificates
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Daily Backups
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/close.png" alt="wrong" /></td>
                        <td><img className=' py-1' src="/icons/close.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Email Accounts
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" /></td>
                        <td>1</td>
                        <td>100</td>
                        <td>100 </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            99.9% Uptime Guarantee
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            24/7/365 Support
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Powerful Control Panel
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Webmail access
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            DNS management
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Subdomains per account
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" /></td>
                        <td>2</td>
                        <td>100</td>
                        <td>100 </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Parked Domains
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" /></td>
                        <td>2</td>
                        <td>100</td>
                        <td>100 </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            FTP Accounts
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" /></td>
                        <td>1</td>
                        <td>Unlimited</td>
                        <td>Unlimited </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Inodes
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" /></td>
                        <td>200000</td>
                        <td>400000</td>
                        <td>600000 </td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            FTP over SSL
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>

                    <tr>
                        <td className='table-row-heading'>
                            File Manager
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Weekly Backups
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Access Manager
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Multiple PHP Versions
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            PHP Configuration
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Remote MySQL
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            InnoDB
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            1-Click Installer
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Cache Manager
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            SSH Access
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/close.png" alt="close" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Cronjobs
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td>2</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            WordPress
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Cloud Linux
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Hotlink Protection                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
                        </td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                        <td><img className=' py-1' src="/icons/check.png" alt="right" /></td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            GIT
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" />
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
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" /></td>
                        <td>10</td>
                        <td> 20</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            Active processes
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" /></td>
                        <td>25</td>
                        <td> 40</td>
                        <td>60</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            I/O (KB/s)
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" /></td>
                        <td>1024</td>
                        <td> 1024</td>
                        <td>1024</td>
                    </tr>
                    <tr>
                        <td className='table-row-heading'>
                            IOPS
                            <img className='inline-block ml-2' src="/icons/help_outline_gray.png" alt="help icon" /></td>
                        <td>64</td>
                        <td> 128</td>
                        <td>128</td>
                    </tr>
                    <tr className='border-t border-gray-300 '>
                        <td className='table-row-heading pt-5'>
                        </td>
                        <td className='text-center'><button className='py-3 px-10 border border-gray-300 rounded-full'>Select</button></td>
                        <td className='text-center'> <button className='py-3 px-10 border border-gray-300 rounded-full'>Select</button></td>
                        <td className='text-center'><button className='py-3 px-10 border border-gray-300 rounded-full'>Select</button></td>
                    </tr>
                </table>

            </div>


        </div>
    );
};

export default CompareHosting;