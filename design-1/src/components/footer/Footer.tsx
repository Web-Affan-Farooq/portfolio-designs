import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <br />
      <br />
      <br />
          <footer className='w-auto p-[30px] flex flex-row flex-wrap justify-between items-center'>
            <Image src={'/images/logo.png'} alt="" width={150} height={60}/>
            <p>&copy; Muhammad affan  | All rights reserved</p>
        </footer>
    </div>
  )
}

export default Footer;