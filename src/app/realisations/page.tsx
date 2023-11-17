import ProjetCard from '@/components/realisations/ProjetCard';
import React, { ReactElement } from 'react';

const Realisation = () => {

    const projets: ReactElement[] = [
        ProjetCard({
            nomProjet: 'Plateforme recrutement SAP',
            description: 'Réalisation d\'une plateforme de recherche de candidat specialisé sur SAP pour une entreprise de recrutement.',
            enLigne: true,
            tagsTechnologie: ['Html','Css','Javascript','Node Js','MySql','MongoDB'],
            videoPresentation: 'https://www.youtube.com/embed/9WbCfHutDSE',
        }),
        ProjetCard({
            nomProjet: 'Algorithme de trading',
            description: 'Réalisation d\'un algorithme d\'analyse de trading sur le NASDAQ.',
            enLigne: false,
            tagsTechnologie: ['Node JS','typescript'],
            videoPresentation: 'https://www.youtube.com/embed/9WbCfHutDSE',
        }),
        ProjetCard({
            nomProjet: 'Portefolio Personnel',
            description: 'Le portefolio que vous êtes en train de regarder en ce moment meme !',
            enLigne: true,
            tagsTechnologie: ['Next JS','Tailwind CSS','Typescript'],
            videoPresentation: 'https://www.youtube.com/embed/9WbCfHutDSE',
        }),
    ]

    return (
        <div className="mt-36 w-full">
            <h1 className="text-center text-lg text-red-600 xl:text-xl">Réalisations</h1>
            {projets[0]}
        </div>
    );
};

export default Realisation;
