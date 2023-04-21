import ProjectCard from "./ProjectCard.js"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import nexusModsIcon from "../assets/nexus.svg"
import gamejoltIcon from "../assets/gamejolt.svg"

import hr from "../assets/curve-hr.svg"

import scriptableEventsImg1 from "../assets/project-images/scriptable-object-events-1.png";
import scriptableEventsImg2 from "../assets/project-images/scriptable-object-events-2.png";
import scriptableEventsImg3 from "../assets/project-images/scriptable-object-events-3.gif";

import marioMafiaImg1 from "../assets/project-images/mario-mafia-1.gif";
import theIronBarsImg1 from "../assets/project-images/the-iron-bars-1.gif";
import buildingAttentionImg1 from "../assets/project-images/building_attention_1.gif";

import roadOfAnarchyImg1 from "../assets/project-images/road-of-anarchy-1.png";

import racingCareerImg1 from "../assets/project-images/racing-career-1.png";
import nuggetsBooksBlogImg1 from "../assets/project-images/nuggets-book-blog-1.jpg";

import endlessImg1 from "../assets/project-images/endless-1.webp";

// import 

export default function Projects(){
    const projects = [
        {
            name: "Building Attention",
            buttons: [
                {
                    type: "icon",
                    icon: faGithub,
                    uri: "https://github.com/Patrick-van-Halm/building-attention",
                    title: "Source Code",
                    text: "Source"
                }
            ],
            date: new Date(2023, 3, 14),
            description: "An AR navigation app to navigate around the Fontys TQ Building",
            media: [
                {
                    type: "image",
                    uri: buildingAttentionImg1
                },
                {
                    type: "youtube",
                    videoId: "QAgIGrXZP7A"
                }
            ],
            tags: ["C#", "Unity", "AR Foundation"]
        },
        {
            name: "Aradesigns Creation",
            buttons: [
                {
                    type: "icon",
                    icon: faGlobe,
                    uri:"https://aradesignscreations.nl/",
                    title: "Page",
                    text: "Webpage",
                }
            ],
            date: new Date(2022, 11, 22),
            description: "A webshop partially build and maintained by me.",
            media: [
                {
                    type: "image",
                    uri: "https://i.imgur.com/4xjwzZW.png"
                }
            ],
            tags: ["PHP", "HTML", "CSS", "JS", "Wordpress"]
        },
        {
            name: "Creuse Active",
            buttons: [
                {
                    type: "icon",
                    icon: faGlobe,
                    uri:"https://creuse-active.nl/",
                    title: "Page",
                    text: "Webpage",
                }
            ],
            date: new Date(2019, 6, 3),
            description: "An affordable vacation website maintained by me.",
            media: [
                {
                    type: "image",
                    uri: "https://creuse-active.nl/wp-content/uploads/2018/11/LOGOwebsite-klein.png"
                },
                {
                    type: "image",
                    uri: "https://i.imgur.com/99cO5l3.png"
                },
                {
                    type: "image",
                    uri: "https://i.imgur.com/99cO5l3.png"
                }
            ],
            tags: ["PHP", "HTML", "CSS", "JS", "Wordpress"]
        },
        {
            name: "Fish Networking Lobby System",
            buttons: [
                {
                    type: "icon",
                    icon: faGithub,
                    uri:"https://github.com/Patrick-van-Halm/FishNetworking-LobbySystem",
                    title: "Source Code",
                    text: "Source",
                }
            ],
            date: new Date(2023, 1, 15),
            description: "This is a system that is made to create lobbies and host separate game scenes for a max amount of players.",
            media: [],
            tags: ["C#", "Unity3D", "Fish Networking"]
        },
        {
            name: "Derail Valley Multiplayer Mod",
            buttons: [
                {
                    type: "icon",
                    icon: faGithub,
                    uri:"https://github.com/Patrick-van-Halm/dv-multiplayer-mod",
                    title: "Source Code",
                    text: "Source",
                },
                {
                    type: "svg",
                    icon: nexusModsIcon,
                    uri:"https://www.nexusmods.com/derailvalley/mods/272",
                    title: "Mod Page",
                    text: "Mod",
                },
            ],
            date: new Date(2021, 0, 23),
            description: "A multiplayer mod that allows for players to join eachothers session in Derail Valley. This project was later cancelled due to not having enough time to work on it anymore. Later it was picked up by someone else in the community to work further on it.",
            media: [
                {
                    type: "image",
                    uri: "https://staticdelivery.nexusmods.com/mods/2750/images/272/272-1611401810-1146560894.png"
                },
                {
                    type: "youtube",
                    videoId: "HRDBSunAJC4"
                }
            ],
            tags: ["C#", "Unity3D", "Dark Rift Networking", "Harmony"]
        },
        {
            name: "Derail Valley Job Realism Mod",
            buttons: [
                {
                    type: "icon",
                    icon: faGithub,
                    uri:"https://github.com/Patrick-van-Halm/dv-jobs_realism-mod",
                    title: "Source Code",
                    text: "Source",
                },
                {
                    type: "svg",
                    icon: nexusModsIcon,
                    uri:"https://www.nexusmods.com/derailvalley/mods/295/",
                    title: "Mod Page",
                    text: "Mod",
                },
            ],
            date: new Date(2021, 3, 8),
            description: "A mod that adds the following:<br>- A check if cars are in the exact orientation as the joblet.<br>- A fine when you cancel a taken job.<br>- Removes the bonus payout when within the time limit.",
            media: [
                {
                    type: "image",
                    uri: "https://staticdelivery.nexusmods.com/mods/2750/images/295/295-1617885605-1648896412.png"
                }
            ],
            tags: ["C#", "Unity3D", "Harmony"]
        },
        {
            name: "Kind Regards",
            buttons: [
                {
                    type: "icon",
                    icon: faGithub,
                    uri: "https://github.com/Patrick-van-Halm/unity-kind_regards",
                    title: "Unity3D Project",
                    text: "Unity3D",
                },
                {
                    type: "icon",
                    icon: faGithub,
                    uri:"https://github.com/Patrick-van-Halm/node-kind_regards-api",
                    title: "NodeJS API Project",
                    text: "API",
                },
            ],
            date: new Date(2021, 11, 15),
            description: "In Kind Regards, the player can send out their problem based on predefined choices. Other players can then react to the request with a motivational message chosen from a list and an optional gift. If a player chooses to send a gift, they select a sticker from their unlocked stickers which they want to give the player in the gift. The player can also personalize the gift by changing the colour of the gift and ribbon. The player’s companion, the owl, will deliver the gift to the requester upon sending. In return, the recipient can \"thank\" the sender, by sending a heart, to let them know they appreciate the gift they have received. All gifts received, will end up in the recipient's mailbox. This mailbox can be viewed anytime by the player to look back on received messages. When the player gets a sticker out of a gift that they have not received yet, this sticker will then be permanently unlocked for them to use in future gifts.",
            media: [
                {
                    type: "youtube",
                    videoId: "loKZKLX0hqA"
                }
            ],
            tags: ["C#", "Unity3D", "NodeJS", "Docker", "ExpressJS"]
        },
        {
            name: "Scriptable Objects Event System",
            buttons: [
                {
                    type: "icon",
                    icon: faGithub,
                    uri: "https://github.com/Patrick-van-Halm/ScriptableObjects-EventSystem",
                    title: "Unity3D Project",
                    text: "Source",
                },
            ],
            date: new Date(2022, 9, 2),
            description: "An event system for Unity3D that uses scriptable objects so components are less tightly connected to outside dependencies which otherwise would break the \"Dependency Inversion\" SOLID principle.",
            media: [
                {
                    type: "image",
                    uri: scriptableEventsImg1
                },
                {
                    type: "image",
                    uri: scriptableEventsImg2
                },
                {
                    type: "image",
                    uri: scriptableEventsImg3
                }
            ],
            tags: ["C#", "Unity3D"]
        },
        {
            name: "Road of Anarchy",
            buttons: [
                {
                    type: "icon",
                    icon: faGithub,
                    uri: "https://github.com/Patrick-van-Halm/unity-road_of_anarchy",
                    title: "Unity3D Project",
                    text: "Unity3D",
                },
                {
                    type: "icon",
                    icon: faGithub,
                    uri: "https://github.com/Patrick-van-Halm/node-road_of_anarchy_server_list",
                    title: "Server listing",
                    text: "Server listing",
                },
            ],
            date: new Date(2022, 9, 2),
            description: "A multiplayer first person racing game inspired by Mad Max and the Death Race the movie. There are teams of 2 and one member is the gunner and the other member is the driver. In total there are a max of 6 teams in the session.",
            media: [
                {
                    type: "image",
                    uri: roadOfAnarchyImg1
                },
                {
                    type: "youtube",
                    videoId: "jsjO2sxFhYQ"
                }
            ],
            tags: ["C#", "Unity3D", "Mirror Networking", "Docker", "NodeJS"]
        },
        {
            name: "Racing Career",
            date: new Date(2022, 9, 2),
            description: "A discord bot for managing race divisions, teams, results and more. It was created using NodeJS and the discord library called DiscordJS.",
            media: [
                {
                    type: "image",
                    uri: racingCareerImg1
                }
            ],
            tags: ["NodeJS", "DiscordJS", "ExpressJS", "PostgreSQL"]
        },
        {
            name: "Endless",
            buttons: [
                {
                    type: "svg",
                    icon: gamejoltIcon,
                    uri: "https://gamejolt.com/games/endless/140764",
                    title: "Game",
                    text: "Game",
                },
            ],
            date: new Date(2016, 3, 14),
            description: "A horror kind of game. I created this as my first game, and I was really proud of it. It was created using Unity and C#. The game does contain models, sounds and more that was just downloaded off the internet since I didn’t think that much about copyright at that point.",
            media: [
                {
                    type: "image",
                    uri: endlessImg1
                },
                {
                    type: "youtube",
                    videoId: "VqVzrmYBvt0"
                }
            ],
            tags: ["C#", "Unity3D"]
        },
        {
            name: "Mario Mafia",
            media: [
                {
                    type: "image",
                    uri: marioMafiaImg1
                }
            ],
            buttons: [
                {
                    type: "icon",
                    icon: faGithub,
                    uri: "https://github.com/Patrick-van-Halm/unity-mario_maffia",
                    title: "Source code",
                    text: "Source",
                },
            ],
            date: new Date(2021, 9, 15),
            description: "A puzzle game with a little FPS section where you play as Luigi trying to kill Mario for wanting the CEO position of the mafia himself. This project was made using Unity and C#. This was a project for the game pie project for my HBO ICT. It was made using the FPS starter project in Unity3D.",
            tags: ["C#", "Unity3D"]
        },
        {
            name: "The Iron Bars",
            media: [
                {
                    type: "image",
                    uri: theIronBarsImg1
                },
                {
                    type: "youtube",
                    videoId: "LwUNdPYrARs"
                },
                {
                    type: "youtube",
                    videoId: "I7q8HM-PR_U"
                },
            ],
            buttons: [
                {
                    type: "icon",
                    icon: faGithub,
                    uri: "https://github.com/Patrick-van-Halm/unity-the_iron_bars",
                    title: "Source code",
                    text: "Source",
                },
            ],
            date: new Date(2021, 9, 17),
            description: "A prison break, puzzle game where you play as an inmate that has been falsely accused and now wants to break out of the prison. This project was made using Unity and C#. This was a project for the duo game project for my HBO ICT. While developing this I have worked on the Enemy AI in here I learned some new things when it comes to detection.",
            tags: ["C#", "Unity3D"]
        },
        {
            name: "Nuggets Book Blog",
            media: [
                {
                    type: "image",
                    uri: nuggetsBooksBlogImg1
                },
            ],
            buttons: [
                {
                    type: "icon",
                    icon: faGithub,
                    uri: "https://github.com/Patrick-van-Halm/js-nuggets_books_blog",
                    title: "Source code Front-end",
                    text: "Front-end",
                },
                {
                    type: "icon",
                    icon: faGithub,
                    uri: "https://github.com/Patrick-van-Halm/go-nuggets_books_blog-api",
                    title: "Source code API",
                    text: "API",
                },
            ],
            date: new Date(2021, 2, 1),
            description: "A website with a book blog that uses a NodeJS with Vue front-end. An API that is coded in Golang. And uses a postgresql database.",
            tags: ["Golang", "PostgreSQL", "NodeJS", "VueJS", "ExpressJS", "HTML", "CSS", "Javascript"]
        },
    ].sort((a, b) => b.date - a.date)

    return (
        <div id="projects" className="mt-4 text-white">
            <h2 className="text-2xl font-bold">Projects</h2>
            <p className="font-light text-gray-400">Here are some of my projects I have worked on</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-12">
                {projects.map(p => <ProjectCard name={p.name} description={p.description} uri={p.uri} date={p.date.toDateString()} media={p.media} buttons={p.buttons} tags={p.tags} key={projects.indexOf(p)} />)}
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}
