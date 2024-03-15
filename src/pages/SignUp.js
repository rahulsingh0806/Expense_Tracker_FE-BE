import React from 'react';
import Signup from '../assets/Signup.png'
import Templete from '../components/Templete';

export default function SignUp({setIsLoggedIn}){
    return (
        <Templete
            title="Join us today and get free to manage your Expenses."
            desc1="Track your expense with us."
            desc2="We are here for you to track you."
            image={Signup}
            formtype="signup"
            setIsLoggedIn={setIsLoggedIn}
        />
    );
}