import React from 'react';
import ReactLoading from 'react-loading';
import { Transition, CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";
import styles from '../style';

const Loading = () => {
    return (
        <>
            <div>
                <div className='flex flex-row-reverse justify-center items-center min-h-screen z-[999] absolute top-0 left-0 bg-black 	backdrop-blur-md w-full '>
                    < ReactLoading type='spinningBubbles' color="#00f6ff" height={200} width={200} />
                </div>
            </div>
        </>
    )
};

export default Loading;