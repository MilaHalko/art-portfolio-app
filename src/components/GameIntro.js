import React from 'react';
import FrozenFireGame from '../assets/arts/games/frozenFireGamePlay.jpg';
import DanteGame from '../assets/arts/games/dantesHellGamePlay.png';
import EvilCoinsGame from '../assets/arts/games/moneyEvelGameplay.jpg';
import GameLine from "./GameLine";

const GameIntro = () => {
    const frozenFireGameLink = 'https://vakor03.itch.io/frozen-fire';
    const danteGameLink = 'https://sorpirit.itch.io/danteshell';
    const evilCoinsGameLink = 'https://sorpirit.itch.io/dungeon-game-test';

    const games = [
        {
            title: 'Frozen Fire',
            description:
                <p className='text-xl font-light text-[#a8b2d1] mb-4'>
                    Frozen Fire is a platformer game that I created using
                    Unity. It is a 2D game with a simple control and a challenging level.
                    <br/>
                    As an artist, I also created the game assets such as the background, effects, textures, game
                    objects, level design.
                </p>,
            img: FrozenFireGame,
            link: frozenFireGameLink
        },
        {
            title: 'Evil Coins',
            description:
                <p className='text-xl font-light text-[#a8b2d1] mb-4'>
                    Evil Coins is a 2D logic game that where you need NOT to collect the coins. Sounds easy? Try it out!
                    <br/>
                    Made with Unity by group of 3 people in 48 hours for the Global Game Jam 2023. I was responsible for the game design, level design, and the game art.
                    There are works like the background, effects, animations, main character, enemies (coins :) ), and other game objects.
                    </p>,
            img: EvilCoinsGame,
            link: evilCoinsGameLink
        },
        {
            title: 'Dante\'s 9th Hell',
            description:
                <p className='text-xl font-light text-[#a8b2d1] mb-4'>
                    Dante's 9th Hell is a 3D Rock Shooter game that was created using Unity.
                    The game has a simple control and a challenging levels.
                    <br/>
                    Here, I created the game assets such as
                    the background, effects, textures, scenes, level designs. I also created the game mechanics and searched for the sound effects and music.
                </p>,
            img: DanteGame,
            link: danteGameLink
        },
    ];

    return (
        <div className='flex flex-col max-w-[1400px] gap-12 my-12'>
            {games.map((game, index) => {
                return (
                    <GameLine key={index} title={game.title} description={game.description} img={game.img} link={game.link}/>
                );
            })}
        </div>
    );
};

export default GameIntro;