import React from 'react';

const HostingBanner = () => {
    const data = [
        {
            img: '/shape/blue-white.png',
            heading: 'Lorem Ipsum is probably ',
            describe: "To a degree, Lorem Ipsum is gibberish, but it is rooted in a real language: The text's origins are based."
        },
        {
            img: '/shape/blue-white.png',
            heading: 'Lorem Ipsum is probably ',
            describe: "To a degree, Lorem Ipsum is gibberish, but it is rooted in a real language: The text's origins are based."
        },
        {
            img: '/shape/blue-white.png',
            heading: 'Lorem Ipsum is probably ',
            describe: "To a degree, Lorem Ipsum is gibberish, but it is rooted in a real language: The text's origins are based."
        },
        {
            img: '/shape/blue-white.png',
            heading: 'Lorem Ipsum is probably ',
            describe: "To a degree, Lorem Ipsum is gibberish, but it is rooted in a real language: The text's origins are based."
        },
    ]
    return (
        <div style={{ backgroundImage: 'url(/shape/Line4.png)' }} className='min-h-screen bg-cover bg-no-repeat overflow-hidden '>
            <div className="container">
                <div>
                    <h1 className='mt-10 md:mt-[75px] text-lg md:text-2xl   text-center font-bold'>Hosting companies
                        <br />
                        Interested in doing business with you</h1>
                    <p className='text-center  mt-120 mb-148 Hosting companies
Interested in doing business with you font-normal text-[16px]'>Don't just take our word for it. We're the web hosting provider of <br /> choice for thousands of happy customers.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                    {

                        data.map(({ heading, img, describe }, i) => <div key={i}>
                            <div className='mb-120'>
                                <img src={img} alt="shape" />
                            </div>
                            <div>
                                <h1 className='text-neutral-700 font-bold text-sm mb-[10px]'>{heading}</h1>

                            </div>
                            <p className='text-neutral-600 text-xs'>{describe}</p>

                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default HostingBanner;