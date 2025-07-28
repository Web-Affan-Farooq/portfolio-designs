'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { YellowButton } from '../../../common';

gsap.registerPlugin(ScrollTrigger);

const Section_2 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading Animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });

      // Paragraph Content Animation
      gsap.from(contentRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="section-2"
      className="w-full px-6 py-20 text-white bg-black overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-4xl font-bold mb-12"
        >
          About <span className="text-skyPink">me</span>
        </h1>

        <div className="flex flex-wrap justify-center items-start gap-10">
          {/* Text Content */}
          <div
            ref={contentRef}
            className="w-full md:w-3/4 text-left"
          >
            <h2 className="text-3xl font-bold text-skyPink mb-6">John Doe</h2>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-3xl">
              I am a graphics designer based in <strong>Indonesia</strong>, working as a freelance designer,
              providing creative services for both online and offline clients across platforms like
              <strong> Freelancer.com</strong>, <strong>Upwork</strong>, and <strong>Fiverr</strong>.
              <br /><br />
              I specialize in creating visual brand identities, logos, digital illustrations, and other
              compelling design assets. My goal is to bring concepts to life with eye-catching designs that are both modern and meaningful.
              <br /><br />
              With a passion for storytelling through visuals and years of experience, I help businesses and
              individuals express their ideas in ways that captivate their audiences and reflect their values.
            </p>
            <br />
            <YellowButton text='Download CV'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_2;