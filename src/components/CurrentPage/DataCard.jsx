import React from "react";
import { MdLightbulbOutline } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

const DataCard = ({cardData}) => {
    return (
        <div className="flex  bg-gradient-to-bl from-[#051A91] via-[#061C93] to-[#2284F1] via-[#1F80EB] w-[712px] h-[393.19px]  rounded-3xl flex-col p-12 gap-24">

            <div className="flex justify-between items-center text-4xl text-white font-bold">
                <MdLightbulbOutline />
                <HiOutlineSpeakerWave />
            </div>

            <div className=" flex items-center justify-center text-4xl font-inter font-bold text-[#fff]">

                {cardData.questions}
                
            </div>
        </div>
    );
};

export default DataCard;
