'use client';
import React from 'react';
import { TProjet } from '@/type';
const MenuProjet = ({ projets }: { projets: TProjet[] }) => {
    return (
        <div className="textP mt-5 flex max-h-[150px] max-w-[300px] flex-col items-center justify-center space-y-2 whitespace-nowrap border p-2 text-center md:ml-10">
            {projets.map((projet: TProjet, index: number) => (
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
    );
};

export default MenuProjet;
