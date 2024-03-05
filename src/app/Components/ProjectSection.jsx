"use client"
import React,{useState,useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import {motion,useInView} from 'framer-motion';
const projectsData=[
    {
        id:1,
        title:"React Portfolio Website",
        description:"A portfolio website made with React Js and css. It has animation and many other features such as sending email for queries",
        image:"/images/projects/1.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/aniketsham/Portfolio_Website-AniketSharma",
        previewUrl:"https://aniketsharma-80d4f8.netlify.app",
    },
    {
        id:2,
        title:"Stack Overflow Clone",
        description:"A Stack Overflow Clone based upon React JS frontend and Node JS backend. Based upon the offical stack overflow website.",
        image:"/images/projects/2.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/aniketsham/Stack_Overflow-Clone",
        previewUrl:"https://stack-overflow-clone-aniket.netlify.app",
    },
    {
        id:3,
        title:"Student Guide",
        description:"Student Guide is a website which will help students to get through their decision making process in academic life.",
        image:"/images/projects/3.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/aniketsham/student-Guide",
        previewUrl:"https://the-student-guide.github.io/Thestudentguide",        
    },
    {
        id:4,
        title:"React Portfolio Website - 2",
        description:" A react portfolio made to for show casing my skills in React Js and SCSS.",
        image:"/images/projects/4.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/aniketsham/Protfolio_Website_Aniket_Sharma-2",
        previewUrl:"https://aniketsharma-portfoliowebsite-v2.netlify.app",
    },
    {
        id:5,
        title:"Mr. Ecommerce",
        description:"E commerce website made based on crypto currency (ACE coins).Used Flask for Backend Development ofweb application and MySql for database.",
        image:"/images/projects/5.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/aniketsham/Mr.Ecommerce",
        previewUrl:"http://anikets240802.pythonanywhere.com",
    },
    {
      id:6,
      title:"Next-amazon-app",
      description:"A E commerce Web Application which uses Nextjs framework to display more dynamic and animated front end and NodeJs in the backend. This Web app uses MongoDB as a database.",
      image:"/images/projects/6.png",
      tag:["All","Web"],
      gitUrl:"https://github.com/aniketsham/Mr.Ecommerce",
      previewUrl:"https://next-amazon-app-seven.vercel.app/",
    }
];
const ProjectSection = () => {
    const [tag,setTag]=useState("All");
    const ref=useRef(null);
    const isInView=useInView(ref,{once:true});
    const handleTagChange=(newTag)=>{
        setTag(newTag);
    }

    const filteredProjects=projectsData.filter((project)=>
        project.tag.includes(tag)
    );

    const cardVariants={
        intial:{y:50,opacity:0},
        animate:{y:0,opacity:1}
    };
  return (
    <div >
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag==="All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag==="Web"} />

        </div>

      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        { filteredProjects.map((project,index)=> (
        <motion.li key={index} variants={cardVariants} initial="intial" animate={isInView?"animate":"intial"} transition={{duration:0.3,delay:index*0.2}} >
        <ProjectCard key={project.id}
         title={project.title}
         description={project.description}
           imgUrl={project.image}
           gitUrl={project.gitUrl}
           previewUrl={project.previewUrl}
           tags={project.tag}/>
        </motion.li>
           ))
        }
      </ul>
    </div>
  )
}

export default ProjectSection
