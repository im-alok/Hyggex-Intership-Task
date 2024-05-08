import React from 'react'
import HighlightedText from '../Common/HighlightedText'
import { FAQs } from '../../Data/Data'
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
    return (
        <div className='flex flex-col gap-10'>
            <HighlightedText text={'FAQ'} customClasses={`text-5xl font-bold`}/>

            <div className='w-8/12 flex flex-col gap-5'>
                {
                    FAQs.map((faq,index)=>(
                        <div key={index} className='font-inter font-semibold textbase text-[#28262C] flex justify-between rounded-md p-5 gradient-border '>

                            {faq}

                            <IoIosArrowDown />
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default FAQ
