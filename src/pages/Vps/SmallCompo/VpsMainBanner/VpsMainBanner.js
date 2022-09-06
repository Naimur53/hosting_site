import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VpsMainBanner = ({ vps, dedicated, web }) => {
    const [selected, setSelected] = useState(0);

    const changeSelect = id => setSelected(id);

    const data = ['All plans', 'Lightweight', 'Middleweight', 'Heavyweight '];
    return (
        <div>
            <div className='container'>
                <div className='mt-[118px]'>
                    <div className='flex flex-col md:flex-row  gap-[8px]'>
                        <Link to='/vps' className={`py-[8px] px-[36px] ${vps ? 'bg-main-blue text-white' : 'border border-[#D5DCE4]'}  rounded-[50px] text-xs font-medium`}>VPS</Link>
                        <Link to='/vps-dedicated-server' className={`py-[8px] px-[36px] ${dedicated ? 'bg-main-blue text-white' : 'border border-[#D5DCE4]'}   rounded-[50px] text-xs font-medium`}>Dedicated servers</Link>
                        <Link to='/vps-web' className={`py-[8px] px-[36px] ${web ? 'bg-main-blue text-white' : 'border border-[#D5DCE4]'}  rounded-[50px] text-xs font-medium`}>Web hosting</Link>
                    </div>

                </div>
            </div>
            <div className='mt-[26px] bg-[#F6F7F9] text-center'>
                <div className="container">
                    <h1 className='pt-[29px] pb-[13] font-bold text-lg'>VPS server</h1>
                    <p>Simply type in your desired name and instantly check domain name availability. Buy and <br /> register a domain easily with Hostinger.</p>
                    <div className='md:flex justify-between mt-[42px]'>

                        <div className='flex md:flex-row flex-col gap-[7px] '>
                            {
                                data.map((single, i) => <button key={i} onClick={() => changeSelect(i)} className={`py-[18px] px-[20px] text-center font-semibold text-ls text-neutral-500  transition-all border-t-[2px] bg-white ${selected === i && 'active-vps'}`}>{single}</button>)
                            }


                        </div>
                        <div className='mt-[7px]'>
                            <button onClick={() => changeSelect(4)} className={`py-[18px] px-[20px] text-center font-semibold text-ls text-neutral-500  transition-all border-t-[2px] bg-white ${selected === 4 && 'active-vps'}`}>Billing cycle Monthly</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VpsMainBanner;