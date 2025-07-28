import React from 'react';
import {YellowButton} from '@/components/common';

const Contact = () => {
    return (
        <div className="py-20 bg-black overflow-x-hidden">
            <main>
                <article>
                    <section className="max-w-3xl mx-auto px-6">
                        <h1 className="text-4xl font-bold text-center mb-12">
                            Contact <span className="text-fire">me</span>
                        </h1>

                        <form action="/submit" className="space-y-10">
                            {/* Name Field */}
                            <fieldset className="border-none">
                                <legend className="rounded-xl text-black bg-sharp-yellow text-[17px] font-bold px-4 py-1">
                                    Your name
                                </legend>
                                <div className="mt-4">
                                    <input
                                        type="text"
                                        name="clientName"
                                        id="client-name"
                                        required
                                        placeholder="Enter your name"
                                        className="w-full text-white max-w-md px-5 py-4 bg-transparent border-b border-fire text-fire placeholder:text-gray-400 focus:outline-none focus:border-sharp-yellow transition-all"
                                    />
                                </div>
                            </fieldset>

                            {/* Email Field */}
                            <fieldset className="border-none">
                                <legend className="rounded-xl text-black bg-sharp-yellow text-[17px] font-bold px-4 py-1">
                                    Your email
                                </legend>
                                <div className="mt-4">
                                    <input
                                        type="email"
                                        name="email"
                                        id="client-email"
                                        required
                                        placeholder="Enter your email"
                                        className="w-full text-white max-w-md px-5 py-4 bg-transparent border-b border-fire text-fire placeholder:text-gray-400 focus:outline-none focus:border-sharp-yellow transition-all"
                                    />
                                </div>
                            </fieldset>

                            {/* Project Description Field */}
                            <fieldset className="border-none">
                                <legend className="rounded-xl text-black bg-sharp-yellow text-[17px] font-bold px-4 py-1">
                                    Project Description
                                </legend>
                                <div className="mt-4">
                                    <textarea
                                        name="projectDescription"
                                        id="project-description"
                                        required
                                        placeholder="Describe your project"
                                        className="w-full text-white max-w-md px-5 py-4 h-40 bg-transparent border-b border-fire text-fire placeholder:text-gray-400 resize-none focus:outline-none focus:border-sharp-yellow transition-all"
                                    ></textarea>
                                </div>
                            </fieldset>

                            {/* Submit Button */}
                            <div className="flex justify-center ">
                                <YellowButton type='submit' text='Submit'/>
                                {/* <button type="submit" className={`p-[10px] rounded-[10px] bg-sharp-yellow text-black font-bold text-[1rem] m-auto`}>Submit</button>               */}
                                 </div>
                        </form>
                    </section>
                </article>
            </main>
        </div>
    );
};

export default Contact;
