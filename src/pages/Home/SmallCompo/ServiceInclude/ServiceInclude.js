import React from 'react';

const ServiceInclude = () => {
    const data = ['Free SSL', 'Access Management', 'eCommerce Optimization', 'Free Migration', 'Backups', 'Cloudflare CDN & DDoS Protection', 'PHP Speed Boost', 'LiteSpeed WordPress Module', 'One-Click WordPress Installation', '24/7/365 Tech Support', 'Auto Script Installer', '99.9% Uptime Guarantee']
    return (
        <div className='container pt-[162px] pb-[169px]'>
            <h1 className='heading text-center mb-[56px]'>Our Services include</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[48px] mt-[50px]'>
                {
                    data.map(single => <div className='flex justify-start items-center' key={single}>
                        <img className='mr-116' src="/icons/Checkbox.png" alt="check" />
                        <p>{single}</p>

                    </div>)
                }

            </div>

        </div>
    );
};

export default ServiceInclude;