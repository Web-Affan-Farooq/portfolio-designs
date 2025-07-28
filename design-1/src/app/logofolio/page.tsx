import React from 'react';
import Image from 'next/image';
import { logos } from '@/constants/logos';

const Logofolio = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <main>
                <article>
                    <section className="p-[20px]">
                        <h1 className='text-center text-[3rem] text-white font-bold'>Explore my <span className="text-fire">Logo collection</span></h1>
                        <br />
                        <div className="w-full h-auto flex flex-row flex-wrap justify-center items-center gap-[10px]">
                            {
                                logos.map((logo, idx) => (
                                    <div className="w-[250px] h-[250px]" key={idx}>
                                        <Image src={logo.image} alt={logo.name} width={200} height={200} className='w-full h-full' />
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </article>
            </main>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Logofolio;