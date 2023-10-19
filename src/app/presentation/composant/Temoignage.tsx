import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

interface TemoignageProps {
    citation: string;
    image: string;
    nom: string;
    poste: string;
    entreprise: string;
}

export default function Temoignage({
    citation,
    image,
    nom,
    poste,
    entreprise,
}: TemoignageProps) {
    return (
        <div className="flex justify-center text-white w-full h-[250px]">
            <div className="w-full bg-red-600 text-center rounded p-5">
                <p className="">{citation}</p>
                <Image
                    src={image}
                    alt="Photo de profil"
                    width={90}
                    height={90}
                    className="mx-auto my-2 rounded-full"
                />
                <div className="mx-auto">
                    <p className="">{nom}</p>
                    <p>{poste}</p>
                    <p>{entreprise}</p>
                </div>
            </div>
        </div>
    );
}
