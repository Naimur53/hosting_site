import React from 'react';
import MultiRangeSlider from '../../../../ShareComponents/MultiRangeSlider/MultiRangeSlider';
import ToggleBtn from '../../../../ShareComponents/ToggleBtn/ToggleBtn';

const VpsFilter = () => {
    return (
        <div className="container">
            <div className='mt-[19px]'>

                <div className="grid grid-cols-2 lg:grid-cols-12 md:grid-cols-6  gap-[10px]">
                    <div className='col-span-2'>
                        <h3 className='text-semibold text-ls text-neutral-500 mb-[18px]'>Location</h3>
                        <div className='flex items-center gap-[16px]'>
                            <img src="/images/smallflag1.png" alt="flag" />
                            <p className='font-medium text-ls'>EU-Nord - 1</p>
                        </div>
                        <div className='mt-[9px] flex items-center gap-[16px]'>
                            <img src="/images/smallflag2.png" alt="flag" />
                            <p className='font-medium text-ls'>EU-Nord - 2</p>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <h3 className='text-semibold text-ls text-neutral-500 mb-[18px]'>Processor type</h3>
                        <div className='flex flex-col gap-[7px]'>

                            <ToggleBtn name='Single'></ToggleBtn>
                            <ToggleBtn name='Dual'></ToggleBtn>
                            <ToggleBtn name='Quad'></ToggleBtn>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row col-span-5 gap-4'>
                        <div >
                            <h3 className='text-semibold text-ls text-neutral-500 pb-[18px]'>Cores</h3>
                            <div className='inline-block'>
                                <div className="flex  items-center">
                                    {/* <div className='w-[21px] h-[21px] border-[3px] rounded-full border-main-blue'></div>
                                    <div className='w-[165px] border-t-[4px] border-main-blue'></div>
                                    <div className='w-[21px] h-[21px] border-[3px] rounded-full border-main-blue'></div> */}
                                    <MultiRangeSlider
                                        min={4}
                                        title='cores'
                                        max={56}
                                        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                                    />
                                </div>

                            </div>

                        </div>
                        <div  >
                            <h3 className='text-semibold text-ls text-neutral-500 mb-[18px]'>Ram</h3>
                            <div className='inline-block'>
                                <MultiRangeSlider
                                    min={16}
                                    title='GB'
                                    max={1536}
                                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                                />


                            </div>

                        </div>
                    </div>

                    <div className='col-span-4 md:col-span-3 flex justify-between items-center'>
                        <div className='mt-3 md:mt-0'>
                            <h3 className='text-semibold text-ls text-neutral-500 mb-[18px]'>Other</h3>
                            <div className='flex flex-col gap-[7px]'>

                                <ToggleBtn name='In stock'></ToggleBtn>
                                <ToggleBtn name='CPU available'></ToggleBtn>
                            </div>

                        </div>
                        <div className='flex col-span-2 justify-center items-center'>
                            <button className='text-neutral-500 text-ls font-semibold p-[10px] rounded-[8px] bg-neutral-200'>Reset Filter</button>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default VpsFilter;