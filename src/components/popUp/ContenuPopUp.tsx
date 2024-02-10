'use client';

import { useState } from 'react';
import { addLead } from '@/lib/actions/connectDb.action';
import Image from 'next/image';

const ContenuPopUp = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);
    const [insciptionNewsletter, setInsciptionNewsletter] = useState(false);

    const cherckerSiRempli = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (inputValue === '' || !emailRegex.test(inputValue)) {
            setError(true);
        } else {
            setError(false);
            setInsciptionNewsletter(true);
            await addLead(inputValue);
        }
    };
    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <Image src="/assetPresentation/newsletterIcone.png" alt="newsletter" width={25} height={25} />
                <h1 className="textH1 w-min whitespace-nowrap text-white">Newsletter Gratuite</h1>
            </div>
            <p className=" text-white">
                Ne manquez aucune <span className="underline underline-offset-2">nouveauté</span> , <span className="underline underline-offset-2">astuce</span> ou <span className="underline underline-offset-2">mise à jour</span> dans le monde du développement web.
                <br /> <br /> Inscrivez-vous gratuitement à ma newsletter hebdomadaire :
            </p>
            <input type="text" className=" w-full text-center" value={insciptionNewsletter ? '' : inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Votre Email" />
            {error && <p className="mx-auto w-min whitespace-nowrap text-black">Veuillez remplir le champ ci dessus.</p>}
            <button className="bgCouleurCyan mx-auto flex w-min justify-center whitespace-nowrap rounded px-4 py-1 text-white hover:scale-105 max-sm:mx-0 max-sm:whitespace-nowrap" onClick={cherckerSiRempli}>
                Je veux recevoir la newsletter
            </button>
            {insciptionNewsletter && <p className="mx-auto w-min whitespace-nowrap text-black">Vous êtes inscrit à la newsletter</p>}
        </>
    );
};

export default ContenuPopUp;
