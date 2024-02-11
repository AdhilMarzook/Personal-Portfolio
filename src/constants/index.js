import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
   // sliit,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mobile Application Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Higher National Diploma in IT",
      company_name: "Sri Lankan Institute of Information Technology Academy (SLIITA)",
      icon: html,
      iconBg: "#383E56",
      date: "January 2019 - June 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "BSc (Hons) Computer Science and Software Engineering",
      company_name: "University of Bedfordshire",
      icon: css,
      iconBg: "#E6DEDD",
      date: "June 2021 - June 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Junior Web Developer",
      company_name: "EffiSoft Solutions (PVT) Limited",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Aug 2022 - Aug 2023",
      points: [
        "Developed and maintained dynamic web applications for Effisoft Solutions (PVT)Limited using MERN stack technologies (MongoDB, Express.js, React,Node.js) for a year.",
        "Enhanced user experience and website performance by collaborating with designers and implementing responsive design principles.",
        "Successfully contributed to several projects, including Developing several front-end components using React.",
              ],
    },
    {
      title: "MSc in Computer Science",
      company_name: "Staffordshire University",
      icon: nodejs,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Throughout his tenure, Adhil Marzook has played an integral role in numerous successful projects under our organisation banner.",
      name: "Malinda Warnasuriya",
      designation: "Proprietor, Lead Developer",
      company: "EffiSoft Solutions (PVT) Limited",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their colleagues' success like Adhil does.",
      name: "Temp2",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Temp3",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Figma-Clone",
      description:
        "Figma clone with real-world features like live collaboration through cursor chat, comments, reactions, and drawing designs (shapes, image upload) on the canvas using Fabric.js and Liveblocks.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NextJS",
          color: "green-text-gradient",
        },
        {
          name: "LiveBlocks",
          color: "pink-text-gradient",
        },
        {
          name: "FabricJS",
          color: "blue-text-gradient",
        },
      ],
      image: github,
      source_code_link: "https://github.com/AdhilMarzook/FigmaClone.git",
    },
    {
      name: "Tailor-Made SL",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: github,
      source_code_link: "https://github.com/AdhilMarzook/Tailer-Made-SL.git",
    },
    {
      name: "Trello-Clone 2.0",
      description:
        "TRELLO 2.0 with REACT! (Next.js 13.4, GPT-4, Drag & Drop, Zustand, Appwrite Cloud, TS)",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "GPT-4",
          color: "green-text-gradient",
        },
        {
          name: "Zustand",
          color: "pink-text-gradient",
        },
        {
          name: "Appwrite Cloud",
          color: "pink-text-gradient",
        },
      ],
      image: github,
      source_code_link: "https://github.com/AdhilMarzook/Trello-appwrite-clone.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };