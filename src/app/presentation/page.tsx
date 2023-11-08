'use client';

import Image from 'next/image';
import Temoignage from '../../components/presentation/Temoignage';
import { downloadFile } from '../../utils/downloadFile';
import React, { useState } from 'react';

const Presentation = () => {
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
        <div className="absolute left-1/2 z-0 mt-28 w-11/12 -translate-x-1/2">
            <div className="mx-auto flex h-3/6 max-w-6xl flex-col items-center lg:flex-row ">
                <div className="mb-6 flex w-6/12 justify-center xl:w-6/12 ">
                    <Image src="/moiMidJourney.webp" alt="avatarMidjourney" width={500} height={500} />
                </div>

                <div className="flex w-10/12 flex-col items-center justify-center text-justify text-sm md:text-lg xl:w-6/12">
                    <div className="flex h-3/5 w-10/12 flex-col justify-between ">
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
                    <div className="mt-8 cursor-pointer rounded bg-teal-500 px-2 pb-1 pt-2 text-white hover:scale-105">
                        <p>Contactez-moi !</p>
                    </div>
                </div>
            </div>

            <div className="my-14 flex justify-center">
                <iframe
                    className="sm:w-[400px]"
                    width="250"
                    height="250"
                    src="https://www.youtube.com/embed/g6RPzygnhho?si=gxX1tibgrAj8Jt7u"
                    title="Test youtube"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            <h1 className="mb-5 text-center text-lg text-textRed md:text-2xl">Témoignages</h1>

            <div className="absolute left-1/2 h-[326px] w-10/12 max-w-5xl -translate-x-1/2">
                <Image src={'/flecheDroiteBlanche.webp'} alt="Fleche Droite blanche" width={70} height={70} className="flecheBlancheDroite absolute right-2 top-1/2 -translate-y-1/2" onClick={suivant} />
                <Image src={'/flecheDroiteBlanche.webp'} alt="Fleche Gauche blanche" width={70} height={70} className="flecheBlancheGauche absolute left-2 top-1/2 -translate-y-1/2 rotate-180" onClick={precedent} />
                {temoignage}
            </div>

            <div className="mx-auto mb-14 mt-[380px] flex w-9/12 max-w-3xl flex-col place-content-between items-center text-sm md:text-lg lg:flex-row">
                <Image src={'/curriculumVitae.webp'} alt="Curriculum vitae" width={500} height={500} />
                <div className="mt-5 flex flex-col items-center text-center">
                    <div className="w-full">
                        <p>Cv Baptiste Grimaldi</p>
                    </div>
                    <div
                        className="mb-5 mt-3 flex w-full items-center justify-center space-x-3"
                        onClick={() => {
                            downloadFile('cvBaptisteGrimaldi.pdf');
                        }}
                    >
                        <Image src={'/iconeTelechargement.webp'} alt="iconeDownload" width={20} height={20} className="cursor-pointer hover:scale-105" />
                        <p className="cursor-pointer rounded bg-teal-500 px-2 pb-1 pt-2 text-white hover:scale-105">Download</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentation;
