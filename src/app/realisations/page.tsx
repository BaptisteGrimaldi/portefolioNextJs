'use client';
import MenuProjet from '@/components/realisations/MenuProjet';
import ProjetCard from '@/components/realisations/ProjetCard';
import { useEffect, useState } from 'react';
import { listeProjets } from '../../const/listeProjets';

const Realisation = () => {
    const [indexProjet, setIndexProjet] = useState(0);

    const handleChangeIndex = (index: number) => {
        setIndexProjet(index);
    };

    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setMobile(true);
        } else {
            setMobile(false);
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        });
    }, []);

    return (
        <div className="mt-36 w-full">
            <div className="mx-auto mb-10 flex w-11/12 max-w-[1150px] flex-col items-center md:flex md:flex-row-reverse md:place-content-around md:items-baseline">
                <div className="flex flex-col items-center">
                    <h1 className="textH1 text-red-600 md:ml-10">Projets</h1>
                    <MenuProjet projets={listeProjets} indexProjet={0} onChangeIndex={handleChangeIndex} />
                </div>
                {mobile && (
                    <div>
                        {listeProjets.map((projet, index) => (
                            <div id={projet.nomProjet} key={index}>
                                <ProjetCard {...projet} />
                            </div>
                        ))}
                    </div>
                )}
                <div className="hidden md:block">
                    <ProjetCard {...listeProjets[indexProjet]} />
                </div>
            </div>
        </div>
    );
};

export default Realisation;
