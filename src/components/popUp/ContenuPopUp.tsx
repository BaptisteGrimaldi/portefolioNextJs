'use client';

import { useState } from 'react';

const ContenuPopUp = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);
    const [insciptionNewsletter, setInsciptionNewsletter] = useState(false);

    const cherckerSiRempli = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (inputValue === '' || !emailRegex.test(inputValue)) {
            setError(true);
        } else {
            setError(false);
            setInsciptionNewsletter(true);
        }
    };
    return (
        <>
            <h1 className="textH1 mx-auto w-min whitespace-nowrap text-white">Newsletter Gratuite</h1>
            <p className=" text-white">Ne manquez aucune tendance, astuce ou mise à jour dans le monde du développement web. Inscrivez-vous dès maintenant à ma newsletter hebdomadaire :</p>
            <input type="text" className=" w-full text-center" value={insciptionNewsletter ? '' : inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Votre Email" />
            {error && <p className="mx-auto w-min whitespace-nowrap text-black">Veuillez remplir le champ ci dessus.</p>}
            <button className="bgCouleurCyan mx-auto flex w-min justify-center whitespace-nowrap rounded px-4 py-1 text-white hover:scale-105" onClick={cherckerSiRempli}>
                Je veux recevoir la newsletter
            </button>
            {insciptionNewsletter && <p className="mx-auto w-min whitespace-nowrap text-black">Vous êtes inscrit à la newsletter</p>}
        </>
    );
};

export default ContenuPopUp;
