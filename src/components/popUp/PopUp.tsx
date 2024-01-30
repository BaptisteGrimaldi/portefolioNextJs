'use client';

import { useEffect, useState } from 'react';

const PopUp = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('popupShown')) {
            setShowPopup(true);
            localStorage.setItem('popupShown', 'true');
        }
    }, []);

    return <>{showPopup && <div className="fixed inset-0 z-[100] bg-slate-500 opacity-90"></div>}</>;
};

export default PopUp;
