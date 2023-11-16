'use client';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
const AnimationFrontEnd = () => {
    return (
        <div className="xl:hidden">
            <Player autoplay loop src="/assetCompetences/animation/animationFrontEnd.json" style={{ height: '300px', width: '300px', marginTop: '0px' }}>
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
        </div>
    );
};

export default AnimationFrontEnd;
