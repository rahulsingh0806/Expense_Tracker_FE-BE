import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
// import {FcGoogle} from "react-icons/fc";

const Templete = ({title,desc1,desc2, image , formtype, setIsLoggedIn}) => {
    return (
        <div className='flex items-center justify-center w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 overflow-y-hidden'>
            <div className='w-11/12 max-w-[450px]'>
                <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
                <p className='text-[1rem] leading-[1.635rem] mt-4'>
                    <span className='text-white '>{desc1}</span><br />
                    <span className='text-yellow-400 text-bold italic '>{desc2}</span>
                </p>

                {formtype === 'signup' ?
                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                
            </div>

            <div className="w-11/12 max-w-[450px]">
                <img 
                src={image} 
                alt="Students"
                width={558}
                height={490}
                loading='lazy'/>
            </div>
        </div>
    );
}

export default Templete;