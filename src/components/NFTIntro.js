import React from 'react';
import NFTDogStamp from '../assets/arts/small/crazy-dog-stamp.png';
import NFTHeader from '../assets/arts/small/crazy-dog-header.png';

const NftIntro = () => {
    return (
        <div>
            <div className='flex flex-row items-center gap-8 max-w-[1500px]'>
                <div className='col-span-2'>
                    <img src={NFTDogStamp} alt='Crazy Dog Tirantino NFT Collection' className='max-w-[250px]'/>
                </div>
                <div className='col-span-3'>
                    <h1 className='text-4xl font-bold text-[#8892b0] mb-4'>Crazy Dog NFT Marks</h1>
                    <p className='text-xl font-light text-[#a8b2d1] mb-4'>
                        Crazy Dog Tirantino NFT is a collection of
                        hand-drawn famous tyrants and dictators presented in an artistic way.
                        <br/>
                        Each mark is unique and has its own personality and story. The collection is a tribute to the
                        people who have been oppressed by the tyrants or political figures.
                    </p>
                    <a href='https://opensea.io/Crazy_Dog' className='text-[#2785E3] underline text-xl font-bold'>View Collection</a>
                </div>
            </div>
            <div className='grid grid-cols-3 mt-8 mb-10'>
                <img src={NFTHeader} alt='Crazy Dog Stamp NFT' className='w-[100%] col-span-1'/>
                <img src={NFTHeader} alt='Crazy Dog Stamp NFT' className='w-[100%] col-span-1'/>
                <img src={NFTHeader} alt='Crazy Dog Stamp NFT' className='w-[100%] col-span-1'/>
            </div>
        </div>
    );
};

export default NftIntro;