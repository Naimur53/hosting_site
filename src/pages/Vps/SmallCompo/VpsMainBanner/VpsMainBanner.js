import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VpsMainBanner = ({ vps, dedicated, web }) => {
    const [selected, setSelected] = useState(0);

    const changeSelect = id => setSelected(id);

    const data = ['All plans', 'Lightweight', 'Middleweight', 'Heavyweight '];
    return (
        <div>
            <div className='container'>
                <div className='mt-[125px]'>
                    <div className='flex flex-col md:flex-row text-center gap-[8px]'>
                        <Link to='/vps' className='py-[8px] px-[36px] bg-main-blue text-white rounded-[50px] text-xs font-medium'>VPS</Link>
                        <Link to='/vps-dedicated-server' className='py-[8px] px-[36px] btn rounded-[50px] text-xs font-medium border border-[#D5DCE4]'>Dedicated servers</Link>
                        <Link to='/vps-web' className='py-[8px] px-[36px] btn rounded-[50px] text-xs font-medium border border-[#D5DCE4]'>Web hosting</Link>
                    </div>

                </div>
            </div>
            <div className='mt-[26px] bg-[#F6F7F9] text-center'>
                <div className="container">
                    <h1 className='pt-[29px] pb-[13] font-bold text-lg'>VPS server</h1>
                    <p>Simply type in your desired name and instantly check domain name availability. Buy and <br /> register a domain easily with Hostinger.</p>
                    <div className='flex lg:flex-row flex-col lg:justify-between  mt-[42px]'>

                        <div className='flex lg:flex-row  flex-col gap-[7px] '>
                            {
                                data.map((single, i) => <button key={i} onClick={() => changeSelect(i)} className={`py-[18px] px-[20px] text-center font-semibold text-ls text-neutral-500  transition-all border-t-[2px] bg-white ${selected === i && 'active-vps'}`}>{single}</button>)
                            }


                        </div>
                        <div className='xl:mt-[7px] h-full w-full lg:w-auto '>
                            <button onClick={() => changeSelect(4)} className={`py-[18px] px-[20px] text-center font-semibold w-full mt-[7px] lg:mt-0 h-full xl:h-auto lg:w-auto text-ls text-neutral-500  transition-all border-t-[2px] bg-white ${selected === 4 && 'active-vps'}`}>Billing cycle Monthly</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VpsMainBanner;