import React from 'react';
import { Select, Option } from "@material-tailwind/react";

const SearchArea = () => {
    return (
        <div className=' w-full'>
            <div className='flex  flex-col justify-center md:justify-start md:flex-row   w-full items-center'>
                <div className='grow relative '>
                    <input type="text" className='block w-full border py-118 px-130' defaultValue="Domain Name" placeholder='Domain Name' />
                    <div className='pointer-events-none absolute inset-0 flex justify-end items-center  '>
                        <div className='custom-select-width pointer-events-auto'>
                            <Select offset={6} color="white" size="sm" variant="standard" className='flex justify-center items-center border-0 select-wrap outline-0'
                                defaultInputValue="string"
                                menuProps={{ className: '!px-1 ' }}
                                selected={(pre) => pre ? pre : `info`}
                            >
                                <Option  >.info</Option>
                                <Option>.com</Option>

                            </Select>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='text-white md:mt-0 mt-5 bg-[#0074FF] px-[40px] py-[18px]'>Search Domain</button>
                </div>
            </div>
            <div className='mt-120'>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-[24px]'>
                    <div className='border transition-all hover:box-active border-gray-300 rounded-[6px] text-[#757575]'>
                        <p className='text-ls px-[13px] py-[21px] text-center '>
                            .com
                            <br />
                            $5.99
                        </p>
                    </div>
                    <div className='border transition-all hover:box-active border-gray-300 rounded-[6px] text-[#757575]'>
                        <p className='text-ls px-[13px] py-[21px] text-center '>
                            .net
                            <br />
                            $6.25
                        </p>
                    </div>
                    <div className='border transition-all hover:box-active border-gray-300 rounded-[6px] text-[#757575]'>
                        <p className='text-ls px-[13px] py-[21px] text-center '>

                            .info
                            <br />
                            $7.00
                        </p>
                    </div>
                    <div className='border transition-all hover:box-active border-gray-300 rounded-[6px] text-[#757575]'>
                        <p className='text-ls px-[13px] py-[21px] text-center '>
                            .org

                            <br />
                            $10.25
                        </p>
                    </div>
                    <div className='border transition-all hover:box-active border-gray-300 rounded-[6px] text-[#757575]'>
                        <p className='text-ls px-[13px] py-[21px] text-center '>
                            .jet
                            <br />
                            $3.63
                        </p>
                    </div>
                    <div className='border transition-all hover:box-active border-gray-300 rounded-[6px] text-[#757575]'>
                        <p className='text-ls px-[13px] py-[21px] text-center '>
                            .int
                            <br />
                            $5.02
                        </p>
                    </div>
                    <div className='border transition-all hover:box-active border-gray-300 rounded-[6px] text-[#757575]'>
                        <p className='text-ls px-[13px] py-[21px] text-center '>



                            .blog  <br /> $8.77
                        </p>
                    </div>
                    <div className='border transition-all hover:box-active border-gray-300 rounded-[6px] text-[#757575]'>
                        <p className='text-ls px-[13px] py-[21px] text-center '>
                            .biz
                            <br />
                            $9.28
                        </p>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default SearchArea;