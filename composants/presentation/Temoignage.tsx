import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

interface TemoignageProps {
    citation: string;
    image: string;
    nom: string;
    poste: string;
    entreprise: string;
}


export default function Temoignage({ citation, image, nom, poste, entreprise }: TemoignageProps) {

    return (
        <div className="text-white w-full text-sm h-80 md:text-lg">
            <div className="w-full bg-red-600 text-center rounded h-[326px] p-5 flex flex-col justify-center">
                <p className="custom-max-300-xs">{citation}</p>
                <Image src={image} alt="Photo de profil" width={90} height={90} className="mx-auto my-2 rounded-full" />
                <div className="mx-auto">
                    <p className="">{nom}</p>
                    <p>{poste}</p>
                    <p>{entreprise}</p>
                </div>
            </div>
        </div>
    );
}
