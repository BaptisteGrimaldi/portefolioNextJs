import Link from 'next/link';
import React from 'react';

const Service = () => {
    return (
        <div className="mt-28 flex flex-col">
            <div className="textP mx-auto flex max-w-[600px] flex-col space-y-6 p-5 text-justify">
                <h1 className="textH1 text-center text-red-600">Services</h1>
                <p>- Création d&apos;un site internet / SaaS / Application Web : design , développement, mise en production.</p>
                <p>- Patch de bug et amélioration d&apos;un site site internet / SaaS / Application Web déjà existant.</p>
                <p>- Conseils en technologie pour vous guider dans les choix les plus pertinents et maximiser l&apos;efficacité de votre projet.</p>
            </div>
            <div className="textP mx-auto flex max-w-[600px] flex-col items-center space-y-6 p-5">
                <h1 className="textH1 text-center text-red-600">Tarification</h1>
                <p>En fonction de vos besoins , et sur devis.</p>
                <p>Je reste à votre disposition pour toute questions</p>
                <div className="boutonCyanCss cursor-pointer hover:scale-105">
                    <Link href={'./contact'}>Obtenir un devis !</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
