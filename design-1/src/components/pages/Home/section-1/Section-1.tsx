'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { YellowButton } from '../../../common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section_1 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text Animation
      gsap.from(textRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Image Animation
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="section-1 w-auto py-[170px] px-[20px] flex flex-row flex-wrap text-white justify-center gap-[50px] items-center max-[830px]:gap-[20px] max-[800px]:flex-col-reverse"
        id="section-1"
      >
        <div
          ref={textRef}
          className="w-[40%] max-[800px]:w-[80vw] p-[20px]"
        >
          <h1 className="font-bold my-[10px] leading-[70px] text-[3.3rem] text-white m-0">
            Visual and stunning designs
          </h1>
          <p className="text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi itaque aliquid mollitia culpa
            suscipit doloremque eos deserunt iusto. Modi aliquam repellat maiores nisi blanditiis quos
            eum dolorum temporibus quis veniam!
          </p>
          <br />
          <YellowButton type="button" text="Hire me" />
        </div>

        <Image
          ref={imageRef}
          src="/images/banner.png"
          alt="Hero image box"
          width={400}
          height={400}
          className="w-[400px] h-[400px] object-cover relative"
        />
      </section>
    </div>
  );
};

export default Section_1;