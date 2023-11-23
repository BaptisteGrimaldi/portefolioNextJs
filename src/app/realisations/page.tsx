import ProjetCard from '@/components/realisations/ProjetCard';
import React from 'react';
import MenuProjet from '@/components/realisations/MenuProjet';
import { TProjet } from '@/type';

const Realisation = () => {
    const projets: TProjet[] = [
        {
            nomProjet: 'Plateforme recrutement SAP',
            description: "Réalisation d'une plateforme de recherche de candidats specialisés sur SAP pour un cabinet de chasse.",
            enLigne: true,
            tagsTechnologie: ['Html', 'Css', 'Javascript', 'NodeJs', 'MySql', 'MongoDB'],
            videoPresentation: 'https://www.youtube.com/embed/9WbCfHutDSE',
        },
        {
            nomProjet: 'Algorithme de trading',
            description: "Réalisation d'un algorithme d'analyse de trading sur le NASDAQ.",
            enLigne: false,
            tagsTechnologie: ['NodeJS', 'typescript'],
            videoPresentation: 'https://www.youtube.com/embed/9WbCfHutDSE',
        },
        {
            nomProjet: 'Portefolio Personnel',
            description: 'Le portefolio que vous êtes en train de regarder en ce moment meme !',
            enLigne: true,
            tagsTechnologie: ['Next JS', 'Tailwind CSS', 'Typescript'],
            videoPresentation: 'https://www.youtube.com/embed/9WbCfHutDSE',
        },
    ];
    return (
        <div className="mt-36 w-full">
            <div className="mx-auto w-10/12">
                <MenuProjet projets={projets} />
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
