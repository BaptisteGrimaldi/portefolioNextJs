'use client';
import React, { useEffect, useState } from 'react';
import { TProjet } from '@/type';
const MenuProjet = ({ projets, indexProjet, onChangeIndex }: { projets: TProjet[]; indexProjet: number; onChangeIndex: (a: number) => void }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const [indexFinal, setIndexFinal] = useState(0);

    useEffect(() => {
        onChangeIndex(indexFinal);
    }, [indexFinal, onChangeIndex]);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                setIsSmallScreen(true);
            } else {
                setIsSmallScreen(false);
            }
        });
    }, []);

    return (
        <div className="textP relative mt-5 flex max-h-[150px] w-[300px]  max-w-[500px] flex-col items-center justify-center space-y-2 whitespace-nowrap border-hidden p-2 text-center md:ml-10">
            <div className="absolute top-0 mx-auto h-1 w-[250px] border-hidden md:w-[300px]">
                <div className="gradient-border-t"></div>
                <div className="gradient-border-l"></div>
            </div>
            {projets.map((projet: TProjet) => (
                <button
                    key={projet.nomProjet}
                    className="cursor-pointer"
                    onClick={(e) => {
                        const idProjetElement = document.getElementById(projet.nomProjet);
                        if (idProjetElement && isSmallScreen) {
                            const rect = idProjetElement.getBoundingClientRect();
                            window.scrollTo({
                                top: rect.top + window.scrollY + -100,
                                behavior: 'smooth',
                            });
                        }

                        if (isSmallScreen === false) {
                            const projetSelectionner = e.target as HTMLElement;
                            const valueProjetSelectionner = projetSelectionner.textContent;
                            const indexProjet = projets.findIndex((projet) => projet.nomProjet === valueProjetSelectionner);
                            setIndexFinal(indexProjet);
                        }
                    }}
                >
                    {projet.nomProjet}
                </button>
            ))}
        </div>
    );
};

export default MenuProjet;
