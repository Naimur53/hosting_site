import React, { useState } from 'react';
import BusinessPackage from '../../../../ShareComponents/PackageCard/BusinessPackage';
import PremiumPackage from '../../../../ShareComponents/PackageCard/PremiumPackage';
import SinglePackage from '../../../../ShareComponents/PackageCard/SinglePackage';

const HostingPackage = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked)

    }
    return (
        <div style={{ backgroundImage: 'url(/shape/Line4.png)' }} className=' relative bg-cover overflow-hidden bg-no-repeat pb-10  bg-banner'>

            <div className='text-center pt-[80px] text-white '>
                <h1 className='text-base mb-118  font-semibold md:font-lg '>Choose your hosting package</h1>
                <p className='text-ls font-light '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='mt-[60px] text-center'>
                <div>

                    <form className='flex  justify-center'>
                        <span className={`mr-[10px] text- white a-checked:hidden ${checked ? 'text-neutral-500' : 'text-white'}`}>
                            Monthly

                        </span>
                        <label for="default-toggle" class="inline-flex relative items-center cursor-pointer a">

                            <input type="checkbox" value="" id="default-toggle" class="sr-only peer" onChange={handleChange} />
                            <div class="w-11 h-6  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white peer-checked:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all bg-blue-600 peer-checked:bg-gray-700"></div>
                            <div class="flex justify-center ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                <span className={` text-xs text- white a-checked:hidden ${!checked ? 'text-neutral-500' : 'text-white'}`}>Yearly</span>
                                <img className='ml-2' src="/icons/arrow.png" alt="arrow" />
                                <span className='text-[#E1B207] text-xs'>(10% saved)</span>
                            </div>
                        </label></form>
                </div>
            </div>
            <div className="container 0 mt-10">

                <div className='grid md:grid-cols-3 gap-1'>
                    <div className='h-full flex   items-center justify-center md:justify-start'>
                        <SinglePackage></SinglePackage>
                    </div>
                    <div className='h-full flex   items-center justify-center md:justify-start'>
                        <PremiumPackage></PremiumPackage>
                    </div>
                    <div className='h-full flex   items-center justify-center md:justify-start'>
                        <BusinessPackage></BusinessPackage>
                    </div>
                </div>

            </div>




            {/* background blur effect  */}
            <div className="absolute   left-1/2 top-[500px]">
                <div className='bg-[#07E1BA] absolute rotate-[14deg] blur-[200px] h-[150px] w-[100px] md:w-[640px] -translate-x-1/2'>

                </div>
                <div className='bg-[#0074FF] absolute rotate-[-4deg] blur-[200px] h-[150px]  w-[100px] md:w-[640px]'>

                </div>

            </div>
        </div>
    );
};

export default HostingPackage;