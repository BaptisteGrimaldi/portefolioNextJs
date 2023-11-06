import Image from 'next/image';
import Link from 'next/link';

const NavBarPhone = ({ visible }: { visible: boolean }) => {
    if (visible) {
        return (
            <header className="w-full bg-red-600 h-full fixed top-0 left-0 z-10">
                <Image src="/barreMenu.webp" alt="Description de l'image" width={40} height={40} className="mt-5 ml-5" />
                <div className=" h-full flex flex-col items-center text-base ">
                    <div className=" flex justify-center mt-9">
                        <div className="flex flex-col  items-center space-y-3">
                            <Image src="/moiMidJourney.webp" alt="Description de l'image" width={180} height={180} className="rounded-full" />
                            <div className="flex items-center">
                                <p className="text-white">BAPTISTE GRIMALDI</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex  justify-center mt-7">
                        <div className="flex flex-col justify-between  items-center space-y-6 text-white text-center">
                            <div className="bg-red-700 text-white pt-2 px-2 pb-1 rounded w-32 hover:scale-105 cursor-pointer">
                                <p className="hover:scale-105 hover:opacity-50 cursor-pointer">
                                    <Link href="./presentation">Présentation</Link>
                                </p>
                            </div>
                            <div className="bg-red-700 text-white pt-2 px-2 pb-1 rounded w-32 hover:scale-105 cursor-pointer">
                                <p className="hover:scale-105 cursor-pointer hover:opacity-50">Compétences</p>
                            </div>
                            <div className="bg-red-700 text-white pt-2 px-2 pb-1 rounded w-32 hover:scale-105 cursor-pointer">
                                <p className="hover:scale-105 cursor-pointer hover:opacity-50">Réalisations</p>
                            </div>
                            <div className="bg-red-700 text-white pt-2 px-2 pb-1 rounded w-32 hover:scale-105 cursor-pointer">
                                <p className="hover:scale-105 cursor-pointer hover:opacity-50">Services</p>
                            </div>
                            <div className="bg-teal-500 text-white pt-2 px-2 pb-1 rounded w-32 hover:scale-105 cursor-pointer">
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
