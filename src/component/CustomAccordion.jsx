import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


const CustomAccordion = ({ items }) => {
    const [textId, setTextId] = useState(1)

    const handleToggle = (index) => {
        if (textId === index) {
            setTextId(0)
        } else {
            setTextId(index)

        }
    }

    return (
        <Accordion allowZeroExpanded preExpanded={[textId]}>
            {items.map((item, index) => (
                <AccordionItem key={index + 1} uuid={index + 1} className="bg-[#F7F9FB] rounded-[5px] py-[2rem] px-[3rem] mb-[3rem]">
                    <AccordionItemHeading onClick={() => handleToggle(index + 1)} className="text-[1.8rem] text-secondary font-semibold leading-[2.7rem]">
                        <AccordionItemButton className="flex items-center justify-between">
                            <div className="w-[90%]">{item.title} </div>
                            {textId === (index + 1) ? <AiOutlineMinus /> : <AiOutlinePlus />}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="text-[1.6rem] font-medium leading-[2.4rem] text-gray my-[2rem]">
                            {item.content}
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default CustomAccordion;
