'use client';

import Image from 'next/image';
import Temoignage from '../../../composants/presentation/Temoignage';
import {downloadFile} from '../../../utils/downloadFile';
import React, { useState, useEffect, useRef } from 'react';

export default function Presentation() {
    const temoignages = [
        Temoignage({
            citation: "'Je suis content du travail qu'a réalisé baptiste sur le développement de notre SaaS Express'",
            image: '/thomasMillet.webp',
            nom: 'Thomas Millet',
            poste: 'Product Owner',
            entreprise: 'MyConnectedCompany',
        }),
        Temoignage({
            citation: "'Désolé, en tant que développeur freelance junior, il m'est compliqué d'inventer 10 expériences quand on a que 21 ans. À un moment donné, il faut bien commencer quelque part !'",
            image: '/moiMidJourney.webp',
            nom: 'Votre serviteur',
            poste: 'Developpeur Web',
            entreprise: 'Moi-meme',
        }),
    ];

    const [indexTemoignage, setIndexTemoignage] = useState(0);
    const [temoignage, setTemoignage] = useState(temoignages[indexTemoignage]);

    const suivant = () => {
        setTemoignage((prevTemoignage) => {
            const newIndex = (indexTemoignage + 1) % temoignages.length;
            setIndexTemoignage(newIndex);
            return temoignages[newIndex];
        });
    };

    const precedent = () => {
        setTemoignage((prevTemoignage) => {
            const newIndex = (indexTemoignage - 1 + temoignages.length) % temoignages.length;
            setIndexTemoignage(newIndex);
            return temoignages[newIndex];
        });
    };

    
    return (
        <div className="mt-28 w-11/12 absolute left-1/2 transform -translate-x-1/2">
            <div className="flex h-3/6 flex flex-col items-center xl:flex flex-row">
                <div className="w-6/12 flex justify-center mb-6 xl:w-6/12">
                    <Image src="/moiMidJourney.webp" alt="avatarMidjourney" width={100} height={100} />
                </div>

                <div className="text-sm w-10/12 text-justify flex justify-center flex-col items-center md:text-lg xl:w-6/12">
                    <div className="w-10/12 h-3/5 flex flex-col justify-between">
                        <p>
                            Bonjour je m&apos;appelle <span className="text-cyan">Baptiste Grimaldi</span>, je suis un développeur full stack autodidacte avec une préférence pour le backend.{' '}
                        </p>
                        <br />
                        <p>
                            La gestion d&apos;
                            <span className="text-textRed">un projet web</span> peut parfois ressembler à un véritable <span className="text-textRed">enfer</span> , mais avec moi, vous en sortirez <span className="text-cyan">indemne</span> et <span className="text-cyan">triomphant !</span>
                        </p>
                        <br />
                        <p>
                            Êtes-vous prêt à transformer ce <span className="text-textRed">cauchemar</span> en une <span className="text-cyan">success story</span> ? Ne laissez pas votre projet web se perdre dans <span className="font-robotoBold">l&apos;obscurité</span> !
                        </p>
                    </div>
                    <div className="mt-8 bg-teal-500 px-2 pt-2 pb-1 rounded text-white hover:scale-105 cursor-pointer">
                        <p>Contactez-moi !</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center my-14">
                <iframe className="sm:w-[400px]" width="250" height="250" src="https://www.youtube.com/embed/g6RPzygnhho?si=gxX1tibgrAj8Jt7u" title="Test youtube" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

            <h1 className="text-lg text-textRed text-center mb-5 md:text-2xl">Témoignages</h1>

            <div className="absolute left-1/2 transform -translate-x-1/2 w-10/12 h-[326px]">
                <Image src={'/flecheDroiteBlanche.webp'} alt="Fleche Droite blanche" width={70} height={70} className="absolute right-2 top-1/2 transform -translate-y-1/2 flecheBlancheDroite" onClick={suivant} />
                <Image src={'/flecheDroiteBlanche.webp'} alt="Fleche Gauche blanche" width={70} height={70} className="absolute rotate-180 left-2 top-1/2 transform -translate-y-1/2 flecheBlancheGauche" onClick={precedent} />
                {temoignage}
            </div>

            <div className="w-9/12 mx-auto flex flex-col items-center mt-[380px] text-sm md:text-lg">
                <Image src={'/curriculumVitae.webp'} alt="Curriculum vitae" width={500} height={500} />
                <div className='flex flex-col items-center text-center mt-5'>
                    <div className='w-full'>
                        <p>Cv Baptiste Grimaldi</p>
                    </div>
                    <div className='flex items-center space-x-3 w-full justify-center mb-5 mt-3' onClick={()=>{downloadFile("cvBaptisteGrimaldi.pdf")}}>
                        <Image src={'/iconeTelechargement.webp'} alt="iconeDownload" width={20} height={20} className='cursor-pointer'/>
                        <p className='bg-teal-500 px-2 pt-2 pb-1 rounded text-white hover:scale-105 cursor-pointer'>Download</p>
                    </div>
                </div>
            </div>

            <p className='max-w-xs'>test dklfjlsqsqsqsqs qsqsqsqsqsqsqsqs qsqsqsqsqs qsqsqsqsqsqsqsqs qsqsqsqsqs qsqsqsqsqsqsqsq sqsqsqsq sqsqs</p>
        </div>
    );
}
