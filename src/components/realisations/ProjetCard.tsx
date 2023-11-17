
type ProjetCardProps = {
    nomProjet: string;
    description: string;
    enLigne: boolean;
    tagsTechnologie: string[];
    videoPresentation: string;
};

const ProjetCard = ({ nomProjet, description, enLigne, tagsTechnologie, videoPresentation }: ProjetCardProps) => {
    return (
        <div  className="mt-5 flex flex-col">
            <h1 className="w-full text-center">{nomProjet}</h1>
            <p>{description}</p>
            <div>
                <p className={` ${enLigne === true ? 'block' : 'hidden'} `}>Voir le site</p>
                <div className="flex">
                    {tagsTechnologie.map((tech, index) => (
                        <p key={index}>{tech}</p>
                    ))}
                </div>
            </div>
            <iframe className="sm:w-[400px]" width="250" height="250" src={videoPresentation} title="Test youtube" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    );
};

export default ProjetCard;

