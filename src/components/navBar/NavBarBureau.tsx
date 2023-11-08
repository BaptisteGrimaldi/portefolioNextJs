
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
            <header className="fixed left-0 top-0 z-10 h-20 w-full bg-red-600">
                <div className="flex h-full items-center pl-5 md:hidden" onClick={() => demandeSwitchNavBar(props)}>
                    <Image src="/barreMenu.webp" alt="icone Menu" width={40} height={40} />
                </div>

                <div className="hidden text-sm md:flex">
                    <div className="flex w-4/12 justify-center">
                        <div className="flex justify-between">
                            <div className="mr-4">
                                <Image src="/moiMidJourney.webp" alt="Description de l'image" width={65} height={70} className="my-2 rounded-full" />
                            </div>

                            <div className="flex items-center">
                                <p className="text-white">BAPTISTE GRIMALDI</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-8/12  justify-center">
                        <div className="flex items-center  justify-between space-x-5 text-white lg:space-x-14 xl:space-x-20">
                            <div className={` ${addStyleBarreDefilement.presentation} mt-1`} onClick={presentationAddStyleBarreDefilement}>
                                <p className="cursor-pointer hover:scale-105 hover:opacity-50">
                                    <Link href="./presentation">Présentation</Link>
                                </p>
                            </div>

                            <div className={` ${addStyleBarreDefilement.competences} mt-1`}>
                                <p className="cursor-pointer hover:scale-105 hover:opacity-50">
                                    <Link href="./competences">Compétences</Link>
                                </p>
                            </div>
                            <div className={` ${addStyleBarreDefilement.realisation} mt-1`}>
                                <p className="cursor-pointer hover:scale-105 hover:opacity-50">
                                    <Link href="./realisations">Réalisations</Link>
                                </p>
                            </div>
                            <div className={` ${addStyleBarreDefilement.services} mt-1`}>
                                <p className="cursor-pointer hover:scale-105 hover:opacity-50">
                                    <Link href="./services">Services</Link>
                                </p>
                            </div>
                            <div className="mb-1 cursor-pointer rounded bg-teal-500 px-2 pb-1 pt-2 text-white hover:scale-105">
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
