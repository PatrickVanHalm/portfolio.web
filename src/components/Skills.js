import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import linux from "../assets/skills/linux.svg"
import reactIcon from "../assets/skills/react.svg"
import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"
import node from "../assets/skills/nodejs.svg"
import html from "../assets/skills/html.svg"
import github from "../assets/skills/github.svg"
import csharp from "../assets/skills/csharp.svg"
import unity from "../assets/skills/unity.svg"
import scrum from "../assets/skills/scrum.svg"
import postgres from "../assets/skills/postgres.svg"
import mysql from "../assets/skills/mysql.svg"
import uml from "../assets/skills/uml.svg"
import cpp from "../assets/skills/cpp.svg"

import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            }
        ]
      };

    const today = new Date();
    const skills = [
        {name: "C#", years: today.getFullYear() - 2016, img: csharp},
        {name: "Unity3D", years: today.getFullYear() - 2016, img: unity},
        {name: "Linux", years: today.getFullYear() - 2019, img: linux},
        {name: "Bash", years: today.getFullYear() - 2017, img: bash},
        {name: "Javascript", years: today.getFullYear() - 2017, img: javascript},
        {name: "React", years: today.getFullYear() - 2022, img: reactIcon},
        {name: "Docker", years: today.getFullYear() - 2019, img: docker},
        {name: "Git", years: today.getFullYear() - 2016, img: git},
        {name: "ExpressJS", years: today.getFullYear() - 2019, img: express},
        {name: "Gitlab", years: today.getFullYear() - 2018, img: gitlab},
        {name: "NodeJS", years: today.getFullYear() - 2018, img: node},
        {name: "HTML", years: today.getFullYear() - 2016, img: html},
        {name: "Github", years: today.getFullYear() - 2016, img: github},
        {name: "Scrum", years: today.getFullYear() - 2017, img: scrum},
        {name: "MySQL", years: today.getFullYear() - 2017, img: mysql},
        {name: "Postgres", years: today.getFullYear() - 2018, img: postgres},
        {name: "UML", years: today.getFullYear() - 2018, img: uml},
        {name: "C++", years: 0.5, img: cpp},
    ].sort((a, b) => b.years - a.years);

    return (
        <div id="skills" className="mt-4 text-white">
            <h2 className="text-2xl font-bold">Skills</h2>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4 mx-5">
                <Slider {...settings}>
                    {skills.map(s => <SkillCard name={s.name} experience={`${s.years} years`} img={s.img} key={skills.indexOf(s)} />)}
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}