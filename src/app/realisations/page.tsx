import ProjetCard from '@/components/realisations/ProjetCard';
import React from 'react';
import MenuProjet from '@/components/realisations/MenuProjet';
import { TProjet } from '@/type';

const Realisation = () => {
    const projets: TProjet[] = [
        {
            nomProjet: 'Plateforme recrutement SAP',
            description: "Réalisation d'une plateforme de recherche de candidats specialisés sur SAP pour un cabinet de chasse.",
            enLigne: 'https://jerecrutesursap.com/',
            tagsTechnologie: ['Html', 'Css', 'Javascript', 'NodeJs', 'MySql', 'MongoDB'],
            videoPresentation: 'https://www.youtube.com/embed/9WbCfHutDSE',
        },
        {
            nomProjet: 'Algorithme de trading',
            description: "Réalisation d'un algorithme d'analyse de trading sur le NASDAQ.",
            enLigne: '',
            tagsTechnologie: ['NodeJS', 'Typescript'],
            videoPresentation: 'https://www.youtube.com/embed/9WbCfHutDSE',
        },
        {
            nomProjet: 'Portefolio Personnel',
            description: 'Le portefolio que vous êtes en train de regarder en ce moment meme !',
            enLigne: '',
            tagsTechnologie: ['Next JS', 'Tailwind CSS', 'Typescript'],
            videoPresentation: 'https://www.youtube.com/embed/9WbCfHutDSE',
        },
    ];
    return (
        <div className="mt-36 w-full">
            <div className="mx-auto flex w-11/12 max-w-[1150px] flex-col items-center md:flex md:flex-row-reverse md:place-content-around md:items-baseline">
                <div className='flex flex-col items-center'>
                <h1 className='textH1 text-red-600 md:ml-10'>Projets</h1>
                <MenuProjet projets={projets} /> 
                </div>
                <div className="">
                    {projets.map((projet, index) => (
                        <div id={projet.nomProjet} key={index}>
                            <ProjetCard {...projet} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Realisation;
