import React from 'react'

type Button = {
    type:string;
    text:string;
    className?:string;
}
const Yellow_button = ({type, text, className}:Button) => {
    if(type === "submit") {
        return (
            <button type="submit" className={`p-[10px] rounded-[10px] bg-fire font-bold text-[1rem] text-black m-auto ${className}`}>{text}</button>  )
    }
    else if (type === "button") {
        return (
            <button type={type} className={`p-[10px] rounded-[10px] bg-fire font-bold text-[1rem] text-black m-auto ${className}`}>{text}</button>  )
    }
}

export default Yellow_button