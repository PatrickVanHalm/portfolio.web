import {useState} from 'react'

import selfie from '../assets/selfie.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Hero () {

    const [loaded, setLoaded] = useState(true);
    const today = new Date();
    const birthday = new Date(2000, 5, 20);
    return (
        <>
        {loaded ?
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">Loading...</div>
        : null}
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={selfie} alt="profile" onLoad={() => setLoaded(false)} width="500px" className="mx-auto rounded-xl"/>
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <p className="text-xl text-gray-400">Hello, my name is</p>
                    <h1 className="text-2xl font-bold">Patrick van Halm</h1>
                    <p className="text-xl font-bold text-gray-300">Software and Game Developer</p>
                    <ul className="mt-1">
                        <li>{today.getMonth() < birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate < birthday.getDate()) ? today.getFullYear() - birthday.getFullYear() - 1 : today.getFullYear() - birthday.getFullYear()} Years old</li>
                    </ul>
                    <p className="text-md font-light text-gray-400 ">I am a driven programmer that actively involves himself with conversations and discussions in order to work towards creative solutions.</p>
                </div>
                
                <div className='flex flex-row justify-start mt-2'>
                    <a href='https://github.com/Patrick-van-Halm' rel="noreferrer" target="_blank" className="px-6 py-2 shadow-md rounded-md bg-dark-300 hover:bg-dark-200 hover:shadow-xl mr-2"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                    <a href='https://linkedin.com/in/patrick-van-halm' rel="noreferrer" target="_blank" className="px-6 py-2 shadow-md rounded-md bg-dark-300 hover:bg-dark-200 hover:shadow-xl mr-2"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                </div>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}
