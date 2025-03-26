import React from 'react';
import Card from '@/components/Cards/Projects/Card';

const Projects = () => {
    return (
        <div>
            <main>
                <article>
                    <section className="py-[150px] w-auto h-auto text-white" id="project-section"> 
                        <h1 className='text-[3rem] px-[30px] font-bold '>Explore My <span className="text-fire">Projects</span></h1>
                        <br /><br />
                        <>
                        <Card name='Agency Logo Design' shortDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloremque in corrupti quo eos quaerat ea distinctio quas. Dolorem, at repudiandae. Magnam quisquam totam quod impedit quo accusantium ullam repudiandae .' image='/images/logo.png'/>
                        <Card name='Website UI / UX Design' shortDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloremque in corrupti quo eos quaerat ea distinctio quas. Dolorem, at repudiandae. Magnam quisquam totam quod impedit quo accusantium ullam repudiandae .' image='/images/banner.png'/>
                        </>
                    </section>
                </article>
            </main>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Projects;