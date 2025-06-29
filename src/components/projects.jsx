import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { PinContainer } from "./ui/3d-pin";
import React from "react";

const Projects = () => {
    return (
        <>
          <div className="pb-4">
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
              className="my-20 text-center text-4xl"
            >
              Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                {PROJECTS.map((project, index) =>(
                    <motion.div
                        key={index}
                        whileInView={{opacity:1, y:0}} 
                        initial={{opacity:0, y: 50}} 
                        transition={{duration:0.8, delay: index * 0.1}}
                        className="h-[25rem] w-full flex items-center justify-center"
                    >
                        <PinContainer
                            title={project.title}
                            href={project.href}
                        >
                            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                    {project.title}
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-slate-500 text-sm line-clamp-3">
                                        {project.description}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-1 mt-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, techIndex) =>(
                                        <span key={techIndex} className="text-xs bg-stone-800 px-2 py-1 text-stone-300 font-medium rounded">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="text-xs text-slate-400">
                                            +{project.technologies.length - 3} more
                                        </span>
                                    )}
                                </div>
                                <div 
                                    className="flex flex-1 w-full rounded-lg mt-auto bg-cover bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: `url(${project.image})`
                                    }}
                                />
                            </div>
                        </PinContainer>
                    </motion.div>
                ))}
            </div>
        </div> 
        </>
    )
}

export default Projects;