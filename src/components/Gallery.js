import React from 'react';

const Gallery = (props) => {
    return (
        <div>
            {props.startComponent && props.startComponent}
            <div className={`gap-4 xl:gap-5 [&>div:not(:first-child)]:mt-4 ${props.className}`}>
                {props.arts.map((artData, index) => {
                    return (
                        <div key={index}>
                            <img src={artData.image} alt={artData.title} className='w-[100%]'/>
                        </div>
                    );
                })}
            </div>
        </div>
    )
        ;
};

export default Gallery;