import React from 'react';
import Image from 'next/image';

const Section_1 = () => {
    return (
        <div>
            <section className="section-1 w-auto py-[170px] px-[20px] flex flex-row flex-wrap text-white justify-center gap-[50px] items-center max-[830px]:gap-[20px] max-[800px]:flex-col-reverse" id="section-1">
                <div className="w-[40%] max-[800px]:w-[80vw] p-[20px]">
                    <h1 className='font-bold my-[10px] leading-[70px] text-[3.3rem] text-white m-0'>Visual and stunning designs</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi itaque aliquid mollitia cuslpa
                        suscipit doloremque eos deserunt iusto. Modi aliquam repellat maiores nisi blanditiis quos
                        eum dolorum temporibus quis veniam!</p>
                        <br />
                    <button type="button" className="btn-1">Hire me</button>
                </div>
                <Image src="/images/banner.png" alt="Hero image box" width={400} height={400} className='w-[400px] h-[400px] object-cover relative'/>
            </section>
        </div>
    )
}

export default Section_1;