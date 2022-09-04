import React from 'react';

const DomainToHostim = () => {
    const data = [
        {
            img: '/shape/blue-white.png',
            heading: 'User friendly control panel ',
            describe: "To a degree, Lorem Ipsum is gibberish, but it is rooted in a real language: Latin. The text's origins are based on a passage from a piece of classicall. "
        },
        {
            img: '/shape/blue-white.png',
            heading: '24/7 Chat support',
            describe: "To a degree, Lorem Ipsum is gibberish, but it is rooted in a real language: Latin. The text's origins are based on a passage from a piece of classicall. "
        },
        {
            img: '/shape/blue-white.png',
            heading: 'Simply fast website',
            describe: "To a degree, Lorem Ipsum is gibberish, but it is rooted in a real language: Latin. The text's origins are based on a passage from a piece of classicall. "
        },
    ]
    return (
        <div className='mt-[130px] pb-[134px]'>
            <div className="container ">
                <div className='mb-[57px] text-center'>

                    <h1 className='text-lg font-semibold mb-[24px] '>Why transfer your domain to hostim?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been thdustry's standard dummy text.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[100px]'>

                    {

                        data.map(({ heading, img, describe }, i) => <div key={i} className='text-center'>
                            <div className='mb-120 flex justify-center items-center'>
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

export default DomainToHostim;