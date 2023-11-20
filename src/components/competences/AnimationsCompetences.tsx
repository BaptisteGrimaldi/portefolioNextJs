'use client';

import { Controls, Player } from '@lottiefiles/react-lottie-player';

const AnimationsCompetences = () => {
    return (
        <div className="mx-auto hidden w-full max-w-[1000px] items-center justify-between xl:flex">
            <Player autoplay loop src="/assetCompetences/animation/animationFrontEnd.json" style={{ height: '300px', width: '300px', marginTop: '0px' }}>
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            <Player autoplay loop src="/assetCompetences/animation/animationBackEnd.json" style={{ height: '300px', width: '300px' }}>
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
        </div>
    );
};

export default AnimationsCompetences;
