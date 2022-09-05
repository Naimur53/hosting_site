import React from 'react';

const PaymentOption = () => {
    return (
        <div className='container pt-10 md:pt-[152px] text-center'>
            <h1 className='font-semibold text-lg mb-[20px]'>Supported Payment Options</h1>
            <p className='text-sm text-neutral-600 pb-[72px]'>
                The gift of asceticism, just as in the juxtaposition of the verbs, introduces a profound sense of thankfulness by <br /> explaining the form.
            </p>
            <div className='flex flex-col pb-[152px] justify-center items-center'>
                <img src="/images/pay-1.png" alt="pay" />
                <img className='mt-[40px]' src="/images/pay-2.png" alt="pay" />
            </div>
        </div>
    );
};

export default PaymentOption;