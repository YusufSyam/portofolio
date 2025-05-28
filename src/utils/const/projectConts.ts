import { ICProjects } from "./interfaces";

import ProjectImage12 from "./../../assets/images/pj_img_12.png";
import ProjectImage11 from "./../../assets/images/pj_img_11.jpeg";
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
  ProjectImage11,
  ProjectImage12,
  null,
  ProjectImage14,
  null,
  null,
];

export const CProjects: Array<ICProjects> = [
  {
    idx: 0,
    name: "PlateWatch",
    projectType: "machine learning",
    techs: ["python", "pytorch", "pandas", "typescript", "reactjs", "tailwind"],
    githubLink:
      "https://github.com/YusufSyam/Odd_Even_Vehicle_Restriction_Policy-Back-End",
    articleLink: "#",
    summary:
      "PlateWatch is a vehicle license plate detection system developed using YOLOv8, designed to identify odd and even-numbered license plates in real-time. The system utilizes deep learning models to accurately detect and classify vehicles based on the number of their plates. This project involves both backend and frontend development, where the backend handles the machine learning inference process, while the frontend displays the results via a user-friendly web interface. The main goal of PlateWatch is to support traffic management systems by automating the identification of vehicles based on their license plates. The system helps in monitoring vehicle traffic for applications such as toll collection, parking management, and vehicle restriction enforcement. By using YOLOv8, the project ensures high accuracy and speed in detecting license plates, even in challenging environments. This project provides an efficient and scalable solution to enhance traffic-related operations and serves as a valuable tool for city planning and management.",
    role: [
      "Frontend Developer",
      "Backend Developer",
      "Machine Learning Engineer",
      "IOT Engineer",
    ],
    image: CProjectsImageArray?.[0],
    contribution: "whole",
    shortSummary:
      "Odd-even vehicle plate detection system using YOLOv8 and web display",
    anotherLinks: [
      {
        linkName: "frontend repository",
        href: "https://github.com/YusufSyam/Odd_Even_Vehicle_Restriction_Policy-Front-End",
        type: "repo",
      },
      {
        linkName: "model training code",
        href: "https://colab.research.google.com/drive/1AgM65ML3gKzinxU7wh7cSYINlbo7Z89B?usp=sharing",
        type: "code",
      },
      {
        linkName: "esp32-cam code",
        href: "https://github.com/YusufSyam/Kode-SKripsi-ESP32-CAM",
        type: "repo",
      },
    ],
    additionalTechs: ["YOLO", "OCR", "ESP32", "Arduino"],
  },
  {
    idx: 1,
    name: "Danitor",
    projectType: "machine learning",
    techs: ["python", "pytorch", "pandas"],
    githubLink: "https://github.com/YusufSyam/Danitor-Model-Training",
    summary:
      "Danitor (Dangerous Animal Detector) is a mobile application designed to detect dangerous animals in tourist spots, providing users with real-time information to enhance safety. The app leverages machine learning models to identify and classify animals based on images captured by users, helping tourists avoid potential threats while exploring new locations. By utilizing a database of known dangerous animals and combining it with image recognition capabilities, Danitor aims to offer an accessible and effective tool for travelers. The app features an intuitive interface where users can easily take photos of animals and receive immediate feedback on whether the animal poses a danger. This project not only contributes to improving tourist safety but also promotes awareness about wildlife in popular tourist areas.",
    role: ["Machine Learning Engineer", "Data Annotator"],
    image: CProjectsImageArray?.[1],
    contribution: "part",
    shortSummary:
      "Mobile application to detect dangerous animals in tourist spots",
    anotherLinks: [
      {
        linkName: "mobile app repository",
        href: "https://github.com/ToKu404/danitor",
        type: "repo",
      },
      {
        linkName: "backend repository",
        href: "https://github.com/alba054/AIC_2022",
        type: "repo",
      },
      {
        linkName: "first dataset",
        href: "https://www.kaggle.com/datasets/yusufsyam/blue-ringed-octopus-dataset",
        type: "other",
      },
      {
        linkName: "second dataset",
        href: "https://www.kaggle.com/datasets/yusufsyam/blue-ringed-octopus-dataset",
        type: "other",
      },
    ],
    additionalTechs: ["YOLO", "Roboflow"],
  },
  {
    idx: 2,
    name: "SI-FA",
    projectType: "website",
    techs: ["typescript", "reactjs", "tailwind"],
    githubLink: "https://github.com/NPEDigiHouse/sifa-unhas",
    projectLink: "https://sifa.unhas.ac.id/",
    summary:
      "SIFA (Pharmacy Information System) is a comprehensive web-based application developed for the Faculty of Pharmacy at Universitas Hasanuddin. The system streamlines various academic and administrative processes, particularly those related to final project management. Through SIFA, students can submit final project proposals, get supervisor and examiner assignments, manage seminar schedules, and request academic letters and documents, all within a single platform. Additionally, SIFA provides learning outcome data and insights, helping students and faculty track academic progress more effectively. By digitizing and centralizing these essential workflows, the system significantly reduces paperwork, enhances transparency, and improves communication between students, lecturers, and administrative staff..",
    role: ["Frontend Developer", "Project Manager"],
    image: CProjectsImageArray?.[2],
    contribution: "part",
    shortSummary:
      "Comprehensive thesis management platform for students and faculty",
    additionalTechs: ["MantineUI"],
  },
  {
    idx: 3,
    name: "Departmental Inventory Loan Information System",
    projectType: "website",
    techs: ["typescript", "reactjs", "tailwind"],
    githubLink:
      "https://github.com/YusufSyam/website-peminjaman-barang-departemen",
    summary:
      "Department Inventory Borrowing System is a web-based application designed to manage and facilitate the borrowing of academic equipment within the Mathematics Department. The system allows students to browse a list of available inventory items, such as projectors, markers, microphones, and other teaching aids, each with a visible stock count. If an item is in stock, students can request a loan by entering their student ID (NIM) through the system. Once the request is made, the item can then be picked up directly at the department office. This system helps streamline the borrowing process, minimize administrative overhead, and improve transparency and accountability in inventory management.",
    role: ["Frontend Developer"],
    image: CProjectsImageArray?.[3],
    contribution: "part",
    shortSummary: "Borrowing system for shared departmental academic equipment",
    additionalTechs: ["MantineUI"],
  },
  {
    idx: 4,
    name: "Anxiety Test",
    projectType: "website",
    techs: ["typescript", "reactjs", "tailwind"],
    githubLink: "https://github.com/NPEDigiHouse/anxiety-test",
    summary:
      "A web-based questionnaire system developed to measure the level of social anxiety among high school students. The platform presents a series of carefully designed statements related to social anxiety, to which students respond on a scale ranging from “Strongly Disagree” to “Strongly Agree.” The primary objective of this project is to support a research study aimed at validating the reliability and effectiveness of this web-based inventory. Additionally, it seeks to gain insights into the prevalence and degree of social anxiety experienced by students. All responses are confidential and used solely for academic and scientific purposes, with no impact on students' academic performance. By digitizing the assessment process, this tool makes it easier to collect and analyze data efficiently while ensuring participant privacy and encouraging honest self-reflection",
    image: CProjectsImageArray?.[4],
    contribution: "whole",
    shortSummary: "Anxiety self-assessment tool for better mental awareness",
    role: ["Frontend Developer"],
  },
  {
    idx: 5,
    name: "Dzikry Baby Shop",
    projectType: "website",
    techs: ["typescript", "reactjs", "tailwind"],
    githubLink: "https://github.com/YusufSyam/baby-equipment-shop",
    summary:
      "DzikriBabyShop is an e-commerce website built to serve parents and caregivers in finding essential baby products with ease. Designed with a user-friendly interface and clean layout, the platform allows customers to browse various categories of baby needs, from daily care items to clothing and feeding tools. Features include product listing, shopping cart, order management, and a simple admin panel to manage inventory. It was built as a real-world project to strengthen frontend engineering skills while exploring e-commerce logic and user-centric design.",
    role: ["Frontend Developer"],
    image: CProjectsImageArray?.[5],
    contribution: "part",
    shortSummary:
      "Online store for baby essentials and everyday parenting needs",
    additionalTechs: ["MantineUI"],
  },
  {
    idx: 6,
    name: "Vehicle Recommendations",
    projectType: "machine learning",
    techs: ["python", "tensorflow", "keras", "pandas"],
    githubLink: "https://github.com/YusufSyam/Rekomendasi-Merk-Mobil",
    projectLink: "https://rekomendasi-merk-mobil.herokuapp.com/",
    summary:
      "A machine learning-based application designed to suggest suitable car types and brands (vehicles with more than four wheels) based on various technical specifications. Users input parameters such as engine capacity (cc), transmission type, fuel type, tank capacity, weight, number of seats, steering system, number of doors and wheels, and vehicle dimensions (length, width, height). Powered by an XGBoost classification model trained on Gaikindo Car Data, the system analyzes the input features to provide accurate and relevant recommendations. The user interface is implemented as a responsive web application, ensuring an accessible and intuitive user experience. This project aims to assist users—whether individuals or businesses—in finding vehicles that match their specific technical and functional requirements, making the decision-making process more data-driven and efficient",
    image: CProjectsImageArray?.[6],
    contribution: "whole",
    shortSummary: "Web-based system for personalized car recommendations",
    role: ["Machine Learning Engineer", "Frontend Developer"],
    additionalTechs: ["XGBoost", "Flask", "Pickle"],
  },
  {
    idx: 7,
    name: "Banyorang Village Portal",
    projectType: "website",
    techs: ["typescript", "reactjs", "tailwind"],
    githubLink:
      "https://github.com/KelurahanBanyorang/KelurahanBanyorang.github.io",
    projectLink: "https://kelurahanbanyorang.github.io/",
    summary: `A self-initiated project developed by me as part of my KKNT (KKN Inovasi Teknologi Tepat Guna) program. This website aims to provide easy access to information about Banyorang Village, helping to improve communication between the local community and the public. The site features comprehensive details about the village, including its history, maps, village organization chart, and village galery. The website was designed with the goal of promoting the village and making it more accessible to a broader audience. By offering a digital space for these resources, the website contributes to raising awareness and increasing the visibility of Banyorang Village, ultimately supporting its growth and development in the digital age.`,
    image: CProjectsImageArray?.[7],
    contribution: "whole",
    shortSummary:
      "Official website for promoting and informing Banyorang village",
    role: ["Frontend Developer"],
  },
  {
    idx: 8,
    name: "Self Esteem",
    projectType: "website",
    techs: ["typescript", "reactjs", "tailwind"],
    githubLink: "https://github.com/NPEDigiHouse/self-esteem",
    summary:
      "This web-based application is designed to help users assess and understand their level of self-esteem. It features a carefully crafted questionnaire consisting of 42 items aimed at providing meaningful insights into the user's self-confidence and self-perception. By answering a series of statements, users receive an evaluation of their self-esteem level, offering a deeper awareness of their emotional well-being. The platform is intended for both personal reflection and academic use, with a user-friendly interface that ensures a smooth and accessible self-assessment experience.",
    image: CProjectsImageArray?.[8],
    contribution: "whole",
    shortSummary:
      "Web-based self-esteem test with instant personalized feedback",
    role: ["Frontend Developer"],
  },
  {
    idx: 9,
    name: "Piece of Cake",
    projectType: "website",
    techs: ["javascript"],
    githubLink: "https://github.com/ToKu404/pieceofcake",
    summary: "This bakery web application delivers a playful and nostalgic ordering experience inspired by early 2010s PC cake-making games. Through an interactive, game-like interface, users can customize cakes by virtually baking, decorating, and assembling them using drag-and-drop features and smooth animations. Once finished, the order is processed through WhatsApp, allowing customers to seamlessly send their customized cake requests directly to the shop. This project was developed as part of Universitas Hasanuddin’s 2022 Student Entrepreneurship Program (Program Wirausaha Mahasiswa), aiming to combine creativity, user engagement, and real-world business functionality into a single, memorable platform.",
    image: CProjectsImageArray?.[9],
    contribution: "part",
    shortSummary:
      "Cake shop web app with playful, game-inspired ordering experience",
    role: ["Frontend Developer"],
  },
  {
    idx: 10,
    name: "Asabina Development Centre Profile Website",
    projectType: "website",
    techs: ["wordpress"],
    projectLink: "https://asabinadc.site/",
    summary: "This WordPress-based community profile website was developed for Asabina Development Centre, a community initiative committed to providing free and accessible training for fresh graduates and job seekers. Asabina focuses on equipping individuals with essential skills such as Excel, basic WordPress, and other technical and soft skills relevant to the professional world. Aimed particularly at underserved communities, including those in remote areas or with limited economic means, Asabina adopts an inclusive, empowerment-based approach to learning. The website serves not only as an online presence but also as a central hub for information about workshops, programs, and community impact. Designed to reflect Asabina’s mission and values, the platform enhances visibility, credibility, and reach, helping the organization inspire and support more individuals toward a competitive and innovative future",
    image: CProjectsImageArray?.[10],
    contribution: "whole",
    shortSummary: "Automated Python code grader for student assignments",
    role: ["Website Developer"],
  },
  {
    idx: 11,
    name: "DrugSyn Website",
    projectType: "website",
    techs: ["wordpress"],
    projectLink: "https://trg.unhas.ac.id/drugsyn/",
    summary: "This website was developed to serve as the official platform for the Drug Synthesis Research Group at the Faculty of Pharmacy, Universitas Hasanuddin. The platform showcases the group's research activities, projects, publications, and scientific contributions in the field of medicinal chemistry. The group focuses on the design, synthesis, and biological evaluation of novel pharmaceutical compounds targeting diseases. The website provides accessible information on the group’s objectives, ongoing research, and scientific outputs, supporting their mission to advance drug discovery and foster collaboration in the pharmaceutical sciences. While I was not the original developer of the website, I took over its development and currently handle its maintenance and updates.",
    image: CProjectsImageArray?.[11],
    contribution: "part",
    shortSummary: "Central hub for pharmacy research at Hasanuddin University",
    role: [ "Web Administrator", "Web Developer"],
  },
  {
    idx: 12,
    name: "Python Visualization Snippet",
    projectType: "website",
    techs: ["python", "pandas"],
    githubLink: "https://github.com/YusufSyam/Python_Visualization_Snippet",
    summary:
      "A small collection of Python code designed to simplify the process of visualizing machine learning models and data. It includes functions for displaying the output of each convolution step in a model during inference, which is particularly useful for understanding the behavior of deep learning models. Additionally, it features a binary dataframe comparison function that provides an easy-to-use method for directly comparing two dataframes, helping to identify differences efficiently. Lastly, it includes a function to generate random colors from a given colormap, adding flexibility for visual representation. ",
    image: CProjectsImageArray?.[12],
    contribution: "whole",
    shortSummary:
      "A small collection of python code that I created to make visualization easier",
    role: ["Frontend Developer"],
  },
  {
    idx: 13,
    name: "Top Rated Movies and TV Shows",
    projectType: "mobile",
    techs: ["java"],
    githubLink: "https://github.com/YusufSyam/Top-Rated-Movies-and-Tv-Shows",
    summary:
      "Android app to show the best tv-shows and movies based on themoviedb api. This is the final project of mobile programming subject",
    image: CProjectsImageArray?.[13],
    contribution: "whole",
    shortSummary: "Android app to show the best tv-shows and movies",
    role: ["Mobile Developer"],
  },
  {
    idx: 14,
    name: "Portfolio Website",
    projectType: "website",
    techs: ["typescript", "reactjs", "tailwind"],
    githubLink: "https://github.com/YusufSyam/portofolio",
    projectLink: "https://yusufsyam.github.io/portofolio",
    summary: "This portfolio website itself",
    image: CProjectsImageArray?.[14],
    contribution: "whole",
    shortSummary: "This portfolio website itself",
    role: ["Frontend Developer"],
  },
  {
    idx: 15,
    name: "CodeGrader",
    projectType: "desktop",
    techs: ["python"],
    githubLink: "https://github.com/YusufSyam/PTO",
    summary: "CodeGrader is an automated grading system designed to evaluate Python programming assignments submitted by students. This tool streamlines the assessment process by automatically executing and testing student code against predefined cases, verifying correctness, and providing immediate feedback and scores. It was developed to reduce the time and effort required for manual grading and ensuring consistency in evaluation. I developed this program during my time as a teaching assistant and lab assistant for undergraduate programming courses, where I frequently encountered the challenges of grading large volumes of student assignments. CodeGrader not only enhanced efficiency for instructors and assistants but also contributed to a more transparent and scalable evaluation process.",
    image: CProjectsImageArray?.[15],
    contribution: "whole",
    shortSummary: "Automated Python code grader for student assignments",
    role: ["Software Engineer"],
  },
];
