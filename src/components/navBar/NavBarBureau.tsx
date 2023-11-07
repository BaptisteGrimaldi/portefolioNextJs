
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { demandeSwitchNavBar } from '@/components/navBar/function/demandeSwitchNavBar'

type Props = {
    visible: boolean;
    switchNavBar: () => void;
};

const NavBarBureau = (props:Props) => {

    // "border-b-2 border-solid border-teal-500"


    const [addStyleBarreDefilement, setAddStyleBarreDefilement] = useState({
        presentation: "",
        competences: "",
        realisation: "",
        services: ""
      });

      function presentationAddStyleBarreDefilement () {
        setAddStyleBarreDefilement({
          presentation: "border-b-2 border-solid border-teal-500",
          competences: "",
          realisation: "",
          services: ""
        })
      }

    if (props.visible) {
        return (
            <header className="w-full bg-red-600 h-20 fixed top-0 left-0 z-10">
                <div className="h-full flex items-center pl-5 md:hidden" onClick={() => demandeSwitchNavBar(props)}>
                    <Image src="/barreMenu.webp" alt="icone Menu" width={40} height={40} />
                </div>

                <div className="hidden md:flex text-sm">
                    <div className="w-4/12 flex justify-center">
                        <div className="flex justify-between">
                            <div className="mr-4">
                                <Image src="/moiMidJourney.webp" alt="Description de l'image" width={65} height={70} className="rounded-full my-2" />
                            </div>

                            <div className="flex items-center">
                                <p className="text-white">BAPTISTE GRIMALDI</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-8/12 flex  justify-center">
                        <div className="flex justify-between  items-center text-white space-x-5 lg:space-x-14 xl:space-x-20">
                            <div className={` ${addStyleBarreDefilement.presentation} mt-1`} onClick={presentationAddStyleBarreDefilement}>
                                <p className="hover:scale-105 hover:opacity-50 cursor-pointer">
                                    <Link href="./presentation">Présentation</Link>
                                </p>
                            </div>

                            <div className={` ${addStyleBarreDefilement.competences} mt-1`}>
                                <p className="hover:scale-105 hover:opacity-50 cursor-pointer">
                                    <Link href="./competences">Compétences</Link>
                                </p>
                            </div>
                            <div className={` ${addStyleBarreDefilement.realisation} mt-1`}>
                                <p className="hover:scale-105 hover:opacity-50 cursor-pointer">
                                    <Link href="./realisations">Réalisations</Link>
                                </p>
                            </div>
                            <div className={` ${addStyleBarreDefilement.services} mt-1`}>
                                <p className="hover:scale-105 hover:opacity-50 cursor-pointer">
                                    <Link href="./services">Services</Link>
                                </p>
                            </div>
                            <div className="bg-teal-500 text-white pt-2 px-2 pb-1 rounded hover:scale-105 cursor-pointer mb-1">
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    } else {
        return null;
    }
};

export default NavBarBureau;
