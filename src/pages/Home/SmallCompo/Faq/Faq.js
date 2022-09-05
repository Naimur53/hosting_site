import React from 'react';
import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
const Faq = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    function Icon({ id, open }) {
        return (
            <div className='flex h-full justify-center items-center'>
                {id === open ? <div className='w-[47px] h-[47px] relative'>
                    <div className="absolute top-1/2 -translate-y-1/2 border border-gray-900"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 rotate-90 border  border-gray-900"></div>

                </div>
                    : <div className='border-t-[2px] border-main-blue w-[47px]'>
                    </div>}

            </div >
        );
    }


    return (
        <div className='container mt-[66px]'>
            <div className='text-center mb-[100px]'>

                <h1 className='mt-10 md:mt-0 text-lg  heading font-semibold  mb-[10px]'>Frequently Asked Questions</h1>
                <p>Everything you need to know about the product and billing.</p>
            </div>
            <div>
                < >
                    <Accordion
                        open={open === 1}
                        icon={<Icon id={1} open={open} />}
                        onClick={() => handleOpen(1)}
                    >
                        <AccordionHeader className='acrodian-header custom-acro' >Is there a free trial available?</AccordionHeader>
                        <AccordionBody className='text-neutral-600 text-sm'>
                            Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 2}
                        icon={<Icon id={2} open={open} />}
                        onClick={() => handleOpen(2)}
                    >
                        <AccordionHeader className='acrodian-header custom-acro'>Can I change my plan later?</AccordionHeader>
                        <AccordionBody className='text-neutral-600 text-sm'>
                            We're not always in the position that we want to be at. We're
                            constantly growing. We're constantly making mistakes. We're constantly
                            trying to express ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 3}
                        icon={<Icon id={3} open={open} />}
                        onClick={() => handleOpen(3)}
                    >
                        <AccordionHeader className='acrodian-header custom-acro'>What is your cancellation policy?</AccordionHeader>
                        <AccordionBody className='text-neutral-600 text-sm'>
                            We're not always in the position that we want to be at. We're
                            constantly growing. We're constantly making mistakes. We're constantly
                            trying to express ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 4}
                        icon={<Icon id={4} open={open} />}
                        onClick={() => handleOpen(4)}
                    >
                        <AccordionHeader className='acrodian-header custom-acro'>Can other info be added to an invoice?</AccordionHeader>
                        <AccordionBody className='text-neutral-600 text-sm'>
                            We're not always in the position that we want to be at. We're
                            constantly growing. We're constantly making mistakes. We're constantly
                            trying to express ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 5}
                        icon={<Icon id={5} open={open} />}
                        onClick={() => handleOpen(5)}
                    >
                        <AccordionHeader className='acrodian-header custom-acro'>How does billing work?</AccordionHeader>
                        <AccordionBody className='text-neutral-600 text-sm'>
                            We're not always in the position that we want to be at. We're
                            constantly growing. We're constantly making mistakes. We're constantly
                            trying to express ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </>
            </div>

        </div>
    );
};

export default Faq;