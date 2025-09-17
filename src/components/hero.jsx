import heroImage from "../assets/projects/suman2.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaMusic } from 'react-icons/fa';
import audioFile from "../assets/Luminary.mp3";

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
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.2);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioSrc = audioFile;

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = volume;
            audio.loop = true;
            
            const playAudio = async () => {
                try {
                    await audio.play();
                    setIsPlaying(true);
                } catch (error) {
                    console.log("Auto-play blocked by browser:", error);
                }
            };

            playAudio();

            const handleLoadedMetadata = () => {
                audio.volume = volume;
                setDuration(audio.duration);
            };

            const handleTimeUpdate = () => {
                setCurrentTime(audio.currentTime);
            };

            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
            audio.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audio.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [volume]);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
            } else {
                audio.play();
                setIsPlaying(true);
            }
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value / 100;
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    const handleProgressChange = (e) => {
        const audio = audioRef.current;
        if (audio) {
            const newTime = (e.target.value / 100) * duration;
            audio.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="pb-4 lg:mb-36 lg:pt-10">
            {/* Music Player - Now at top of hero section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-8 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full p-2 shadow-lg max-w-lg mx-auto"
            >
                <div className="space-y-4">
                    
                        
                    
                    
                    {/* Progress Bar */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={togglePlayPause}
                            className="bg-gradient-to-r from-stone-300 to-stone-600 hover:from-stone-200 hover:to-stone-500 text-black p-2 rounded-full transition-all duration-200 flex-shrink-0"
                        >
                            {isPlaying ? <FaPause className="text-sm" /> : <FaPlay className="text-sm ml-0.5" />}
                        </button>
                            <div className="flex-1 relative flex items-center">
                            {/* Custom gradient track */}
                            <div className="absolute inset-0 h-2 rounded-lg overflow-hidden bg-gray-600">
                                <div 
                                    className="h-full bg-gradient-to-r from-stone-300 to-stone-600 transition-all duration-150"
                                    style={{
                                        width: `${duration ? (currentTime / duration) * 100 : 0}%`
                                    }}
                                />
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={duration ? (currentTime / duration) * 100 : 0}
                                onChange={handleProgressChange}
                                className="w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer relative z-10 slider-custom"
                                style={{
                                    background: 'transparent'
                                }}
                            />
                        </div>
                    </div>

                    {/* Volume Control
                    <div className="flex items-center gap-2">
                        <FaVolumeUp className="text-white text-sm" />
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={volume * 100}
                            onChange={handleVolumeChange}
                            className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                            style={{
                                background: `linear-gradient(to right, #a855f7 0%, #a855f7 ${volume * 100}%, #4b5563 ${volume * 100}%, #4b5563 100%)`
                            }}
                        />
                        <span className="text-xs text-stone-400 w-8">{Math.round(volume * 100)}%</span>
                    </div> */}
                </div>
                <audio ref={audioRef} src={audioSrc} preload="auto" />
            </motion.div>

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
                        <motion.a variants={childVariants} href="https://drive.google.com/file/d/1iFQzaXFzGzI969cATfVulfmJlNISk4CJ/view?usp=sharing" download className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">Download Resume</motion.a>
                    </motion.div>
                </div>
            </div>
            
        </div>
        
    );
};


export default Hero;
