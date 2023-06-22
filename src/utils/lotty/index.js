import React from 'react';
import Lottie from 'react-lottie';


export const LottieAnimation = ({ file }) => {

    const defaultOptions = {
        loop: true,
        title: "Comming Soon",
        autoplay: true,
        height: 100,
        animationData: file,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },


    };

    return (
        <div>
            <Lottie options={defaultOptions} />
        </div>
    );

}
