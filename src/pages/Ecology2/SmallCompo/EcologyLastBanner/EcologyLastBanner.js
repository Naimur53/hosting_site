import React from 'react';

const EcologyLastBanner = () => {
    return (
        <div className='container xl:mt-[141px] mt-[40px]'>
            <div className="grid gird-cols-1 gap-[37px] md:grid-cols-2">
                <div>
                    <h2 className='text-normal font-semibold text-neutral-800 mb-120 mt-[32px]'>Improve the environment by making a positive contribution!</h2>
                    <p className='text-ls '>
                        The hosting platform was designed with a focus on maximizing resources and minimizing waste. Throughout our hosting platform, energy efficiency is a priority. Aside from that, every amperage we draw from the grid is matched three times through Bonneville Environmental Foundation renewable energy and one tree is planted for every account provisioned.
                        <br />
                        <br />
                        Host your website on an eco-friendly platform and feel good about your contribution.
                        <br />
                        <br />
                        Find out more about Green Web Hosting
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="/images/neture.png" alt="pen world" />
                </div>
            </div>

        </div>
    );
};

export default EcologyLastBanner;