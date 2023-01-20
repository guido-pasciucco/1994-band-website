import React from 'react';
import VideoBg from '../../assets/videoBg.mp4'

const Home = () => {
    return <>
    <div className='main'>
        <video src={VideoBg} autoPlay loop muted/>
        <div className='content'>
            <h1><i>1994</i></h1>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-down"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1
                    .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1
                    .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
            </svg>
        </div>
    </div>
    </>
}

export default Home