import React from 'react';
import {ProjectCard} from '@/components/pages';
import { projects } from '@/constants/projects';

const Projects = () => {
    return (
        <div>
            <main>
                <article>
                    <section className="py-[150px] w-auto h-auto text-white" id="project-section">
                        <h1 className='text-[3rem] px-[30px] font-bold '>Explore My <span className="text-fire">Projects</span></h1>
                        <br /><br />
                        <div className='flex flex-col gap-[20px]'>
                            {
                                projects.map((project, idx) => (
                                    <ProjectCard name={project.name} shortDescription={project.description} image={project.image} key={idx} />
                                ))
                            }
                        </div>
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