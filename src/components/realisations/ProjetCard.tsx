type ProjetCardProps = {
    nomProjet: string;
    description: string;
    enLigne: boolean;
    tagsTechnologie: string[];
    videoPresentation: string;
};

const ProjetCard = ({ nomProjet, description, enLigne, tagsTechnologie, videoPresentation }: ProjetCardProps) => {
    return (
        <div className="text mt-5 flex w-full flex-col">
            <h1 className="w-full text-red-600">{nomProjet}</h1>
            <p className="mt-4">{description}</p>
            <div>
                <p className={` ${enLigne === true ? 'block' : 'hidden'} `}>Voir le site</p>
                <div className="mt-7 w-full flex-col space-y-7">
                    {tagsTechnologie.map((tech, index) => (
                        <p key={index} className="w-min rounded bg-teal-500 px-2 pb-1 pt-2 text-white">
                            {tech}
                        </p>
                    ))}
                </div>
            </div>
            <iframe className="mt-7 sm:w-[400px]" width="250" height="250" src={videoPresentation} title="Test youtube" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    );
};

export default ProjetCard;
