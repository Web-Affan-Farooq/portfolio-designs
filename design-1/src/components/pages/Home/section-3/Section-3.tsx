'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section_3 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  // Clear refs before every render to avoid duplication
  itemsRef.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(itemsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
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
      id="section-3"
      className="w-full py-20 px-6 text-white bg-black"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Ratings</h1>

        <div className="space-y-8">
          {[
            '500+ completed projects',
            '100% client satisfaction',
            'Experienced working in teams',
          ].map((text, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="border-l-4 border-fire pl-6 py-4 bg-opacity-10 hover:bg-white/5 transition-colors duration-300"
            >
              <p className="text-xl font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_3;