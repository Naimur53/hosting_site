
import { Option, Select } from '@material-tailwind/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VpsWebBanner = () => {
    const [selected, setSelected] = useState(0);

    const changeSelect = id => setSelected(id);

    const data = ['All plans', 'Lightweight', 'Middleweight', 'Heavyweight '];
    return (
        <div>
            <div className='container'>
                <div className='mt-[164px]'>
                    <div className='flex flex-col md:flex-row text-center  gap-[8px]'>
                        <Link to='/vps' className='py-[8px] px-[36px] btn rounded-[50px] text-xs font-medium border border-[#D5DCE4]'>VPS</Link>
                        <Link to='/vps-dedicated-server' className='py-[8px] px-[36px] btn rounded-[50px] text-xs font-medium border border-[#D5DCE4]'>Dedicated servers</Link>
                        <Link to='/vps-web' className='py-[8px] px-[36px] bg-main-blue text-white rounded-[50px] text-xs font-medium'>Web hosting</Link>
                    </div>

                </div>
            </div>
            <div className='mt-[26px] bg-[#F6F7F9] text-center'>
                <div className="container">
                    <h1 className='pt-[29px] pb-[13] font-bold text-lg'>Web hosting</h1>
                    <p>Simply type in your desired name and instantly check domain name availability. Buy and <br /> register a domain easily with Hostinger.</p>
                    <div className='md:flex 2xl:justify-between  lg:items-end mt-[42px]'>

                        <div className='flex xl:flex-row flex-col  gap-[7px] '>
                            {
                                data.map((single, i) => <button key={i} onClick={() => changeSelect(i)} className={`py-[18px] px-[20px] text-center font-semibold text-ls text-neutral-500  transition-all border-t-[2px] bg-white ${selected === i && 'active-vps'}`}>{single}</button>)
                            }


                        </div>
                        <div className='xl:mt-[0px] mt-[7px] md:ml-4 m-0 flex xl:flex-row flex-col  gap-[7px] '>
                            <button className={`py-[18px] xl:mr-[10px] mr-0 px-[20px] text-center font-semibold text-ls text-neutral-500 flex justify-center items-center transition-all border-t-[2px]  bg-white `}>
                                <span>Billing cycle Monthly</span>
                                <div className='ml-1 custom-select-width2 pointer-events-auto inline-block'>
                                    <Select offset={6} color="white" size="sm" variant="standard" className='flex justify-center focus:!outline-none focus:border-none font-semibold text-main-blue items-center border-0 select-wrap-2 outline-0'
                                        defaultinputvalue="string"
                                        menuProps={{ className: '!px-1 ' }}
                                        selected={(pre) => pre ? pre : `Monthly`}
                                    >
                                        <Option  >Monthly</Option>
                                        <Option>Yearly</Option>

                                    </Select>
                                </div></button>
                            <button onClick={() => changeSelect(4)} className={`py-[18px] px-[20px] text-center font-semibold text-ls text-neutral-500 flex justify-center items-center transition-all border-t-[2px] bg-white ${selected === 4 && 'active-vps'}`}>
                                <span className='mr-[35px]'>Hide filters</span>
                                <img src="/icons/hide.png" alt="hide " />
                            </button>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default VpsWebBanner;