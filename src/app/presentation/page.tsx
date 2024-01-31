'use client';
import Image from 'next/image';
import React, {  useEffect, useState } from 'react';

import { downloadFile } from '@/utils/downloadFile';
import temoignages from '../../const/temoignage';
import connectDb from '@/lib/actions/connectDb.action';


const Presentation = () => {
    const [indexTemoignage, setIndexTemoignage] = useState(0);
    const [temoignage, setTemoignage] = useState(temoignages[indexTemoignage]);

    const suivant = () => {
        setTemoignage(() => {
            const newIndex = (indexTemoignage + 1) % temoignages.length;
            setIndexTemoignage(newIndex);
            return temoignages[newIndex];
        });
    };

    const precedent = () => {
        setTemoignage(() => {
            const newIndex = (indexTemoignage - 1 + temoignages.length) % temoignages.length;
            setIndexTemoignage(newIndex);
            return temoignages[newIndex];
        });
    };

    useEffect(() => {
        connectDb();
    }, []);


    return (
        <div className="absolute left-1/2 z-0 mt-28 w-11/12 -translate-x-1/2">
            <div className="mx-auto flex h-3/6 max-w-6xl flex-col items-center lg:flex-row ">
                <div className="mb-6 flex w-6/12 justify-center xl:w-6/12 ">
                    <Image src="/assetPresentation/moiMidJourney.webp" alt="avatarMidjourney" width={500} height={500} />
                </div>

                <div className="textP flex w-10/12 flex-col items-center justify-center text-justify xl:w-6/12">
                    <div className="flex h-3/5 w-10/12 flex-col justify-between ">
                        <p>
                            Bonjour je m&apos;appelle <span className="text-cyan">Baptiste Grimaldi</span>, je suis un développeur web <span className="text-red-600">full-stack</span> <span className="text-red-600">autodidacte</span> avec une préférence pour le backend.
                        </p>
                        <br />
                        <p>
                            Je souhaite travailler avec des <span className="font-semibold">start-ups</span> , des <span className="font-semibold">TPE</span> ou des <span className="font-semibold">PME</span> car j&apos;apprécie beaucoup la culture entrepreneuriale, qui offre un terrain propice à une
                            prise de responsabilités et à l&apos;autonomie.
                        </p>
                        <br />
                        <p>Hormis cela, j&apos;aime beaucoup l&apos;économie et les marchés financiers. Ainsi que le jeux vidéo Civilization 6, et le jeu de cartes Magic: The Gathering.</p>
                    </div>
                    <div className="boutonCyanCss cursor-pointer hover:scale-105">
                        <a href="https://calendly.com/grimaldi-baptiste/prise-de-contact-client" target="_blank">
                            Reserver un rendez-vous
                        </a>
                    </div>
                </div>
            </div>

            <div className="my-14 flex justify-center">
                <iframe
                    className="sm:w-[400px]"
                    width="250"
                    height="250"
                    src="https://www.youtube.com/embed/yAdnrxeNhCE?si=HQ4F12tE0Xs9mvAk"
                    title="YouTube video fast and Curious"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            <h1 className="mb-5 text-center text-lg text-textRed md:text-2xl">Témoignages</h1>

            <div className="absolute left-1/2 h-[326px] w-10/12 max-w-5xl -translate-x-1/2">
                <Image src={'/assetPresentation/flecheDroiteBlanche.webp'} alt="Fleche Droite blanche" width={70} height={70} className="absolute right-0 top-1/2 -translate-y-1/2 max-[320px]:scale-75" onClick={suivant} />
                <Image src={'/assetPresentation/flecheDroiteBlanche.webp'} alt="Fleche Gauche blanche" width={70} height={70} className="absolute left-0 top-[50.5%] -translate-y-1/2 rotate-180 max-[320px]:scale-75" onClick={precedent} />
                {temoignage}
            </div>

            <div className="mx-auto mb-14 mt-[380px] flex w-9/12 max-w-3xl flex-col place-content-between items-center text-sm md:text-lg lg:flex-row">
                <Image src={'/assetPresentation/curriculumVitae.webp'} alt="Curriculum vitae" width={500} height={500} />
                <div className="mt-5 flex flex-col items-center text-center">
                    <div className="w-full">
                        <p>Cv Baptiste Grimaldi</p>
                    </div>
                    <div className="mb-5 mt-3 flex w-full items-center justify-center space-x-3">
                        <Image
                            src={'/assetPresentation/iconeTelechargement.webp'}
                            alt="iconeDownload"
                            width={20}
                            height={20}
                            className="cursor-pointer hover:scale-105"
                            onClick={() => {
                                downloadFile('/assetPresentation/cvBaptisteGrimaldi.pdf');
                            }}
                        />
                        <button
                            className="cursor-pointer rounded bg-teal-500 px-2 pb-1 pt-2 text-white hover:scale-105"
                            onClick={() => {
                                downloadFile('/assetPresentation/cvBaptisteGrimaldi.pdf');
                            }}
                        >
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentation;
