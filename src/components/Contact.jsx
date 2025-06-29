import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div id="contact" className="pb-24">
      <motion.h2 
        whileInView={{opacity:1, y:0}} 
        initial={{opacity:1, y: -100}} 
        transition={{duration:0.5}} 
        className='my-20 text-center text-4xl'>Get in Touch</motion.h2>
      <div className="flex flex-col items-center justify-center gap-4">
        <motion.div
          whileInView={{opacity:1, x:0}} 
          initial={{opacity:1, x: -100}} 
          transition={{duration:1}} 
        >
          <FaLinkedin className="text-5xl text-blue-500" />
        </motion.div>
        <motion.div
          whileInView={{opacity:1, x:0}} 
          initial={{opacity:1, x: 100}} 
          transition={{duration:1}} 
        >
          <p className="text-2xl underline"><a href="mailto:office.snj.2005@gmail.com">office.snj.2005@gmail.com</a></p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
