import Image from 'next/image'

interface TemoignageProps {
    citation: string;
    image: string;
    nom: string;
    poste: string;
    entreprise: string;
  }

export default function Temoignage({citation, image, nom , poste , entreprise}: TemoignageProps) {
    return (
        <div className='flex justify-center mb-28'>
            <div className='mt-[34px] bg-red-600 px-2 py-5 w-10/12 rounded-lg text-white'>
                <p className='text-lg'>{citation}</p>
                <div className='flex justify-center'>
                    <div className='w-6/12 flex justify-center'>
                        <Image
                            src={image}
                            alt="Description de l'image"
                            width={50} 
                            height={50}
                        />
                    </div>
                </div>
                <div className='justify-center flex flex-col text-lg'>
                    <p className='text-lg font-robotoBold'>{nom}</p>
                    <p>{poste}</p>
                    <p>{entreprise}</p>

                </div>
            </div>
        </div>
    )
}