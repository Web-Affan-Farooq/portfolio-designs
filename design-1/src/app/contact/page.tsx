import React from 'react';
import Yellow_button from '@/components/Buttons/Yellow_button';

const Contact = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <main>
                <article>
                    <section className="text-left p-[50px] h-auto overflow-x-hidden">
                        <h1 className='text-white text-[3rem] font-bold text-center'>Contact <span className="text-fire">me</span></h1>
                        <form action={"/submit"}>
                            <fieldset className='border-none'>
                                <legend className='rounded-[20px] bg-[var(--yellow-color)] text-[17px] font-bold px-[15px] py-[5px]'>Your name</legend>
                                <br />

                                <label htmlFor="Your name">
                                    <input type="text" name="clientName" id="client-name" required placeholder="Enter your name" className='px-[20px] py-[15px] w-[300px] text-fire bg-transparent border-b-[1px] border-solid border-fire'/>
                                </label>
                            </fieldset>
                            <br /><br />
                            <fieldset className='border-none'>
                                <legend className='rounded-[20px] bg-[var(--yellow-color)] text-[17px] font-bold px-[15px] py-[5px]'>Your email</legend>
                                <br />
                                <label htmlFor="Your email">
                                    <input type="email" name="email" id="client-email" required placeholder="Enter your email" className='px-[20px] py-[15px] w-[300px] text-fire bg-transparent border-b-[1px] border-solid border-fire'/>
                                </label>
                            </fieldset>
                            <br /><br />
                            <fieldset className='border-none'>
                                <legend className='rounded-[20px] bg-[var(--yellow-color)] text-[17px] font-bold px-[15px] py-[5px]'>Description</legend>
                                <br />
                                <label htmlFor="Enter description of the project">
                                    <textarea name="projectDescription" id="project-description" required placeholder="Enter description of your project" className='px-[20px] py-[15px] w-[300px] h-[200px] text-fire bg-transparent border-b-[1px] border-solid border-fire'></textarea>
                                </label>
                            </fieldset>
                            <br /><br />
                            <Yellow_button type="submit" text='submit'/>
                        </form>
                    </section>
                </article>
            </main>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Contact;