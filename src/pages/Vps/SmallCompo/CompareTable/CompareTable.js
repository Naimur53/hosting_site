import React from 'react';
import './CompareTable.css'
const CompareTable = () => {
    return (
        <div className='mt-[68px]'>

            <div className='  border border-gary-300 rounded-t-[4px] xl:w-full overflow-hidden overflow-x-scroll '>
                <table className=' 2xl:w-full w-[700px] compare_table text-center'>
                    <tr className=' '>
                        <th className='compare_table_heading'></th>
                        <th className='compare_table_heading bg-white rounded-t-[8px]'>Compare tool 1</th>
                        <th className='compare_table_heading'>Compare tool 2</th>
                        <th className='compare_table_heading'>Compare tool 3</th>
                    </tr>
                    <tr className='compare_tr'>
                        <td className='compare_table_content_heading '>Server</td>
                        <td className='compare_table_content'>E5-1620v4</td>
                        <td className='compare_table_content'>E3-1270v2</td>
                        <td className='compare_table_content'>E3-1270v3</td>
                    </tr>
                    <tr className='compare_tr'>
                        <td className='compare_table_content_heading'>CPU</td>
                        <td className='compare_table_content'>4 @ 3.5GHz</td>
                        <td className='compare_table_content'>4 @ 3.5GHz</td>
                        <td className='compare_table_content'>4 @ 3.5GHz</td>
                    </tr>
                    <tr className='compare_tr'>
                        <td className='compare_table_content_heading'>Memory</td>
                        <td className='compare_table_content'>32GB</td>
                        <td className='compare_table_content'>8GB</td>
                        <td className='compare_table_content'>32GB</td>
                    </tr>
                    <tr className='compare_tr'>
                        <td className='compare_table_content_heading'>Storage</td>
                        <td className='compare_table_content'>2x 240GB SSD</td>
                        <td className='compare_table_content'>2x 240GB SSD</td>
                        <td className='compare_table_content'>1TB HDD</td>
                    </tr>
                    <tr className='compare_tr'>
                        <td className='compare_table_content_heading'>Bandwidth</td>
                        <td className='compare_table_content'>3Gbps</td>
                        <td className='compare_table_content'>1Gbps</td>
                        <td className='compare_table_content'>100Mbps</td>
                    </tr>
                    <tr className='compare_tr'>
                        <td className='compare_table_content_heading'>Included traffic</td>
                        <td className='compare_table_content'>30TB</td>
                        <td className='compare_table_content'>10TB</td>
                        <td className='compare_table_content'>20TB</td>
                    </tr>
                    <tr className='compare_tr'>
                        <td className='compare_table_content_heading'>Additional traffic price</td>
                        <td className='compare_table_content'>$ 1 / TB</td>
                        <td className='compare_table_content'>$ 100 / TB</td>
                        <td className='compare_table_content'>$ 90 / TB</td>
                    </tr>
                    <tr className='compare_tr'>
                        <td className='compare_table_content_heading'>Customizable</td>
                        <td className='compare_table_content'>
                            <div className='flex justify-center items-center'>
                                <img src="/icons/dark-check.png" className='w-[16px]' alt="" />
                            </div>
                        </td>
                        <td className='compare_table_content'>
                            <div className='flex justify-center items-center'>
                                <img src="/icons/plane.png" className='w-[16px]' alt="" />
                            </div>
                        </td>
                        <td className='compare_table_content'>
                            <div className='flex justify-center items-center'>
                                <img src="/icons/dark-check.png" className='w-[16px]' alt="" />
                            </div>
                        </td>
                    </tr>
                    <tr className='compare_tr'>
                        <td className='compare_table_content_heading'>Additional traffic price</td>
                        <td className='compare_table_content '>$ 109 / month</td>
                        <td className='compare_table_content'>$ 179 / month</td>
                        <td className='compare_table_content'>$ 254 / month</td>
                    </tr>
                    <tr className=' '>
                        <td className='compare_table_content_heading'> </td>
                        <td className='compare_table_content rounded-b-[8px]'> </td>
                        <td className='compare_table_content'> </td>
                        <td className='compare_table_content'> </td>
                    </tr>
                </table>

            </div>
        </div>
    );
};

export default CompareTable;