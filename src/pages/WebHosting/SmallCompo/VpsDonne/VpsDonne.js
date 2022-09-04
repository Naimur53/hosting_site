import React from 'react';

const VpsDonne = () => {
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
        <div className='mt-[117px]'>
            <h1 className='heading text-center'>Un VPS qui Vous Donne plus de
                <br /> possibilites</h1>
            <div className="container mt-[47px] md:mb-[208px] mb-[100px]">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[120px]'>

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

export default VpsDonne;