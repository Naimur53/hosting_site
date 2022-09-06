import React from 'react';

const MessageBar = () => {
    return (
        <div className='bg-main-blue text-white pt-[7px] pb-[8px] flex justify-center items-center'>
            <img src="/icons/tinyLogo.png" alt="logo" />
            <p className='ml-[11px] text-xs font-medium'>
                Important message <a href="#" className='underline'> gose to here</a>
            </p>
        </div>
    );
};

export default MessageBar;