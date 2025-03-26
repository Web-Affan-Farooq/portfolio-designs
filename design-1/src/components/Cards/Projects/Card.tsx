import React from 'react';
import Image from 'next/image';

const Card = ({image, name, shortDescription}:{image:string; name:string; shortDescription:string}) => {
  return (
    <div className="w-auto h-auto flex flex-row gap-[100px] p-[50px] justify-center items-center max-md:gap-[10px] max-sm:flex-col max-sm:text-center max-sm:gap-[30px]">
    <Image src={image} alt="projects showcase" width={200} height={200}/>
    <div className='flex flex-col flex-nowrap justify-center items-strat max-sm:gap-5'>
        <h1 className='text-[2rem] font-semibold'>{name}</h1>
        <p>{shortDescription}</p>
    </div>
</div>  )
}

export default Card