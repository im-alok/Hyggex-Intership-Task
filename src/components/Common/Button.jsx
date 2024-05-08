import React from 'react'

const Button = ({text,customClasses,onclick,disabled=false,children}) => {
    return (
        <div>
            <button
            onClick={onclick}
            disabled={disabled}
            className={`${customClasses} bg-gradient-to-b from-[#06286E] to-[#164EC0] ${text ?'py-3 px-10 text-lg' :'p-5 text-2xl'} rounded-full text-white font-medium `}
            >
                {
                    text ? (text) :(children)
                }
            </button>
        </div>
    )
}

export default Button
