'use client';
import React, { useEffect, useState } from 'react';
import { TProjet } from '@/type';
const MenuProjet = ({ projets }: { projets: TProjet[] }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

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

    useEffect(() => {
        console.log('log de fin', isSmallScreen);
    }, [isSmallScreen]);

    return (
        <div className="textP mt-5 flex max-h-[150px] max-w-[300px] flex-col items-center justify-center space-y-2 whitespace-nowrap border p-2 text-center md:ml-10">
            {projets.map((projet: TProjet, index: number) => (
                <p
                    key={index}
                    className="cursor-pointer"
                    onClick={() => {
                        const idProjetElement = document.getElementById(projet.nomProjet);
                        if (idProjetElement && isSmallScreen) {
                            const rect = idProjetElement.getBoundingClientRect();
                            window.scrollTo({
                                top: rect.top + window.pageYOffset + -100,
                                behavior: 'smooth',
                            });
                        }

                        if(isSmallScreen === false){
                            console.log("lol")
                            // c'est sa a continuer le comportement est le bon 
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
