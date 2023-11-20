'use client';
import ProjetCard from '@/components/realisations/ProjetCard';
import React from 'react';

const Realisation = () => {
    const projets = [
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
            <h1 className="text-center text-lg  text-red-600 xl:text-xl">Réalisations</h1>
            <div className="mx-auto">
                <div className="mt-5 flex flex-col space-y-2 whitespace-nowrap border p-2 text-center">
                    {projets.map((projet, index) => (
                        <p
                            key={index}
                            className="cursor-pointer"
                            onClick={() => {
                                const idProjetElement = document.getElementById(projet.nomProjet);
                                if (idProjetElement) {
                                    const rect = idProjetElement.getBoundingClientRect();
                                    window.scrollTo({
                                        top: rect.top + window.pageYOffset + -100,
                                        behavior: 'smooth',
                                    });
                                }
                            }}
                        >
                            {projet.nomProjet}
                        </p>
                    ))}
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
