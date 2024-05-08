import React from 'react'
import Logo from '../../assets/Logo.png'
import { Buttons, NavbarLinks } from '../../Data/Data'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {

    // console.log(NavbarLinks)

    return (
        <div className='flex justify-between items-center'>

            {/* Brand logo */}

            <div className=''>
                <img 
                src={Logo}
                />
            </div>

            {/* Navbar links and buttons */}

            <div className='flex items-center  gap-10'>
                
                {/* Navbar links */}
                <div className='flex gap-10 text-black'>
                    {/* links */}
                    {
                        NavbarLinks?.map((items,index)=>(
                            <Link to={items.link}
                            key={index}
                            className='font-inter font-normal text-lg text-[#3A3740]'
                            >
                                {items.title}
                            </Link>
                        ))
                    }
                </div>


                {/* buttons */}
                
                <div className='flex'>
                {
                    Buttons.map((item,index)=>(
                        <div key={index}>
                            <Button 
                            text={item.title}
                            onclick={item.onclick}
                            colorFrom={`#06286E`}
                            colorTo={`#164EC0`}
                            />
                        </div>
                    ))
                }
                </div>

            </div>
        </div>
    )
}

export default Navbar
