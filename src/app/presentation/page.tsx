import Image from 'next/image'

export default function Presentation() {
    return (
        <div className='flex h-3/6 mt-28 px-36'>
            <div className='w-6/12 flex justify-center'>
                <Image
                    src="/moiMidJourney.png"
                    alt="Description de l'image"
                    width={500} 
                    height={500}
                  />
            </div>

            <div className='w-6/12 flex justify-center items-center'>
                <div className='w-10/12 h-3/5 leading-8 flex flex-col justify-between'>
                    <p>Bonjour je m&apos;appelle Baptiste Grimaldi, je suis un développeur full stack autodidacte avec une préférence pour le backend. </p>
                    <p>La gestion d&apos;un projet web peut parfois ressembler à un véritable enfer , mais avec moi, vous en sortirez indemne et triomphant !</p>
                    <p>Êtes-vous prêt à transformer ce cauchemar en une success story ? Ne laissez pas votre projet web se perdre dans l&apos;obscurité !</p>
                </div>
            </div>
        </div>
    )}