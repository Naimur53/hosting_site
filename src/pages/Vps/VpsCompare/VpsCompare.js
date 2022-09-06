import React from 'react';
import CompareTable from '../SmallCompo/CompareTable/CompareTable';

const VpsCompare = () => {
    return (
        <div className="bg-neutral-100 mb-[25px]">
            <div className='container'>
                <h1 className='text-center text-lg pt-[50px] xl:pt-[78px] font-semibold pb-[24px]'>Check how we compare with others</h1>
                <p className=' text-sm text-center'>Compare Cherry Servers Bare Metal with some other vendors in the market</p>
                <CompareTable>
                </CompareTable>
            </div>
        </div>
    );
};

export default VpsCompare;