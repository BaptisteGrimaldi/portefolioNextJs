'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const PopUp = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('popupShown')) {
            setShowPopup(true);
            localStorage.setItem('popupShown', 'true');
        }
    }, []);

    const handleClick = () => {
        if (inputValue === '') {
            setError(true);
        } else {
            setError(false);
        }
    };

    return <>{showPopup && 
    <div className="fixed inset-0 z-[100] bg-slate-500/90">
        <div className='textP absolute inset-0 m-auto flex h-[350px] w-[500px] flex-col justify-center gap-y-6 rounded bg-red-700 p-6'>
            <Image src="/assetPresentation/croixBlanche.png" alt="croixBlanche" width={25} height={25} className='absolute right-5 top-4'/>
            <h1 className='textH1 mx-auto w-min text-white'>Newsletter</h1>
            <p className=' text-white'>Ne manquez aucune tendance, astuce ou mise à jour dans le monde du développement web. Inscrivez-vous dès maintenant à ma newsletter hebdomadaire :</p>
            <input type="text" className=' w-full text-center' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            {error && <p className='mx-auto w-min whitespace-nowrap text-black'>Veuillez remplir le champ ci dessus.</p>}
            <button className='bgCouleurCyan mx-auto flex w-min justify-center whitespace-nowrap rounded px-4 py-1 text-white hover:scale-105' onClick={handleClick}>Je veux recevoir la newsletter</button>
        </div>
    </div>}</>;
};

export default PopUp;
