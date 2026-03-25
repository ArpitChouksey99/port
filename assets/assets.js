import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import newlogo from './newlogo.png'
import newpro from './newpro.png'
import newpro2 from './newpro2.png'
import darklogo from './dark logo.png'
import crypto from './crpto.png'
import forever from './FOREVER.png'
import qwin from './qwin.png'
import wand from './wanderlust.png'
import intell from './intell.png'
import sql from './sql.png'
import postman from './postman.png'

export const assets = {
    user_image,
    wand,
    qwin,
    darklogo,
    newpro2,
    forever,
    newpro,
    newlogo,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    sql,
    postman,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    crypto,
    intell
};

export const workData = [
   {
    title: "Qwin GPT",
    description:
      "Developed an AI-powered chat web application where users can interact with an intelligent chatbot to ask questions and get instant responses in real time. Implemented a clean chat interface and integrated AI APIs for generating responses.",
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS", "MongoDb", "MongoDB Atlas", "HTML", "JavaScript", "ImageKit Api", "Stripe", "JWT", "OpenAI API"],
    github: "https://github.com/ArpitChouksey99/Quick-gpt",
    bgImage: qwin
  },{
    title: "Wanderlust — Airbnb-Style Hotel Listing Platform",
    description:
      "Developed a travel listing web application where users can explore destinations, view property details, see locations on an interactive map, and book stays. Implemented user authentication, property listing management, reviews, and full CRUD operations with a responsive UI.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "EJS", "Passport.js", "Joi", "Cloudinary", "MapTiler API"],
    github: "https://github.com/ArpitChouksey99/WANDERNEW",
    bgImage: wand
  },{
    title: "FOREVER-E-Commerce Website",
    description:
      "Developed a full-stack eCommerce platform where users can browse, filter, and sort products, select variants, add items to the cart, and place orders. Integrated payment options including Cash on Delivery and online payments using Stripe and Razorpay. Built an admin dashboard for product management. Backend APIs were developed using Node.js and Express.js with data stored in MongoDB.",
    tech: ["HTML", "React","JavaScript", "Node.js", "CSS","Tailwind", "Express.js","MongoDB","JWT","Stripe", "Razorpay"],
    github: "https://github.com/ArpitChouksey99/e-comm",
    bgImage: forever
  },{
    title: "Cryptoplace",
    description:
      "Developed a cryptocurrency price tracking web app using React that fetches real-time data from the CoinGecko API. The platform displays live prices, market cap, price charts, 24-hour price change, and market rank, with a search feature to find individual cryptocurrencies.",
    tech: ["HTML","CSS","JavaScript", "React", "Tailwind", "CoinGecko API"],
    github: "https://github.com/ArpitChouksey99/Crypto",
    bgImage: crypto
  },

    // {
    //     title: 'Frontend project',
    //     description: 'Web Design',
    //     bgImage: '/work-1.png',
    // },
    // {
    //     title: 'Geo based app',
    //     description: 'Mobile App',
    //     bgImage: '/work-2.png',
    // },
    // {
    //     title: 'Photography site',
    //     description: 'Web Design',
    //     bgImage: '/work-3.png',
    // },
    // {
    //     title: 'UI/UX designing',
    //     description: 'UI/UX Design',
    //     bgImage: '/work-4.png',
    // },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Skills', description: 'HTML, CSS, JavaScript React Js, NextJs, TypeScript, Java, Tailwind, BootStrap, Nodejs, Expressjs, Mysql, MongoDb' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.intell, assets.mongodb, assets.figma, assets.git,assets.sql,assets.postman
];