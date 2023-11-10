import Image from 'next/image';
import Link from 'next/link';
import { demandeSwitchNavBar } from '@/components/navBar/function/demandeSwitchNavBar';

type Props = {
    visible: boolean;
    switchNavBar: () => void;
};

const NavBarPhone = (props: Props) => {
    if (props.visible) {
        return (
            <header className="fixed left-0 top-0 z-50 h-full w-full bg-red-600">
                <Image src="/assetPresentation/barreMenu.webp" alt="icone Menu" width={40} height={40} className="ml-5 mt-5" onClick={() => demandeSwitchNavBar(props)} />
                <div className=" flex h-full flex-col items-center text-base ">
                    <div className=" mt-9 flex justify-center">
                        <div className="flex flex-col  items-center space-y-3">
                            <Image src="/assetPresentation/moiMidJourney.webp" alt="Avatar Midjourney" width={180} height={180} className="rounded-full" />
                            <div className="flex items-center">
                                <p className="text-white">BAPTISTE GRIMALDI</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-7  flex justify-center">
                        <div className="flex flex-col items-center  justify-between space-y-6 text-center text-white">
                            <div className="w-32 cursor-pointer rounded bg-red-700 px-2 pb-1 pt-2 text-white hover:scale-105" onClick={() => demandeSwitchNavBar(props)}>
                                <p className="cursor-pointer hover:scale-105 hover:opacity-50">
                                    <Link href="./presentation">Présentation</Link>
                                </p>
                            </div>
                            <div className="w-32 cursor-pointer rounded bg-red-700 px-2 pb-1 pt-2 text-white hover:scale-105" onClick={() => demandeSwitchNavBar(props)}>
                                <p className="cursor-pointer hover:scale-105 hover:opacity-50">
                                    <Link href="./competences">Compétences</Link>
                                </p>
                            </div>
                            <div className="w-32 cursor-pointer rounded bg-red-700 px-2 pb-1 pt-2 text-white hover:scale-105">
                                <p className="cursor-pointer hover:scale-105 hover:opacity-50">Réalisations</p>
                            </div>
                            <div className="w-32 cursor-pointer rounded bg-red-700 px-2 pb-1 pt-2 text-white hover:scale-105">
                                <p className="cursor-pointer hover:scale-105 hover:opacity-50">Services</p>
                            </div>
                            <div className="w-32 cursor-pointer rounded bg-teal-500 px-2 pb-1 pt-2 text-white hover:scale-105">
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

export default NavBarPhone;
