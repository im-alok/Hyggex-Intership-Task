import React from 'react'

const HighlightedText = ({text,customClasses}) => {
  return (
    <h1 className={`font-inter font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-t from-[#06286E] to-[#164EC0] ${customClasses}`}>
      {text}
    </h1>
  )
  }
export default HighlightedText;
