import React from 'react';

const TestimonialsCard = ({ start, describe, userImg, name, work }) => {
    return (
        <div>
            <div>
                <img src={start} alt="star" />
            </div>
            <div className='my-120 font-medium text-sm text-neutral-800'>
                <p>{describe}</p>
            </div>
            <div className='mb-130'>
                <button className='border-b font-medium border-black text-ls'>Read more</button>
            </div>
            <div className='flex items-center'>
                <img src={userImg} alt="user" />
                <div className='ml-[10px]'>
                    <h2 className='font-semibold text-sm text-neutral-700'>{name}</h2>
                    <p className='text-xs text-neutral-600'>{work}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCard;