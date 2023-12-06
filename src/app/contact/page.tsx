import React from 'react';
import Image from 'next/image';

const Contact = () => {
    return (
        <div className="mt-28">
            <h1 className="textH1 text-center text-red-600">Contact</h1>
            <div className="mt-14 flex justify-center space-x-32">
                <div className="flex flex-col items-center justify-center">
                    <a target="_blank" href="https://calendly.com/grimaldi-baptiste/prise-de-contact-client">
                        <div className="boutonCyanCss cursor-pointer hover:scale-105">
                            <p>Prendre Rendez-vous</p>
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
