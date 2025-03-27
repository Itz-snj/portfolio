import project1 from "../assets/projects/Old-Porfolio.jpg";
import project2 from "../assets/projects/Proejct1.jpg";
import project3 from "../assets/projects/Invasion.jpg";
import project4 from "../assets/projects/p4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With nearlly an Year of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, PostGresql, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With nearlly an Year of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, PostGresql, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;



export const PROJECTS = [
  {
    title: "Portfolio Website {OLD}",
    image: project1,
    href: "https://suman-jain-portfolio.vercel.app/",
    height: 250,
    width: 250,
    description:
      "My previous Portfolio Website, which is designed and developed myself using the basic web development technologies I learnt back then.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "BackEnd Next Js Project {Ask Me Anything as Anonymous kind of application}",
    image: project2,
    href: "https://github.com/Itz-snj/AMA-backend.git",
    height: 250,
    width: 250,
    description:
      "A Simple Backend appplication built on next js and took on to the production level using vercel, learnt a lot many things about typescript and API handling",
    technologies: ["Next Js", "Tailwind CSS", "TypeScript" , "Many more Js libaries"],
  },
  {
    title: "Invasion",
    image: project3,
    href: "https://invasion-ten.vercel.app/games",
    height: 250,
    width: 250,
    description:
      "A gaming event landing page, build on React.js with Tailwind CSS",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    title: "SIH-2024",
    image: project4,
    href: "https://github.com/SumanJain2005/SIHTeamBuzz",
    height: 250,
    width: 250,
    description:
      "Masking Algorithm based on providing a detailed report on the differences of 2 road-construction images",
    technologies: ["Python" , "OpenCV", "Flask"],
  },
];

