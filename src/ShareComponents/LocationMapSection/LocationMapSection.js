import React from 'react';

const LocationMapSection = () => {
    return (
        <div className='container mt-[153px]'>

            <div className='block md:flex mb-[90px] justify-between'>
                <div>
                    <h1 className='font-semibold text-lg'>Hostim in world <br /> Datacenters </h1>

                </div>
                <div className='flex md:flex-row gap-3 md:gap-0 flex-col md:mt-0 mt-5'>
                    <div className='p-4 mr-4 text-center border border-gray-300 rounded-md'>
                        <h4 className='text-neutral-700 text-xl'>2</h4>
                        <p className='text-sm text-neutral-500'>Continents</p>

                    </div>
                    <div className='p-4 min-w-[132px] mr-4 text-center border border-gray-300 rounded-md'>
                        <h4 className='text-neutral-700 text-xl'>4</h4>
                        <p className='text-sm text-neutral-500'>Pays</p>

                    </div>
                    <div className='p-4 mr-4 text-center border border-gray-300 rounded-md'>
                        <h4 className='text-neutral-700 text-xl'>3</h4>
                        <p className='text-sm text-neutral-500'>Localsations</p>

                    </div>
                </div>

            </div>
            <div>
                <img src="/images/map.png" alt="map" />
            </div>

        </div>
    );
};

export default LocationMapSection;