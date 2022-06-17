import React, { useEffect, useState } from 'react';
import ProjectMiniCard from '../ProjectMiniCard';

const projDir = `${process.env.PUBLIC_URL}/assets/images/projects/games`;

const allProjects = [
    {
        title: 'Aegis Initiative', 
        tools: 'Unity, C#', 
        shipped: '11/18/2021', 
        teamSize: 20, 
        platform: 'PC', 
        position: 'Systems Producer/Engineer, worked on enemy movement, etc', 
        genre: 'Shooter', 
        download: 'https://heatwave-studios.itch.io/aegis-initiative', 
        thumbnail: `${projDir}/aegis_initiative/aegis_initiative_thumbnail.jpg`
    },
    {
        title: 'My Little Dark Lord', 
        tools: 'Unity, C#', 
        shipped: '11/30/2019', 
        teamSize: 4, 
        platform: 'PC', 
        position: 'Gameplay engineer, focused on combat, enemy AI, and connecting different Unity Store assets', 
        genre: 'Action RPG', 
        download: 'https://phyrol.itch.io/my-little-dark-lord', 
        thumbnail: `${projDir}/my_little_dark_lord/my_little_dark_lord_thumbnail.png`
    },
    {
        title: 'Night in the Woods', 
        tools: 'Unity, C#', 
        shipped: '01/27/2020', 
        teamSize: 3, 
        platform: 'PC', 
        position: 'Team Lead/Gameplay Engineer, worked on the player, enemy AI, sound, and level details', 
        genre: 'Shooter', 
        download: 'https://phyrol.itch.io/night-in-the-woods', 
        thumbnail: `${projDir}/night_in_the_woods/Night_in_the_Woods_Thumbnail.png`
    },
    {
        title: 'Adventure Tim(e)', 
        tools: 'GameMaker Studio 2, GML', 
        shipped: '10/30/2019', 
        teamSize: 1, 
        platform: 'PC', 
        position: 'Sole creator', 
        genre: 'Action', 
        download: 'https://phyrol.itch.io/adventure-time', 
        thumbnail: `${projDir}/adventure_time/Adventure_Time_Thumbnail.png`
    },
    {
        title: 'Lunchbox', 
        tools: 'Unity, C#', 
        shipped: '07/20/2021', 
        teamSize: 4, 
        platform: 'PC', 
        position: 'Gameplay Engineer, created main menu and helped with ship physics for floating on water with waves', 
        genre: 'Adventure', 
        download: 'https://phyrol.itch.io/lunchbox', 
        thumbnail: `${projDir}/lunchbox/lunchbox_thumbnail.png`
    },
    {
        title: 'HyperLoop', 
        tools: 'Unity, C#', 
        shipped: '10/05/2020', 
        teamSize: 5, 
        platform: 'PC', 
        position: 'Gameplay Engineer, created power-ups and traps for the player as well as the main/pause menus', 
        genre: 'Platformer', 
        download: 'https://cg115.itch.io/hyperloop', 
        thumbnail: `${projDir}/hyperloop/HyperLoop_Thumbnail.png`
    },
    {
        title: 'The Blob', 
        tools: 'Unity, C#', 
        shipped: '11/20/2019', 
        teamSize: 2, 
        platform: 'PC', 
        position: 'Gameplay Engineer, created moving obstacles and the general gameplay loop of collecting gems before the timer runs out', 
        genre: 'Platformer', 
        download: 'https://phyrol.itch.io/the-blob', 
        thumbnail: `${projDir}/the_blob/The_Blob_Thumbnail.png`
    },
    {
        title: 'Wrong Turn', 
        tools: 'Unity, C#', 
        shipped: '01/27/2020', 
        teamSize: 3, 
        platform: 'PC', 
        position: 'Team Lead/Gameplay Engineer, worked on enemy AI, player health system, level creation, and animations', 
        genre: 'Survival', 
        download: 'https://phyrol.itch.io/wrong-turn', 
        thumbnail: `${projDir}/wrong_turn/wrong_turn_thumbnail.png`
    },
    {
        title: 'CyBob', 
        tools: 'Unity, C#', 
        shipped: '02/05/2020', 
        teamSize: 3, 
        platform: 'PC', 
        position: 'Gameplay Engineer, created the enemy guard patrol/detection system, interactable objects, and shooting', 
        genre: 'Action RPG', 
        download: 'https://phyrol.itch.io/cybob', 
        thumbnail: `${projDir}/cybob/cybob_thumbnail.png`
    },
];

function ProjectMiniCardContainer(props) {

//let cardObj = allProjects.find(project => project.title === props.title);
let cardObj = allProjects[props.proj];

return (
    <ProjectMiniCard 
        src={cardObj.thumbnail} 
        title={cardObj.title} 
        tools={cardObj.tools} 
        shipped={cardObj.shipped} 
        teamSize={cardObj.teamSize} 
        platform={cardObj.platform} 
        position={cardObj.position} 
        genre={cardObj.genre} 
        download={cardObj.download}
        imageIsLeft={props.proj % 2 === 0 ? true : false}
    />
);

}

export default ProjectMiniCardContainer;