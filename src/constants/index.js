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
    pagoda,
    wemedia,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "Software Developer ",
      company_name: "WeMedia",
      icon: wemedia,
      iconBg: "#383E56",
      date: "October 2020 - May 2022",
      points: [
        "Led React and PHP development projects, resulting in a 30% increase in website traffic and a 20% boost in user engagement.",
        "Designed responsive front-end systems using HTML, CSS, Bootstrap, and React, achieving a 50% reduction in page load times and enhancing user experience.",
        "Integrated APIs to enhance website functionalities, resulting in a 15% increase in user interactions and improved client satisfaction.",
        "Employed Agile methodologies and best practices to optimize website performance, reducing error rates by 40%.",
        "Utilized JS, React, Redux, and SQL for various development tasks, resulting in a 25% improvement in development efficiency."
      ],
    },
    {
      title: "Software Developer",
      company_name: "Pagoda Labs",
      icon: pagoda,
      iconBg: "#E6DEDD",
      date: "October 2019 - September 2020",
      points: [
        "Assisted in PHP projects, contributing to the development of four microservices for the main product. These services served an average of 100 requests per second, significantly improving product functionality.",
        "Designed API endpoint to send and receive data from PostgreSQL database.",
        "Collaborated in an Agile environment, achieving a 20% reduction in project delivery time and an increase in team productivity.",
        "Gained hands-on experience in coding and backend development, leading to a 15% improvement in code quality and reduced bug rates.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Hotel Management System",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "JavaScripts",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/autsav/hotel-management-system",
    },
    {
      name: "E Commerce",
      description:
        "A dynamic web application designed to empower users with seamless product exploration, effortless cart management, and a streamlined checkout experience. Unleash the convenience of intuitive product searches, swift additions to your cart, and a hassle-free checkout process, all at your fingertips.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/autsav/ecommerce",
    },
    {
      name: "Instagram Clone",
      description:
        "Embark on a visual journey with our comprehensive web application, where users can effortlessly share captivating photos and engage in a vibrant community. Experience the joy of expressing appreciation through likes and fostering meaningful conversations by leaving thoughtful comments on others' posts. Immerse yourself in a platform that seamlessly connects individuals through the art of visual storytelling ",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "php ",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/autsav/InstaClone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };