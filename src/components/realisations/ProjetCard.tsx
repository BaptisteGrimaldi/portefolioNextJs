import { TProjet } from '@/type';
import Image from 'next/image';

const ProjetCard = ({ nomProjet, description, enLigne, lienRepo, tagsTechnologie, videoPresentation, date }: TProjet) => {
    return (
        <div className="textP mt-5 flex flex-col">
            <h1 className="textH1 w-full text-center text-red-600">{nomProjet}</h1>
            <p className="mx-auto mt-4 max-w-[450px] text-justify">{description}</p>

            <div className="mt-4 flex justify-center">
                <div className={`${enLigne !== '' ? 'block' : 'hidden'} flex w-24 flex-col items-center`}>
                    <p className={` ${enLigne !== '' ? 'block' : 'hidden'} mt-4 w-min whitespace-nowrap `}>
                        <a href={`${enLigne}`} target="_blank" rel="noopener noreferrer">
                            Voir le site
                        </a>
                    </p>
                    <div className={`${enLigne !== '' ? 'block' : 'hidden'} h-1 w-24 whitespace-nowrap bg-gradient-to-r from-textRed to-cyan `}></div>
                </div>
                <div className={`${lienRepo !== '' ? 'block' : 'hidden'} flex w-24 justify-center`}>
                    <a href={`${lienRepo}`} target="_blank" rel="noopener noreferrer">
                        <Image src="/assetRealisations/logoGithub.webp" alt="github logo" width={80} height={60} />
                    </a>
                </div>
            </div>

            <div className="mt-5 flex w-full max-w-[450px] flex-row flex-wrap justify-center">
                {tagsTechnologie.map((tech, index) => (
                    <p key={index} className="mr-5 mt-3 rounded bg-teal-500 px-2 pb-1 pt-2 text-white">
                        {tech}
                    </p>
                ))}
            </div>
            <div className="flex justify-center">
                <iframe
                    className="mt-7 sm:w-[400px]"
                    width="250"
                    height="250"
                    src={`https://www.youtube.com/embed/${videoPresentation}`}
                    title="Test youtube"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>{' '}
            </div>
            <p className="mt-5 text-center">Fait en : {date}</p>
        </div>
    );
};

export default ProjetCard;
