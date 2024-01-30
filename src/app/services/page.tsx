const Service = () => {
    return (
        <div className="mt-28 flex flex-col">
            <h1 className="textH1 text-center text-red-600">Services</h1>
            <div className="textP mx-auto mt-14 flex flex-col gap-y-20 text-base">
                <div className=" w-[400px] rounded bg-red-600 p-8 text-white">
                    <h1 className="mx-auto max-w-[200px] rounded border-2 border-solid py-2 text-center text-base ">
                        Forfait Classic <br />
                        300€/jour
                    </h1>
                    <div className="mx-auto mt-5 flex flex-col gap-y-6 ">
                        <p>-Création d’un site internet / SaaS / Application Web</p>
                        <p>-Maquette figma</p>
                        <p>-Conseils en technologie pour vous guider dans les choix les plus pertinents et maximiser l&rsquo;efficacité de votre projet.</p>
                    </div>
                    <div className="boutonCyanCss mx-auto cursor-pointer hover:scale-105">
                        <a href="https://calendly.com/grimaldi-baptiste/prise-de-contact-client" target="_blank">
                            Reserver un rendez-vous
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
