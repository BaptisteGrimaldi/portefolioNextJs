import MenuProjet from '@/components/realisations/MenuProjet';
import ProjetCard from '@/components/realisations/ProjetCard';

import { listeProjets } from '../../const/listeProjets';

const Realisation = () => {
    return (
        <div className="mt-36 w-full">
            <div className="mx-auto flex w-11/12 max-w-[1150px] flex-col items-center md:flex md:flex-row-reverse md:place-content-around md:items-baseline">
                <div className="flex flex-col items-center">
                    <h1 className="textH1 text-red-600 md:ml-10">Projets</h1>
                    <MenuProjet projets={listeProjets} />
                </div>
                <div className="md:hidden">
                    {listeProjets.map((projet, index) => (
                        <div id={projet.nomProjet} key={index}>
                            <ProjetCard {...projet} />
                        </div>
                    ))}
                </div>
                <div className="hidden md:block">
                    <ProjetCard {...listeProjets[0]} />
                </div>
            </div>
        </div>
    );
};

export default Realisation;
