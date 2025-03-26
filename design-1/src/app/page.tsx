import Section_1 from '@/components/section-1/Section-1';
import Section_2 from '@/components/section-2/Section-2';
import Section_3 from '@/components/section-3/Section-3';
import Section_4 from '@/components/section-4/Section-4';
import React from 'react';

const Home = () => {
  return (
      <main>
        <article>
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        </article>
      </main>
  )
}

export default Home;