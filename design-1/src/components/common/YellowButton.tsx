import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text:string;
}
const Yellow_button = (props:ButtonProps) => {
  return (
    <button type={props.type} className={`${props.className} cursor-pointer hover:scale-[1.09] transition-all duration-400 ease-in-out hover:shadow-lg hover:shadow-yellow-500 bg-sharp-yellow text-black px-[15px] py-1 rounded-lg font-bold`}>
        {props.text}
    </button>
  )
}

export default Yellow_button
