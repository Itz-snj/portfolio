import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';

const TimelineComponent = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      <motion.h2 
        whileInView={{opacity:1, y:0}} 
        initial={{opacity:0, y: -100}} 
        transition={{duration:0.5}} 
        className='my-20 text-center text-4xl'
      >
        Experience and Achievements
      </motion.h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          date="2024 - March"
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<WorkIcon />}
        >
         <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <h3 className="vertical-timeline-element-title">Devwrap 2024 (Best Beginner Team)</h3>
            <h4 className="vertical-timeline-element-subtitle">SC-ECE AOT</h4>
            <p>
              The first ever Web Dev offline hackathon experience, and we won the best beginner team.
            </p>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 - April"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<WorkIcon />}
        >
            <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
          <h3 className="vertical-timeline-element-title">UXopia 2024 (Winners)</h3>
          <h4 className="vertical-timeline-element-subtitle">SC-CSBS AOT</h4>
          <p>
            The first ever UI/UX offline hackathon experience, the rare it sounds, the more it was a great experience.
          </p>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 - April"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<WorkIcon />}
        >
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
          <h3 className="vertical-timeline-element-title">ClashDevs</h3>
          <h4 className="vertical-timeline-element-subtitle">TechFiesta AOT</h4>
          <p>
            The first ever inter college hackathon experience, majorly focused on backend Web dev and JS based Problem Solving.
          </p>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 - May"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<WorkIcon />}
        >
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
          <h3 className="vertical-timeline-element-title">Avenir '24</h3>
          <h4 className="vertical-timeline-element-subtitle">Phoenix, the official tech club of NSEC</h4>
          <p>
            Our second inter college hackathon, in a different college, we qualified for the finals and stood 5th.
          </p>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024 - July"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
            <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
          <h3 className="vertical-timeline-element-title">Bharatiya Antriksh Hackathon</h3>
          <h4 className="vertical-timeline-element-subtitle">ISRO</h4>
          <p>
            A grand Scale AI based hackathon, and my first ver proper AI based online hackathon, unfortunately we didn't qualify for the finals.
          </p>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2024 - Present"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
            <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
          <h3 className="vertical-timeline-element-title">Tech Team Member</h3>
          <h4 className="vertical-timeline-element-subtitle">IEEE SB AOT</h4>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2024 - March 2025"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
          <h3 className="vertical-timeline-element-title">Tech Team Member</h3>
        <h4 className="vertical-timeline-element-subtitle">SC CSBS AOT</h4>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024 - August "
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
          <h3 className="vertical-timeline-element-title">Hack4Change</h3>
          <h4 className="vertical-timeline-element-subtitle">Nudge institute with collaboration from Google</h4>
          <p>
            It was also an online hackathon, and we qualified for the semifinals.
          </p>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2024 - Present"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          > 
          <h3 className="vertical-timeline-element-title">Tech Team Member</h3>
          <h4 className="vertical-timeline-element-subtitle">Microsoft Learn Student Ambassador(Cypher)</h4>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024 - September"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
          <h3 className="vertical-timeline-element-title">SIH 2024</h3>
          <h4 className="vertical-timeline-element-subtitle">Government of India</h4>
          <p>
            The biggest ongoing hackathon in India, and we are qualified in the college level.
          </p>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2024 - Present"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          > 
          <h3 className="vertical-timeline-element-title">Tech Team Member</h3>
          <h4 className="vertical-timeline-element-subtitle">Resourcio Community</h4>
          </motion.div>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024 - November"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
          <h3 className="vertical-timeline-element-title">Hack-n-Pitch</h3>
          <h4 className="vertical-timeline-element-subtitle">E-cell Jadavpur University</h4>
          <p>
            An offline 12 hrs Hackathon by Jadavpur University's E-cell, it was the final round of the hackathon.
          </p>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2024 - April 2025"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          > 
          <h3 className="vertical-timeline-element-title">Apertre Core Team Member</h3>
          <h4 className="vertical-timeline-element-subtitle">Resourcio Community</h4>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2025 March - 2025 April"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
          <h3 className="vertical-timeline-element-title">Apertre 2.0</h3>
          <h4 className="vertical-timeline-element-subtitle">Project Admin</h4>
          <p>
            Managing two of own and three different repositories and also working along side the team contrbuting in website building.
          </p>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2024 - April 2025"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          > 
          <h3 className="vertical-timeline-element-title">Techfiest 25</h3>
          <h4 className="vertical-timeline-element-subtitle">Academy of Technology</h4>
          <p>
            Part of the Techfiest 25, a tech fest organised by the Academy of Technology.
          </p>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2025 - Present"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          > 
          <h3 className="vertical-timeline-element-title">Marketting + Frontend</h3>
          <h4 className="vertical-timeline-element-subtitle">Resourcio pvt ltd</h4>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="January 2025 - Present"
          contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.8)' }}
          iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
            <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
          <h3 className="vertical-timeline-element-title">Freelancer</h3>
          <h4 className="vertical-timeline-element-subtitle">Tara Solutions</h4>
          </motion.div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
      
    </motion.div>

    </>
        

  );
}

export default TimelineComponent;