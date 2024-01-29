import React from 'react';
import Image from 'next/image';
import AnimationsCompetences from '@/components/competences/AnimationsCompetences';
import AnimationBackEnd from '@/components/competences/animations/AnimationBackEnd';
import AnimationFrontEnd from '@/components/competences/animations/AnimationFrontEnd';
const Competences = () => {
    return (
        <div className="mx-auto mb-10 mt-36 w-full">
            <div className="mx-auto flex max-w-[1400px] flex-col items-center xl:mt-10 xl:flex-row xl:justify-center">
                <div className="flex flex-col items-center space-y-2 text-sm xl:w-5/12">
                    <div className="boutonCyanCss">
                        <p className='pt-1'>Front-End</p>
                    </div>
                    <div className="mb-10 flex flex-col space-y-6">
                        <div className="flex flex-col items-center space-y-6 sm:flex-row sm:space-x-6">
                            <div className="mt-6">
                                <Image src="/assetCompetences/logoNextJs.webp" alt="logo next js" width={200} height={200} />
                            </div>
                            <div className="flex flex-col items-center space-y-6">
                                <Image src="/assetCompetences/logoReactJs.webp" alt="logo react" width={150} height={200} />
                                <Image src="/assetCompetences/logoTailwind.webp" alt="logo tailwind" width={200} height={200} className="sm:hidden" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Image src="/assetCompetences/logoTailwind.webp" alt="logo tailwind" width={200} height={88} className="hidden sm:block" />
                        </div>
                    </div>

                    <AnimationFrontEnd />
                </div>
                <div className="mt-16 flex h-[150px] w-full flex-col items-center xl:w-1/12">
                    <div className="absolute flex w-full justify-center">
                        <div className="absolute top-1/2 z-0 h-1 w-full bg-black xl:max-w-[500px] xl:rotate-90"></div>
                        <Image src="/assetCompetences/logoTypescript.webp" alt="Typescript" width={100} height={100} className="z-10" />
                    </div>
                </div>
                <div className="mt-7 flex flex-col items-center space-y-2 text-sm  xl:w-5/12">
                    <div className="mt-8 w-min whitespace-nowrap rounded bg-red-600 px-2 pb-1 pt-2 text-white">
                        <p>Back-End</p>
                    </div>
                    <div className="flex flex-col items-center space-y-6">
                        <div className="mt-9 flex justify-center">
                            <Image src="/assetCompetences/logoNodeJs.webp" alt="logo node js" width={200} height={200} />
                        </div>
                        <div className="flex flex-col items-center space-y-10 sm:flex-row sm:space-x-10 sm:space-y-0">
                            <Image src="/assetCompetences/logoMongoDb.webp" alt="logo mongoDb" width={250} height={200} />
                            <Image src="/assetCompetences/logoMysql.webp" alt="logo mysql" width={200} height={200} className="sm:pb-12" />
                        </div>
                    </div>
                    <AnimationBackEnd />
                </div>
            </div>
            <AnimationsCompetences />
            <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-y-8">
                <p className='textP w-min'>Formation</p>
                <Image src="/assetCompetences/mikeCodeurSignature.webp" alt="logo udemy" width={350} height={350} className="ml-10" />
            </div>

            <div className='mx-auto mt-20 flex w-fit flex-col gap-16 xl:flex-row'>
                <Image src="/assetCompetences/logoReactMastery.png" alt="logo udemy" width={350} height={350} className="mx-auto" />
                <Image src="/assetCompetences/logoTypescript.png" alt="logo udemy" width={350} height={350} className="mx-auto" />
            </div>
            <Image src="/assetCompetences/logoTestAutomatise.png" alt="logo udemy" width={400} height={400} className="mx-auto mt-20 max-sm:h-[200px] max-sm:w-[250px]" />
            <Image src="/assetCompetences/logoFormateurNextJs.png" alt="logo udemy" width={400} height={400} className="mx-auto mt-20 max-sm:h-[200px] max-sm:w-[250px]" />
            <Image src="/assetCompetences/logoFormationNextJs.png" alt="logo udemy" width={800} height={1000} className="mx-auto mt-20 max-sm:h-[200px] max-sm:w-[500px]" />
        </div>
    );
};

export default Competences;
