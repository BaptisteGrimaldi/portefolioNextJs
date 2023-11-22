"use client";
import React from 'react'
import { TProjet } from '@/type';
const MenuProjet = ({projets}: {projets: TProjet[]}) => {
  return (
    <div className="mt-5 flex flex-col items-center justify-center space-y-2 whitespace-nowrap border p-2 text-center">
    {projets.map((projet:TProjet, index:number) => (
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
  )
}

export default MenuProjet