import gpsImage from '../assets/ProjectImages/3D_GPS.png';
import coronaCastImage1 from '../assets/ProjectImages/coronaCast2.png';
import coronaCastImage2 from '../assets/ProjectImages/coronaCast.png';
import cvHelperImage from '../assets/ProjectImages/CVHelper.png';
import detectiveDomImage from '../assets/ProjectImages/detectiveDom.jpg';
import ecoLearnImage from '../assets/ProjectImages/EcoLearnAppImage.png';
import healthAppImage from '../assets/ProjectImages/healthAppImage.png';
import portfolioSiteImage from '../assets/ProjectImages/portfolioSite.png';
import hackinalImage from '../assets/ProjectImages/hackinal.png';

import cppIcon from '../assets/icons/cplusplus.svg';
import csharpIcon from '../assets/icons/csharp.svg';
import cssIcon from '../assets/icons/css.png';
import html5Icon from '../assets/icons/html5.svg';
import javaIcon from '../assets/icons/java.svg';
import jsIcon from '../assets/icons/javascript.svg';
import pythonIcon from '../assets/icons/python.svg';
import reactIcon from '../assets/icons/react.svg';
import reactPngIcon from '../assets/icons/react.png';
import unityIcon from '../assets/icons/unity.svg';

const projectsData = [
  {
    id: 'EcoLearn',
    cardTitle: 'EcoLearn - Carbon Tool',
    cardSkills: 'Python, Django, React, Azure',
    header: 'EcoLearn',
    icons: [
      { src: pythonIcon, alt: 'Python logo' },
      { src: reactPngIcon, alt: 'React logo' },
    ],
    actions: [
      {
        href: 'https://github.com/arjunKa/EcoLearning',
        label: 'GitHub',
        ghost: true,
      },
      { href: 'https://www.ecolearn.ca', label: 'Try it' },
    ],
    paragraphs: [
      'A web app that lets you record your carbon reduction and quantify your impact. This project was used by LSF to help students quantify their impact on sustainability projects. A custom-made REST API was built to call and retrieve all the data needed for the calculations, and the data is based on research on carbon emissions in Canada. The tools used are Django, React, PostgreSQL and Azure for deployment.',
    ],
    images: [{ src: ecoLearnImage, alt: 'EcoLearn app' }],
  },
  {
    id: '3D_GPS',
    cardTitle: '3D GPS Software For EMS vehicles (Intern Project)',
    cardSkills: 'C#, Unity Game Engine, SketchUp',
    header: '3D GPS Software for Emergency Responders',
    icons: [
      { src: csharpIcon, alt: 'C# logo' },
      { src: unityIcon, alt: 'Unity logo' },
    ],
    actions: [
      {
        href: 'https://lassonde.yorku.ca/lassonde-robotics-professor-helps-local-high-school-students',
        label: 'Article',
        ghost: true,
      },
      { href: 'https://www.youtube.com/watch?v=h0Q62fK-7ZQ', label: 'Demo' },
    ],
    paragraphs: [
      'I worked in the VGR (Vision Graphics and Robotics) laboratory at York University to develop a prototype of a 3D GPS software. The software would be used by Emergency Medical Services to better navigate the streets, and also featured a VR component with the ability to use the software in VR. Unity game development software and C# programming language were used. 3D models were built using SketchUp.',
    ],
    extraLinksHeading: 'Other Links:',
    extraLinks: [
      {
        href: 'https://vgrserver.eecs.yorku.ca/~jenkin/papers/2017/icinco2017.pdf',
        label: 'Autonomous Trail Following: Paper on "Autonomous Trail Following"',
      },
      {
        href: 'https://vgr.lab.yorku.ca/students/',
        label: 'Vision Graphics and Robotics student alumni (includes my name)',
      },
    ],
    images: [{ src: gpsImage, alt: '3D GPS street view' }],
  },
  {
    id: 'CVHelper',
    cardTitle: 'Resume Helper App',
    cardSkills: 'Python, JSON',
    header: 'Resume Helper',
    icons: [{ src: pythonIcon, alt: 'Python logo' }],
    actions: [
      {
        href: 'https://github.com/arjunKa/ResumeHelper',
        label: 'GitHub',
        ghost: true,
      },
      {
        href: 'https://akappstorage.blob.core.windows.net/resumehelperapp/1.0/ResumeHelper.msi',
        label: 'Download',
      },
    ],
    paragraphs: [
      'A Python app with an easy to use GUI that allows you to paste a job posting and extract the main points, skills and keywords to highlight in your resume. Users can browse for their resume PDF file, paste the job posting they want to apply for and see how their resume matches up and if there are any gaps or skills not mentioned in the resume. It uses natural language processing to preprocess the text before it is analyzed. Topic modeling is then used to determine main features of the text, as well as extracting the languages and tools mentioned in the posting. The app also allows your job application files to be consistently labeled based on time/date and include details such as the company name so that all your files can be easily organized.',
    ],
    images: [{ src: cvHelperImage, alt: 'Python resume app' }],
  },
  {
    id: 'HealthApp',
    cardTitle: 'C++ Health & Fitness App',
    cardSkills: 'C++, JSON',
    header: 'C++ Health & Fitness App',
    icons: [{ src: cppIcon, alt: 'C++ logo' }],
    actions: [{ href: 'https://github.com/arjunKa/HealthApp', label: 'GitHub' }],
    paragraphs: [
      'A C++ console app with a saving feature to allow users to store their biometric data, calorie and fitness progress. The user data is then used to form simple calculations and predictions for the user such as their BMI and more complicated ones such as estimated calorie intake to help in weight gain or weight loss. JSON is used to save and retrieve user data and resume progress such as calorie tracking across days. C++ is ideal for JSON data retrieval and permits control over the storage of the user data.',
    ],
    images: [{ src: healthAppImage, alt: 'Health app' }],
  },
  {
    id: 'CoronaCast',
    cardTitle: 'Covid Risk Assessment Tool',
    cardSkills: 'HTML, JavaScript, API implementation',
    header: 'CoronaCast',
    icons: [
      { src: html5Icon, alt: 'HTML5 logo' },
      { src: cssIcon, alt: 'CSS logo' },
      { src: jsIcon, alt: 'JavaScript logo' },
    ],
    actions: [
      { href: 'https://github.com/Ru-Hacks/Coronacast', label: 'GitHub', ghost: true },
      { href: 'https://ru-hacks.github.io/Coronacast/index.html', label: 'Try It' },
    ],
    paragraphs: [
      "Made during the RUhacks Hackathon, the purpose of this project is to provide the user an easy to understand determination of the risk of COVID-19 in their area. This project showcases the use of API implementation and an HTML + CSS frontend. We take the user's location and use the Google Maps API to determine the traffic congestion in the area. We also take in data such as their age, date of birth, and any immune deficiencies. Finally, WeatherAPI is used to factor in elements such as humidity and wind to determine the overall risk factor.",
    ],
    images: [
      { src: coronaCastImage1, alt: 'CoronaCast screenshot 1' },
      { src: coronaCastImage2, alt: 'CoronaCast screenshot 2' },
    ],
  },
  // {
  //   id: 'Hackinal',
  //   cardTitle: 'Hackinal',
  //   cardSkills: 'Web Development, Javascript, React',
  //   header: 'Hackinal',
  //   actions: [{ href: 'http://hackinal.com/', label: 'Visit Site' }],
  //   paragraphs: [
  //     'Hackinal is a browser game inspired by the Fallout hacking mini-game, focused on pattern recognition and puzzle solving to find the correct password to unlock the terminal. It includes multiple difficulty levels, mobile support, and a custom sandbox mode for practice. The procedural design keeps each session fresh and highly replayable.',
  //   ],
  //   images: [
  //     { src: hackinalImage, alt: 'Hackinal game', className: 'portfolio__project-image--tall' },
  //   ],
  // },
  {
    id: 'PortfolioSite',
    cardTitle: 'Portfolio Site',
    cardSkills: 'React.js, CSS, HTML, JavaScript',
    header: 'React.js Portfolio Site',
    icons: [
      { src: reactIcon, alt: 'React logo' },
      { src: jsIcon, alt: 'JavaScript logo' },
      { src: html5Icon, alt: 'HTML5 logo' },
      { src: cssIcon, alt: 'CSS logo' },
    ],
    actions: [
      {
        href: 'https://github.com/arjunKa/React_Portfolio_website',
        label: 'GitHub',
      },
    ],
    paragraphs: [
      'This section describes this portfolio site! It was built using React.js for the front-end and uses a clean and simple look while also having multiple nice-to-have features for easy user experience such as a responsive design which adapts to screen dimensions, meaning that it is usable on mobile. This portfolio website evolves and grows constantly as more projects and features are added; there will be much more to add.',
    ],
    images: [{ src: portfolioSiteImage, alt: 'Portfolio site' }],
  },
  {
    id: 'DetectiveDom',
    cardTitle: 'Detective Dom (Game Demo)',
    cardSkills: 'Java, JSON + XML',
    header: 'Game: Detective Dom (Java)',
    icons: [{ src: javaIcon, alt: 'Java logo' }],
    actions: [{ href: 'https://www.greenfoot.org/scenarios/25657', label: 'Try It' }],
    paragraphs: [
      'This is a game demo using Java and the Greenfoot game engine software to demonstrate a branching path style of game. It utilizes JSON to store all these paths in the game and the dialogue options. In the demo, you play as Detective Dom and must investigate a case through the use of interrogation, clue-finding and looking for correlations during your investigation. You collect evidence, more questions and more suspects until you can find an answer.',
    ],
    images: [{ src: detectiveDomImage, alt: 'Detective Dom demo' }],
  },
];

export default projectsData;
