import React from 'react'

interface Card {
  customer_name:string;
  review:string;
}
const Allumini_card = ({customer_name, review}:Card) => {
  return (
    <div className="customer w-[300px] px-[40px] py-[30px] whitespace-normal my-0 mx-[10px] inline-block rounded-[10px] bg-[rgba(255,255,255,0.1)]">
                          <p><span className="commas">{`"`}</span>{review}<span className="commas">{`"`}</span></p>
                          <div className="highlight-1">— {customer_name}</div>
                      </div>  )
}

export default Allumini_card