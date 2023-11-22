type ProjetCardProps = {
    nomProjet: string;
    description: string;
    enLigne: boolean;
    tagsTechnologie: string[];
    videoPresentation: string;
};

const ProjetCard = ({ nomProjet, description, enLigne, tagsTechnologie, videoPresentation }: ProjetCardProps) => {
    return (
        <div className="textP mt-5 flex w-full flex-col">
            <h1 className="textH1 w-full text-center text-red-600">{nomProjet}</h1>
            <p className="mt-4 text-justify">{description}</p>

            <div className={`${enLigne === true ? 'block' : 'hidden'} mx-auto flex w-24 flex-col items-center`}>
                <p className={` ${enLigne === true ? 'block' : 'hidden'} mt-4 w-min whitespace-nowrap `}>Voir le site</p>
                <div className={`${enLigne === true ? 'block' : 'hidden'} h-1 w-24 whitespace-nowrap bg-gradient-to-r from-textRed to-cyan `}></div>
            </div>
            <div className="mt-5 flex w-full flex-row flex-wrap ">
                {tagsTechnologie.map((tech, index) => (
                    <p key={index} className="mr-5 mt-3 rounded bg-teal-500 px-2 pb-1 pt-2 text-white">
                        {tech}
                    </p>
                ))}
            </div>

            <iframe className="mt-7 sm:w-[400px]" width="250" height="250" src={videoPresentation} title="Test youtube" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    );
};

export default ProjetCard;
