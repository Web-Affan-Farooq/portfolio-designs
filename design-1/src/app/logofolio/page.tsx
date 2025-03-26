import React from 'react';
import Image from 'next/image';

const Logofolio = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <main>
                <article>
                    <section className="w-auto p-[20px] h-screen overflow-y-auto">
                        <h1 className='text-center text-[3rem] text-white font-bold'>Explore my <span className="text-fire">Logo collection</span></h1>
                        <br />
                        <div className="w-full h-auto flex flex-row flex-wrap justify-center items-center gap-[10px]">
                            <div className="w-[250px] h-[250px]">
                                <Image src={"https://e7.pngegg.com/pngimages/404/483/png-clipart-product-design-logo-line-font-angle-aesthetic-heart-angle-triangle.png"} alt={"logo"} width={200} height={200} className='w-full h-full'/>
                            </div>
                            <div className="w-[250px] h-[250px]">
                                <Image src="https://w7.pngwing.com/pngs/602/48/png-transparent-logo-blanc-creatives-art-design-logo-aesthetics-business.png" alt="" width={200} height={200} className='w-full h-full' />
                            </div>
                            <div className="w-[250px] h-[250px]">
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPeJ7FhhgHZVcpC3-1nZOmo6qOjD6hf0Qir-Z52Z1hgg5eNXTrfIlzUIzpw5g8IOJkeX8&usqp=CAU" alt="" width={200} height={200} className='w-full h-full' />
                            </div>
                            <div className="w-[250px] h-[250px]">
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8z3Elax0LxvL8idT82j9JYJpQ3y8kXdZTQZwKoFoo6vfef2hhkqABm91dfHJZbRlLHic&usqp=CAU" alt="" width={200} height={200} className='w-full h-full' />
                            </div>
                            <div className="w-[250px] h-[250px]">
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqRpNOrOFa6U_ncOnIZ8SxSsz6nV3x0BI0D0DuKtr0N_9sR8aizZTUKvkajtr7GgOTrk&usqp=CAU" alt="" width={200} height={200} className='w-full h-full' />
                            </div>
                            <div className="w-[250px] h-[250px]">
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzo8EPxizneJeThvYd4MApesA35KLEqY50J55-w4X9t-gclccaQsOn4e_ygU-JoI3ZIT0&usqp=CAU" alt="" width={200} height={200} className='w-full h-full' />
                            </div>
                            <div className="w-[250px] h-[250px]"><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7UgwVoZt9ergVIbMPzBRBIi2o1U9QkQ8IAu6wx_iEYk3AuA4sq0SUTE80KsOc1Z90TZE&usqp=CAU" alt="" width={200} height={200} className='w-full h-full' /></div>
                            <div className="w-[250px] h-[250px]"><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDh4cdoW9YmdomMssze2xndiHE6nD0hmuR1rjNqYmwiOU60LQMeu-xDGl7QQog2QoH_Y&usqp=CAU" alt="" width={200} height={200} className='w-full h-full' /></div>
                            <div className="w-[250px] h-[250px]">
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPeJ7FhhgHZVcpC3-1nZOmo6qOjD6hf0Qir-Z52Z1hgg5eNXTrfIlzUIzpw5g8IOJkeX8&usqp=CAU" alt="" width={200} height={200} className='w-full h-full' />
                            </div>
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