import img1 from '../assets/herbal.jpg';
import img2 from '../assets/gobetween.jpg';
// import img3 from '../assets/Tourist-destinations.jpeg';
// import img4 from '../assets/ED-Book.jpeg';
// import img5 from '../assets/Baby-Care.png';
import img6 from '../assets/python internship.png';
import img7 from '../assets/clound computing.png';
import img8 from '../assets/python programming.png';
import img9 from '../assets/jsp+android.png';

// listing my skills here
const skills = [
    'html', 'css', 'javascript', 'mysql', 'php', 'python', 'django', 'androidstudio', 'react', 'azure',
];

// Listing my career goals here
const timelineData = [
    {
      year: "05/2024",
      title: "Bachelor of Computer Applications",
      description: "Completed my degree from MG-University.",
    },
    {
      year: "04/2024",
      title: "Python Full Stack Developer Intern",
      description: "Completed 3 month Internship from Inmakes Infotech.",
    },
    {
      year: "04/2024",
      title: "JSP + Android",
      description: "Completed a project using JSP + Android.",
    },
    {
      year: "05/2023",
      title: "Python Programming",
      description: "Completed course from GITH GLOBAL INDIA TECHNO HUB.",
    },
    {
      year: "04/2022",
      title: "CLOUD COMPUTING & CYBER SECURITY",
      description: "Completed course from GITH GLOBAL INDIA TECHNO HUB.",
    },
    {
      year: "03/2021",
      title: "HIGHER SECONDARY EDUCATION",
      description: "Completed my secondary education from EBENEZER HIGHER SECONDARY SCHOOL.",
    },
    {
      year: "03/2019",
      title: "HIGH SCHOOL EDUCATION",
      description: "Completed my high school education from Syrian Christian Seminary Higher Secondary School.",
    },
  ];

// Listing my Projects here
const projects = [
    {
        title: 'E-HerbalCare',
        sub: 'PHP',
        description: 'The project promotes holistic wellness with natural remedies, online appointments, and easy herbal shopping. It focuses on minimal side effects, guiding users to beneficial herbs and fruits for tailored health needs and sustainable healthcare practices.',
        image: img1,
        link: '',
    },
    {
        title: 'Go-Between',
        sub: 'JSP + Android',
        description: 'This project aims to modernize logistics using digital tools, optimizing processes for efficiency and eco-friendliness. By focusing on inventory, routes, and real-time tracking, we enhance customer experiences and maximize resource utilization.',
        image: img2,
        link: '',
    },
    // {
    //     title: 'Tourist Destinations',
    //     sub: 'python Django, REST framework',
    //     description: 'A web application that helps users discover popular tourist destinations.',
    //     image: img3,
    //     link: '',
    // },
    // {
    //     title: 'ED Book',
    //     sub: 'JSP + Android',
    //     description: 'ED-Book is a web application designed to facilitate transparent communication within educational institutions and their communities. It provides real-time updates and notifications, centralizing information to enrich the educational experience and foster a more connected learning environment.',
    //     image: img4,
    //     link: '',
    // },
    // {
    //     title: 'Baby Care',
    //     sub: 'PHP',
    //     description: 'Baby Care is a web application is designed to help parents manage and monitor baby care routines efficiently. The project leverages technologies like PHP, HTML, CSS, and MySQL to provide a comprehensive and user-friendly platform.',
    //     image: img5,
    //     link: '',
    // },
];

// Listing my Achievements here
const achievements = [
    { img: img6, details: 'Completed 3 month Internship from INMAKES INFOTECH.' },
    { img: img7, details: 'Completed Cloud computing and Cyber Security course from GLOBAL INDIA TECHNO HUB' },
    { img: img8, details: 'Completed Python Programming course from GLOBAL INDIA TECHNO HUB' },
    { img: img9, details: 'Completed JSP + ANDROID course from PROGRESSIVE SOFTWARE SOLUTIONS AND TRAINING' },
  ];

export { skills, timelineData, projects, achievements };
