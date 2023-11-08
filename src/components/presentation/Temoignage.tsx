import Image from 'next/image';

type TemoignageProps = {
    citation: string;
    image: string;
    nom: string;
    poste: string;
    entreprise: string;
};

export default function Temoignage({ citation, image, nom, poste, entreprise }: TemoignageProps) {
    return (
        <div className="h-80 w-full text-sm text-white md:text-lg">
            <div className="flex h-[326px] w-full flex-col justify-center rounded bg-red-600 p-5 text-center">
                <p className="custom-max-300-xs mx-auto w-10/12">{citation}</p>
                <Image src={image} alt="Photo de profil" width={90} height={90} className="mx-auto my-2 rounded-full" />
                <div className="mx-auto">
                    <p className="">{nom}</p>
                    <p>{poste}</p>
                    <p>{entreprise}</p>
                </div>
            </div>
        </div>
    );
}
