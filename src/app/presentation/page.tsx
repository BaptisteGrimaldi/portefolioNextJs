import Image from 'next/image'
import Temoignage from './composant/Temoignage'

const temoignages = [Temoignage({citation:"citation", image:"/moiMidJourney.png", nom:"nom", poste:"poste", entreprise:"entreprise"})];

// const [temoignage,setTemoignage] = temoignages[0];

export default function Presentation() {
    return (
        <div className='mt-28 px-36'>
            <div className='flex h-3/6 '>
                <div className='w-6/12 flex justify-center'>
                    <Image
                        src="/moiMidJourney.png"
                        alt="Description de l'image"
                        width={500} 
                        height={500}
                    />
                </div>

                <div className='w-6/12 flex justify-center items-center flex-col text-lg'>
                    <div className='w-10/12 h-3/5 flex flex-col justify-between'>
                        <p>Bonjour je m&apos;appelle <span className='text-cyan'>Baptiste Grimaldi</span>, je suis un développeur full stack autodidacte avec une préférence pour le backend. </p>
                        <p>La gestion d&apos;<span className='text-textRed'>un projet web</span> peut parfois ressembler à un véritable <span className='text-textRed'>enfer</span> , mais avec moi, vous en sortirez <span className='text-cyan'>indemne</span> et <span className='text-cyan'>triomphant !</span></p>
                        <p>Êtes-vous prêt à transformer ce <span className='text-textRed'>cauchemar</span> en une <span className='text-cyan'>success story</span> ? Ne laissez pas votre projet web se perdre dans <span className='font-robotoBold'>l&apos;obscurité</span> !</p>
                    </div>
                    <div className='mt-8 bg-teal-500 px-2 pt-2 pb-1 rounded text-white hover:scale-105 cursor-pointer'>
                        <p>Contactez-moi !</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-center my-28'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/g6RPzygnhho?si=gxX1tibgrAj8Jt7u" title="Test youtube" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

            <div className='text-center'>
                <h1 className='text-2xl text-textRed'>Témoignages</h1>
                <Temoignage citation="'Je suis content du travail qu'a réalisé baptiste sur le développement de notre SaS Express'" 
                image="/moiMidJourney.png" 
                nom="Thomas Millet" 
                poste="Product Owner" 
                entreprise="MyConnectedCompany" 
                />
                
            </div>

        </div>
        
    )}