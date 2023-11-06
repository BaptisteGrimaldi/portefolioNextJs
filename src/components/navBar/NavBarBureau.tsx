import Image from 'next/image';
import Link from 'next/link';

const NavBarBureau = ({ visible }: { visible: boolean }) => {
    if (visible) {
        return (
            <header className="w-full bg-red-600 h-20 fixed top-0 left-0 z-10">
                <div className="h-full flex items-center pl-4 md:hidden">
                    <Image src="/barreMenu.webp" alt="Description de l'image" width={40} height={40} />
                </div>

                <div className="hidden md:flex text-sm">
                    <div className="w-4/12 flex justify-center">
                        <div className="flex justify-between">
                            <div className="mr-4">
                                <Image src="/moiMidJourney.webp" alt="Description de l'image" width={65} height={70} className="rounded-full my-2" />
                            </div>

                            <div className="flex items-center">
                                <p className="text-white">Baptiste Grimaldi</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-8/12 flex justify-center">
                        <div className="flex justify-between  items-center text-white space-x-5 lg:space-x-14 xl:space-x-20">
                            <p className="hover:scale-105 hover:opacity-50 cursor-pointer">
                                <Link href="./presentation">Présentation</Link>
                            </p>
                            <p className="hover:scale-105 cursor-pointer hover:opacity-50">Compétences</p>
                            <p className="hover:scale-105 cursor-pointer hover:opacity-50">Réalisations</p>
                            <p className="hover:scale-105 cursor-pointer hover:opacity-50">Services</p>
                            <div className="bg-teal-500 text-white pt-2 px-2 pb-1 rounded hover:scale-105 cursor-pointer">
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
