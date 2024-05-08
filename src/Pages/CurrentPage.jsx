import React, { useState } from 'react'
import { GoHome } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CurrentPageExplore } from '../Data/Data';
import { MdReplay } from "react-icons/md";
import DataCard from '../components/CurrentPage/DataCard';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from '../components/Common/Button';
import { BsFullscreen } from "react-icons/bs";
import Logo2 from '../assets/Logo2.png'
import { FaPlus } from "react-icons/fa";
import FAQ from '../components/CurrentPage/FAQ';

const CurrentPage = () => {

    const TabData = [
        {
            id:1,
            title:'Study',
        },
        {
            id:2,
            title:'Quiz',
        },
        {
            id:3,
            title:'Test',
        },
        {
            id:4,
            title:'Game',
        },
        {
            id:5,
            title:'Others',
        },
    ]


    const [currentTab, setCurrentTab] = useState(TabData[0].title);
    const [tabData,setTabData] = useState(CurrentPageExplore[0].data);
    const [currentCard,setCurrentCard] = useState(tabData[0]);
    // console.log(tabData)
    // console.log(currentCard)

    function backHandler(){
        if(currentCard){
            const currentIndex = currentCard.id;
            if(currentIndex === 0){
                return;
            }
            setCurrentCard(tabData[currentIndex - 1]);
        }
    }

    function forwardHandler(){
        if(currentCard){
            const currentIndex = currentCard.id;
            if(currentIndex + 1 === tabData.length){
                return;
            }
            setCurrentCard(tabData[currentIndex + 1]);
        }
    }

    return (
        <div className='flex flex-col gap-20'>

            {/* Making the content static because not able to determine the name */}

            <div className='flex items-center gap-2'>
                <span className='flex gap-1 items-center font-inter text-lg font-medium text-center text-[#696671]'>
                    <GoHome/> <MdKeyboardArrowRight />
                </span>

                <span className='flex gap-1 items-center font-inter text-lg font-medium text-center text-[#696671]'>
                    FlashBoard <MdKeyboardArrowRight />
                </span>

                <span className='flex gap-1 items-center font-inter text-lg font-medium text-center text-[#696671]'>
                    Mathematics <MdKeyboardArrowRight />
                </span>

                <span className='font-inter text-lg font-bold text-center text-[#06286E]'>
                    Relation and Functions
                </span>
            </div>

            <div className='flex gap-10 flex-col '>
                <h1 
                className='font-inter font-bold text-3xl bg-gradient-to-t from-[#06286E] to-[#164EC0] text-transparent bg-clip-text'
                >Relations and Functions ( Mathematics )</h1>

                {/* option Menu */}
                <div className='flex flex-col gap-10 full mx-auto items-center'>   
                    <div className='flex items-center gap-10'>
                        {
                            TabData?.map((item)=>(
                                <div
                                key={item.id}
                                className={`${currentTab === item.title ? 'text-[#06286E]' : 'text-[#696671]'} font-inter font-medium text-xl text-center`}
                                onClick={()=>{
                                    setCurrentTab(item.title);
                                    const Result = CurrentPageExplore.filter((res)=>res.tag === item.title);
                                    // console.log(Result[0].data)
                                    setTabData(Result[0].data);
                                    Result[0].data.length > 0 ? (setCurrentCard(Result[0].data[0])) : (setCurrentCard(null));
                                }}
                                >
                                    {item.title}

                                    <div className={`${currentTab === item.title ? 'border-b-2 border-[#06286E]' :'hidden'}`}>
                                    </div>

                                </div>
                            ))
                        }
                    </div>

                    {/* Data Card */}
                    
                    {
                        currentCard ? (<DataCard cardData={currentCard}/>) : ('Error!')
                    }

                    {/* back and forward button */}

                    <div className='flex items-center justify-between w-10/12 mx-auto'>
                        <div className='text-4xl font-bold text-[#06286E] '>
                            <MdReplay />
                        </div>

                        {/* forward backward button */}
                        <div className='flex gap-10 items-center'>
                            <div
                            onClick={backHandler}
                            >
                                <Button>
                                    <IoIosArrowBack />
                                </Button>
                            </div>

                            {/* current Card */}
                            <div className='text-2xl font-bold  '>
                                <span>{currentCard?.id < 10 ?('0'):('')}{currentCard?.id + 1} / {tabData.length < 10 ? ('0'):('')}{tabData.length}</span>
                            </div>

                            <div
                            onClick={forwardHandler}
                            >
                                <Button>
                                    <IoIosArrowForward />
                                </Button>
                            </div>

                        </div>

                        {/* fullScreen */}
                        <div className='text-4xl font-bold text-[#06286E] '>
                            <BsFullscreen />
                        </div>
                    </div>

                </div>

            </div>

            {/* logo and create flashCard button  */}

            <div className='flex items-center justify-between'>
                <img 
                src={Logo2}
                />

                <div className='flex items-center gap-2'>
                    <Button>
                        <FaPlus />
                    </Button>
                    <span className='font-inter font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-t from-[#06286E] to-[#164EC0]'>Create Flashcard</span>
                </div>

            </div>


            {/* FAQ section */}

            <FAQ />

        </div>
    )
}

export default CurrentPage
