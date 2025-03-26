import React from 'react';
import Link from 'next/link';

const Submit = () => {
  return (
    <div>
        <main>
        <article>
            <section className="w-full h-[100vh] flex flex-col flex-wrap justify-center items-center bg-black text-center">
                <h1 className='text-[2rem] text-white text-center'><span className="highlight">Thanks for your response</span></h1>
                <br />
                <p>You will recieve a confimation email for your request via 2 business days</p>
                <br />
                <Link href={'/'}><button type="button" className="btn-1">Go back</button></Link>
            </section>
        </article>
    </main>
    </div>
  )
}

export default Submit