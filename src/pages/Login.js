import React from 'react';
import login from '../assets/login.png'
import Templete from '../components/Templete';

export default function Login({setIsLoggedIn}){
    return (
        <Templete
            title="Welcome Back"
            desc1="Track your expense with us."
            desc2="We are here for you to track you."
            image={login}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
        />
    );
}
