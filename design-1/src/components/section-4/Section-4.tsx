import React from 'react';
import Allumini_card from '../Cards/Home/Section-4/allumini-card';
import "./section-4.css";

const Section_4 = () => {
    return (
        <div>
            <section id="section-4" className="w-auto text-white p-[30px] bg-transparent">
                <h1 className="text-[3rem] font-bold text-center text-white">Our alumini</h1>
                <div className="reviews-container w-full h-auto bg-transparent overflow-x-auto overflow-y-hidden whitespace-nowrap px-[10px] py-[50px]">
                    <Allumini_card customer_name='Amanda H., Marketing Manager' review='Working with this designer has been an absolute pleasure. Their creativity and attention to detail have taken our brand visuals to the next level. Every project has been delivered on time and beyond our expectations' />
                    <Allumini_card customer_name='Amanda H., Marketing Manager' review='Working with this designer has been an absolute pleasure. Their creativity and attention to detail have taken our brand visuals to the next level. Every project has been delivered on time and beyond our expectations' />
                    <Allumini_card customer_name='Amanda H., Marketing Manager' review='Working with this designer has been an absolute pleasure. Their creativity and attention to detail have taken our brand visuals to the next level. Every project has been delivered on time and beyond our expectations' />
                    <Allumini_card customer_name='Amanda H., Marketing Manager' review='Working with this designer has been an absolute pleasure. Their creativity and attention to detail have taken our brand visuals to the next level. Every project has been delivered on time and beyond our expectations' />
                    <Allumini_card customer_name='Amanda H., Marketing Manager' review='Working with this designer has been an absolute pleasure. Their creativity and attention to detail have taken our brand visuals to the next level. Every project has been delivered on time and beyond our expectations' />
                    <Allumini_card customer_name='Amanda H., Marketing Manager' review='Working with this designer has been an absolute pleasure. Their creativity and attention to detail have taken our brand visuals to the next level. Every project has been delivered on time and beyond our expectations' />
                </div>
            </section>
        </div>
    )
}

export default Section_4;
