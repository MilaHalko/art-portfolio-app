import React from 'react';

const GameLine = (props) => {
    return (
        <div className='group flex flex-row gap-8'>
            <div className='col-span-2'>
                <a href={props.link}>
                    <img src={props.img} alt='Frozen Fire Game Play' className='max-w-[400px] border-4 border-transparent duration-300 group-hover:border-[#2785e3]'/>
                </a>
            </div>
            <div className='col-span-3'>
                <a href={props.link}>
                    <h1 className='text-4xl font-bold text-[#8892b0] duration-300 group-hover:text-[#2785e3] mb-4'>{props.title}</h1>
                </a>
                {props.description}
            </div>
        </div>
    );
};

export default GameLine;