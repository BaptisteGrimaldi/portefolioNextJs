import React from 'react';
import Image from 'next/image';

const Contact = () => {
    return (
        <div className="mt-28">
            <h1 className="textH1 text-center text-red-600">Contact</h1>
            <div className="textP mb-10 mt-5 flex flex-col items-center justify-center space-y-10 px-4 md:flex-row md:space-x-32 md:space-y-0">
                <div className="flex flex-col items-center justify-center">
                    <a target="_blank" href="https://calendly.com/grimaldi-baptiste/prise-de-contact-client">
                        <div className="rounded bg-bouton px-3 pt-1 text-white hover:scale-105">
                            <p>Reserver un rendez-vous</p>
                        </div>
                        <Image src="/assetContact/logoCalendly.webp" alt="logo Calendly" width={200} height={200}></Image>
                    </a>
                    <p>Localisation : teletravail et ile de France</p>
                </div>
                <Image src={'/assetContact/baptisteGrimaldi.webp'} alt="photo de Baptiste Grimaldi" width={300} height={300}></Image>
            </div>
        </div>
    );
};

export default Contact;
