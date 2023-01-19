import React from 'react';
import VideoBg from '../../assets/videoBg.mp4'


const Home = () => {
    return <>
    <div className='main'>
        <div className='overlay'></div>
        <video src={VideoBg} autoPlay loop muted/>
        <div className='content'>
            <h1>1994</h1>
        </div>
    </div>
    </>
}

export default Home