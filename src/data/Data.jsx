import Sample from '../images/11.png'
import Triton from '../images/triton.png'
import Show_Us from '../images/show_us.png'
import BJ from '../images/BJ.png'
import PP from '../images/PP.png'
import easyPeasy from '../images/easyPeasy.png'

export const list_of_projects = [
    {
        title: "Triton Finance",
        tech: ["React", "Bootstrap", "RESTful API"],
        description: "Finance application which provides equity data in real-time including stock quotes, company overview, and charts",
        thumbnail: Triton,
        github: "https://github.com/Dmoney831/Triton-Finance",
        app: "https://flamboyant-shaw-2995f0.netlify.app/"
    },
    {
        title: "Show Us",
        tech: ["Python", "Django", "Bootstrap", "PostgreSQL", "AWS"],
        description: "A social media platform for young amateur artists to share their talent.",
        thumbnail: Show_Us,
        github: "https://github.com/Dmoney831/Show_Us",
        app: "https://show-us-test.herokuapp.com/"
    },
    {
        title: "Blackjack 21",
        tech: ["HTML", "Vanilla JS", "CSS"],
        description: "Browser based game with using Document Object Model (DOM) to perform quivalent API calls and associated data.",
        thumbnail: BJ,
        github: "https://github.com/Dmoney831/BlackJack21",
        app: "https://dmoney831.github.io/BlackJack21/"
    },
    {
        title: "EasyPeasy",
        tech: ["EJS", "Express", "NodeJS", "MongoDB", "CSS"],
        description: "Recipe application where customers search and share recipes",
        thumbnail: easyPeasy,
        github: "https://github.com/prireds174/WhatsCookingGoodLooking",
        app: "https://polar-garden-31604.herokuapp.com/easypeasy"
    },
    {
        title: "Personal Website",
        tech: ["HTML", "CSS", "Vanilla JS"],
        description: "Personal website to represent myself",
        thumbnail: PP,
        github: "/",
        app: "https://github.com/Dmoney831/portfolio-website"
    }
]           