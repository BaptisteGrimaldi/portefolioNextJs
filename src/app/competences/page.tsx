'use client';
import React from 'react';
import Image from 'next/image';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const Competences = () => {
    return (
        <div className="mb-10 mt-36 w-full">
            <h1 className="text-center text-lg text-red-600 xl:text-xl">Compétences</h1>
            <div className="mx-auto flex max-w-[1400px] flex-col items-center xl:mt-10 xl:flex-row xl:justify-center">
                <div className="flex flex-col items-center space-y-2 text-sm xl:w-5/12">
                    <div className="boutonCyanCss">
                        <p>Front-End</p>
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

                    {/* <Player autoplay loop src="https://lottie.host/17cc3293-f4c3-4fd8-bff7-747e382d7150/wc60vtAiOa.json" style={{ height: '300px', width: '300px', marginTop: '0px' }}>
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player> */}
                </div>
                <div className="mt-16 flex h-[150px] w-full flex-col items-center xl:w-1/12">
                    <div className="absolute flex w-full justify-center">
                        <div className="absolute top-1/2 z-0 h-1 w-full bg-black xl:max-w-[500px] xl:rotate-90"></div>
                        <Image src="/assetCompetences/logoTypescript.webp" alt="Typescript" width={100} height={100} className="z-10" />
                    </div>
                </div>
                <div className="mt-8 flex flex-col items-center space-y-2 text-sm  xl:w-5/12">
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
                    {/* <Player autoplay loop src="https://lottie.host/21f88dd6-3133-4420-8dfb-7a4c98ab4017/WRlVyDN3w6.json" style={{ height: '300px', width: '300px' }}>
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player> */}
                </div>
            </div>
            <div className="mx-auto flex w-full max-w-[1000px] items-center justify-between">
                <Player autoplay loop src="https://lottie.host/17cc3293-f4c3-4fd8-bff7-747e382d7150/wc60vtAiOa.json" style={{ height: '300px', width: '300px', marginTop: '0px' }}>
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
                <Player autoplay loop src="https://lottie.host/21f88dd6-3133-4420-8dfb-7a4c98ab4017/WRlVyDN3w6.json" style={{ height: '300px', width: '300px' }}>
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
        </div>
    );
};

export default Competences;
