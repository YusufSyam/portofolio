import { ICProjects } from "./interfaces";

import ProjectImage12 from "./../../assets/images/pj_img_12.png";
import ProjectImage14 from "./../../assets/images/pj_img_14.jpg";
import ProjectImage1 from "./../../assets/images/pj_img_1_2.png";
import ProjectImage2 from "./../../assets/images/pj_img_2.png";
import ProjectImage3 from "./../../assets/images/pj_img_3.png";
import ProjectImage4 from "./../../assets/images/pj_img_4.png";
import ProjectImage5 from "./../../assets/images/pj_img_5.png";
import ProjectImage6 from "./../../assets/images/pj_img_6.png";
import ProjectImage8 from "./../../assets/images/pj_img_8.png";
import ProjectImage9 from "./../../assets/images/pj_img_9.png";


const CProjectsImageArray = [
    ProjectImage1,
    ProjectImage2,
    ProjectImage3,
    ProjectImage4,
    ProjectImage5,
    ProjectImage6,
    null,
    ProjectImage8,
    ProjectImage9,
    null,
    null,
    ProjectImage12,
    null,
    ProjectImage14,
    null,
]

export const CProjects : Array<ICProjects> = [
    {
        idx: 0,
        name: "PlateWatch",
        projectType: "machine learning",
        techs: ["python","pytorch","pandas","typescript","reactjs","tailwind"],
        githubLink: "https://github.com/YusufSyam/Odd_Even_Vehicle_Restriction_Policy-Back-End",
        articleLink: "#",
        summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro temporibus necessitatibus eos, quam doloribus odit voluptate quidem rerum illo molestias perferendis ex nisi tempora unde magni earum voluptatibus enim molestiae.",
        role: ['Frontend Developer', 'Backend Developer', 'Machine Learning Engineer', 'IOT Engineer'],
        image: CProjectsImageArray?.[0],
        contribution: "whole",
        shortSummary: "Odd-even vehicle plate detection system using YOLOv8 and web display",
        anotherLinks: [
            {
                linkName: "frontend repository",
                href: "https://github.com/YusufSyam/Odd_Even_Vehicle_Restriction_Policy-Front-End",
                type: "repo"
            },
            {
                linkName: "model training code",
                href: "https://colab.research.google.com/drive/1AgM65ML3gKzinxU7wh7cSYINlbo7Z89B?usp=sharing",
                type: "code"
            },
            {
                linkName: "esp32-cam code",
                href: "https://github.com/YusufSyam/Kode-SKripsi-ESP32-CAM",
                type: "repo"
            },
        ]
    },
    {
        idx: 1,
        name: "Danitor",
        projectType: "machine learning",
        techs: ["python","pytorch","pandas"],
        githubLink: "https://github.com/YusufSyam/Danitor-Model-Training",
        summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro temporibus necessitatibus eos, quam doloribus odit voluptate quidem rerum illo molestias perferendis ex nisi tempora unde magni earum voluptatibus enim molestiae.",
        role: ['Project Manager', 'Frontend Developer'],
        image: CProjectsImageArray?.[1],
        contribution: "part",
        shortSummary: 'Mobile application to detect dangerous animals in tourist spots'
    },
    {
        idx: 2,
        name: "SI-FA",
        projectType: "website",
        techs: ["typescript","reactjs","tailwind"],
        githubLink: "https://github.com/NPEDigiHouse/sifa-unhas",
        projectLink: "https://sifa.unhas.ac.id/",
        summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro temporibus necessitatibus eos, quam doloribus odit voluptate quidem rerum illo molestias perferendis ex nisi tempora unde magni earum voluptatibus enim molestiae.",
        role: ['Frontend Developer', 'Project Manager'],
        image: CProjectsImageArray?.[2],
        contribution: "part",
        shortSummary: 'Comprehensive thesis management platform for students and faculty'
    },
    {
        idx: 3,
        name: "Departmental Inventory Loan Information System",
        projectType: "website",
        techs: ["typescript","reactjs","tailwind"],
        githubLink: "https://github.com/YusufSyam/website-peminjaman-barang-departemen",
        summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro temporibus necessitatibus eos, quam doloribus odit voluptate quidem rerum illo molestias perferendis ex nisi tempora unde magni earum voluptatibus enim molestiae.",
        role: ['Frontend Developer'],
        image: CProjectsImageArray?.[3],
        contribution: "part",
        shortSummary: 'Borrowing system for shared departmental academic equipment'
    },
    {
        idx: 4,
        name: "Anxiety Test",
        projectType: "website",
        techs: ["typescript","reactjs","tailwind"],
        githubLink: "https://github.com/NPEDigiHouse/anxiety-test",
        summary: "",
        image: CProjectsImageArray?.[4],
        contribution: "whole",
        shortSummary: "Anxiety self-assessment tool for better mental awareness"
    },
    {
        idx: 5,
        name: "Dzikry Baby Shop",
        projectType: "website",
        techs: ["typescript","reactjs","tailwind"],
        githubLink: "https://github.com/YusufSyam/baby-equipment-shop",
        summary: "DzikriBabyShop is an e-commerce website built to serve parents and caregivers in finding essential baby products with ease. Designed with a user-friendly interface and clean layout, the platform allows customers to browse various categories of baby needs—from daily care items to clothing and feeding tools. Features include product listing, shopping cart, order management, and a simple admin panel to manage inventory. It was built as a real-world project to strengthen frontend engineering skills while exploring e-commerce logic and user-centric design.",
        role: ['Frontend Developer'],
        image: CProjectsImageArray?.[5],
        contribution: "part",
        shortSummary: 'Online store for baby essentials and everyday parenting needs'
    },
    {
        idx: 6,
        name: "Vehicle Recommendations",
        projectType: "machine learning",
        techs: ["python", "tensorflow", "keras"],
        githubLink: "https://github.com/YusufSyam/Rekomendasi-Merk-Mobil",
        projectLink: "https://rekomendasi-merk-mobil.herokuapp.com/",
        summary: "",
        image: CProjectsImageArray?.[6],
        contribution: "whole",
        shortSummary: "Web-based system for personalized car recommendations"
    },
    {
        idx: 7,
        name: "Banyorang Village Portal",
        projectType: "website",
        techs: ["typescript","reactjs","tailwind"],
        githubLink: "https://github.com/KelurahanBanyorang/KelurahanBanyorang.github.io",
        projectLink: "https://kelurahanbanyorang.github.io/",
        summary: "",
        image: CProjectsImageArray?.[7],
        contribution: "whole",
        shortSummary: "Official website for promoting and informing Banyorang village"
    },
    {
        idx: 8,
        name: "Self Esteem",
        projectType: "website",
        techs: ["typescript","reactjs","tailwind"],
        githubLink: "https://github.com/NPEDigiHouse/self-esteem",
        summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro temporibus necessitatibus eos, quam doloribus odit voluptate quidem rerum illo molestias perferendis ex nisi tempora unde magni earum voluptatibus enim molestiae.",
        image: CProjectsImageArray?.[8],
        contribution: "whole",
        shortSummary: "Web-based self-esteem test with instant personalized feedback"
    },
    {
        idx: 9,
        name: "Piece of Cake",
        projectType: "website",
        techs: ["javascript"],
        githubLink: "https://github.com/ToKu404/pieceofcake",
        summary: "",
        image: CProjectsImageArray?.[9],
        contribution: "part",
        shortSummary: "Cake shop web app with playful, game-inspired ordering experience"
    },
    {
        idx: 10,
        name: "CodeGrader",
        projectType: "desktop",
        techs: ["python"],
        githubLink: "https://github.com/YusufSyam/PTO",
        summary: "",
        image: CProjectsImageArray?.[10],
        contribution: "whole",
        shortSummary: "Automated Python code grader for student assignments"
    },
    {
        idx: 11,
        name: "DrugSyn Website",
        projectType: "website",
        techs: ["wordpress"],
        projectLink: "https://trg.unhas.ac.id/drugsyn/",
        summary: "",
        image: CProjectsImageArray?.[11],
        contribution: "part",
        shortSummary: "Central hub for pharmacy research at Hasanuddin University"
    },
    {
        idx: 12,
        name: "Python Visualization Snippet",
        projectType: "website",
        techs: ["python", "pandas"],
        githubLink: "https://github.com/YusufSyam/Python_Visualization_Snippet",
        summary: "",
        image: CProjectsImageArray?.[12],
        contribution: "whole",
        shortSummary: "A small collection of python code that I created to make visualization easier"
    },
    {
        idx: 13,
        name: "Top Rated Movies and TV Shows",
        projectType: "mobile",
        techs: ["java"],
        githubLink: "https://github.com/YusufSyam/Top-Rated-Movies-and-Tv-Shows",
        summary: "",
        image: CProjectsImageArray?.[13],
        contribution: "whole",
        shortSummary: "Android app to show the best tv-shows and movies"
    },
    {
        idx: 14,
        name: "Portfolio Website",
        projectType: "website",
        techs: ["typescript","reactjs","tailwind"],
        githubLink: "https://github.com/YusufSyam/portofolio",
        projectLink: "https://yusufsyam.github.io/portofolio",
        summary: "",
        image: CProjectsImageArray?.[14],
        contribution: "whole",
        shortSummary: "This portfolio website itself"
    },
]