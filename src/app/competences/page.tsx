import React from 'react';
import Image from 'next/image';

const competences = () => {
    return (
        <div className="mt-28">
            <h1 className="text-center text-lg text-red-600">Compétences</h1>
            <div className="flex flex-col">
                <div className="flex flex-col items-center space-y-2 text-sm">
                    <div className="boutonCyanCss">
                        <p>Front-End</p>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <div className="mt-6">
                            <Image src="/assetCompetences/logoNextJs.webp" alt="logo next js" width={200} height={200} />
                        </div>
                        <div className="flex flex-col space-y-6">
                            <Image src="/assetCompetences/logoReactJs.webp" alt="logo react" width={200} height={200} />
                            <Image src="/assetCompetences/logoTailwind.webp" alt="logo tailwind" width={200} height={200} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="absolute">
                        <div className="absolute h-1 w-full bg-black"></div>
                        <Image src="/assetCompetences/logoTypescript.webp" alt="Typescript" width={200} height={200} />
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-2 text-sm">
                    <div className="mt-8 w-min cursor-pointer whitespace-nowrap rounded bg-red-600 px-2 pb-1 pt-2 text-white hover:scale-105">
                        <p>Back-End</p>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <div className="mt-9">
                            <Image src="/assetCompetences/logoNodeJs.webp" alt="logo node js" width={200} height={200} />
                        </div>
                        <div className="flex flex-col space-y-10">
                            <Image src="/assetCompetences/logoMongoDb.webp" alt="logo mongoDb" width={200} height={200} />
                            <Image src="/assetCompetences/logoMysql.webp" alt="logo mysql" width={200} height={200} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default competences;
