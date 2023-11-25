import { TProjet } from '@/type';
// import Link from "next/link";

const ProjetCard = ({ nomProjet, description, enLigne, tagsTechnologie, videoPresentation }: TProjet) => {
    return (
        <div className="textP mt-5 flex flex-col">
            <h1 className="textH1 w-full text-center text-red-600">{nomProjet}</h1>
            <p className="mx-auto mt-4 max-w-[450px] text-justify">{description}</p>

            <div className={`${enLigne !== '' ? 'block' : 'hidden'} mx-auto flex w-24 flex-col items-center`}>
                <p className={` ${enLigne !== '' ? 'block' : 'hidden'} mt-4 w-min whitespace-nowrap `}>
                    <a href={`${enLigne}`} target="_blank" rel="noopener noreferrer">
                        Voir le site
                    </a>
                </p>
                <div className={`${enLigne !== '' ? 'block' : 'hidden'} h-1 w-24 whitespace-nowrap bg-gradient-to-r from-textRed to-cyan `}></div>
            </div>
            <div className="mt-5 flex w-full flex-row flex-wrap justify-center ">
                {tagsTechnologie.map((tech, index) => (
                    <p key={index} className="mr-5 mt-3 rounded bg-teal-500 px-2 pb-1 pt-2 text-white">
                        {tech}
                    </p>
                ))}
            </div>
            <div className='flex justify-center'>
                <iframe className="mt-7 sm:w-[400px]" width="250" height="250" src={videoPresentation} title="Test youtube" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default ProjetCard;
