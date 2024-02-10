'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import ContenuPopUp from './ContenuPopUp';

const PopUp = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const fermerPopUp = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && (
                <div className="fixed inset-0 z-[100] bg-slate-500/90">
                    <div className="textP absolute inset-0 m-auto flex h-[350px] w-[500px] flex-col justify-center gap-y-6 rounded bg-red-700 p-6 max-sm:h-[380px] max-sm:w-[280px]">
                        <Image src="/assetPresentation/croixBlanche.png" alt="croixBlanche" width={25} height={25} className="absolute right-5 top-4" onClick={fermerPopUp} />
                        <ContenuPopUp />
                    </div>
                </div>
            )}
        </>
    );
};

export default PopUp;
