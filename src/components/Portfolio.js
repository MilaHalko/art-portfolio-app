import React, {useState} from 'react';
import Layout from "./Layout";
import Gallery from "./Gallery";
import {artsData} from "../data/artsData";
import NFTIntro from "./NFTIntro";
import GameIntro from "./GameIntro";

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        {
            text: 'ART',
            data: artsData.filter(art => art.type === 'illustration'),
            style: 'columns-2 sm:columns-3 lg:columns-4',
        },
        {
            text: 'GAME',
            data: artsData.filter(art => art.type === 'background' || art.type === 'game'),
            style: 'columns-2 md:columns-3',
            startComponent: <GameIntro/>

        },
        {
            text: 'NFT',
            data: artsData.filter(art => art.type === 'nft' && art.name !== 'Crazy Dog Stamp' && art.name !== 'Crazy Dog Header'),
            style: 'grid grid-cols-3 [&>*:first-child]:mt-4 md:grid-cols-6',
            startComponent: <NFTIntro/>
        }
    ];

    return (
        <Layout>
            <div name='portfolio' className='flex md:h-screen text-gray-600'>
                <div className='mx-auto px-4 flex flex-col w-full h-full'>
                    <div className='flex flex-row justify-center gap-8'>
                        {tabs.map((tab, index) => {
                            return (
                                <button className={`pb-4`}
                                     key={index} onClick={() => setActiveTab(index)}>
                                    <p className={`text-2xl font-bold text-[#8892b0] ${activeTab === index ? 'text-[#db2777] underline' : ''}`}>
                                        {tab.text}
                                    </p>
                                </button>
                            );
                        })}
                    </div>
                    <Gallery arts={tabs[activeTab].data} className={tabs[activeTab].style} startComponent={tabs[activeTab]?.startComponent}/>
                </div>
            </div>
        </Layout>
    );
};

export default Portfolio;