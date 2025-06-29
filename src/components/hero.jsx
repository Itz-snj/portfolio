import heroImage from "../assets/projects/suman2.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const containerVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        },
    }
};

const childVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    }
};

const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36 lg:pt-20">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    {/* Mobile: Regular image without 3D effects */}
                    <div className="block lg:hidden">
                        <img
                            src={heroImage}
                            alt="Hero Image"
                            className="border border-stone-900 rounded-3xl h-[400px] w-full object-cover"
                        />
                    </div>
                    
                    {/* Desktop: 3D Card effect */}
                    <div className="hidden lg:block">
                        <CardContainer className="inter-var" containerClassName="py-0">
                            <CardBody className="bg-transparent relative group/card w-auto sm:w-[30rem] h-auto rounded-xl">
                                <CardItem translateZ="100" className="w-full">
                                    <img
                                        src={heroImage}
                                        alt="Hero Image"
                                        className="border border-stone-900 rounded-3xl h-[650px] w-full object-cover group-hover/card:shadow-xl"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col items-center pt-10 lg:items-start "
                    >
                        <motion.h2 variants={childVariants} className="pb-2 text-4xl tracking-tighter lg:text-8xl"> Suman Jain</motion.h2>
                        <motion.span variants={childVariants} className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-3xl font-bold text-transparent">Software Developer</motion.span>
                        <motion.p variants={childVariants} className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">{HERO_CONTENT}</motion.p>
                        <motion.a variants={childVariants} href="https://drive.google.com/file/d/1ZQjTprQbGZC7bUFjpgUXp-r6_1_UJA0n/view?usp=sharing" download className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">Download Resume</motion.a>
                    </motion.div>
                </div>
            </div>
            
        </div>
        
    );
};


export default Hero;