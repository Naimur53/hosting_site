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
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${id === open ? "rotate-180" : ""
                    } h-5 w-5 transition-transform`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        );
    }

    return (
        <div className='container'>
            <div className='text-center mb-148'>

                <h1 className='mt-10 md:mt-0 heading font-bold  mb-3'>Frequently Asked Questions</h1>
                <p>Everything you need to know about the product and billing.</p>
            </div>
            <div>
                < >
                    <Accordion
                        open={open === 1}
                        icon={<Icon id={1} open={open} />}
                        onClick={() => handleOpen(1)}
                    >
                        <AccordionHeader className='acrodian-header' >Is there a free trial available?</AccordionHeader>
                        <AccordionBody className='text-neutral-600 text-sm'>
                            Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 2}
                        icon={<Icon id={2} open={open} />}
                        onClick={() => handleOpen(2)}
                    >
                        <AccordionHeader className='acrodian-header'>Can I change my plan later?</AccordionHeader>
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
                        <AccordionHeader className='acrodian-header'>What is your cancellation policy?</AccordionHeader>
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
                        <AccordionHeader className='acrodian-header'>Can other info be added to an invoice?</AccordionHeader>
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
                        <AccordionHeader className='acrodian-header'>How does billing work?</AccordionHeader>
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