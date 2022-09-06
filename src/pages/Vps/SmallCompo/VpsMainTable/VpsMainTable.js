import React from 'react';

const VpsMainTable = () => {
    // const data=[{},{},{}]
    return (
        <div className="container">
            <div className='mt-[51px] border border-gary-300 rounded-t-[4px] xl:w-full overflow-hidden overflow-x-scroll '>
                <table className='  2xl:w-full w-[1200px] '>
                    <thead>
                        <tr className='bg-[#EFF1F4] text-left '>
                            <th className='px-[18px] vps_table_heading'>Plan</th>
                            <th className='vps_table_heading'>vCPUs</th>
                            <th className='vps_table_heading'>RAM</th>
                            <th className='vps_table_heading'>Storage</th>
                            <th className='vps_table_heading'>Bandwidth</th>
                            <th className='vps_table_heading'>Database Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.from(Array(11).keys()).map((single, i) => <tr key={i} className='vps_tr '>
                                <td className=''>
                                    <div className='flex items-center gap-[12px] px-[18px]  '>
                                        <div >
                                            <img src="/images/bigFlag.png" alt="flag" />

                                        </div>
                                        <div>
                                            <h3 className='text-ls text-neutral-600 font-medium'>E3-1240V5</h3>
                                            <p className='text-xs text-[#8C929C]'>lightweight</p>
                                        </div>
                                    </div>
                                </td>
                                <td  >
                                    <div className='  text-left  '>

                                        <div>
                                            <h3 className='text-ls text-neutral-600 font-medium'>4 Cores @ 3.5 GHz</h3>
                                            <p className='text-xs text-[#8C929C]'>Benchmark 4,147</p>
                                        </div>
                                    </div>
                                </td>
                                <td  >
                                    <div className='text-left  gap-[12px] '>

                                        <div>
                                            <h3 className='text-ls text-neutral-600 font-medium'>32GB</h3>
                                            <p className='text-xs text-[#8C929C]'>Up to 64GB</p>
                                        </div>
                                    </div>
                                </td>
                                <td  >
                                    <div className='text-left  gap-[12px] '>

                                        <div>
                                            <h3 className='text-ls text-neutral-600 font-medium'>2x 250GB SSD</h3>
                                            <p className='text-xs text-[#8C929C]'>Up to 8 Disks</p>
                                        </div>
                                    </div>
                                </td>

                                <td  >
                                    <div className='text-left  gap-[12px] '>

                                        <div>
                                            <h3 className='text-ls text-neutral-600 font-medium'>3Gbps</h3>
                                            <p className='text-xs text-[#8C929C]'>30TB/mo free traffic</p>
                                        </div>
                                    </div>
                                </td>
                                <td  >
                                    <div className='text-left  gap-[12px] '>

                                        <div>
                                            <h3 className='text-ls text-neutral-600 font-medium'>03322</h3>
                                            <p className='text-xs text-[#8C929C]'>Number</p>
                                        </div>
                                    </div>
                                </td>


                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default VpsMainTable;