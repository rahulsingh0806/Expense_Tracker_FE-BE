import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormDate] = useState({ email: "", password: "" });

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormDate((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            // Make a POST request to the server endpoint for login
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Login successful!');
                setIsLoggedIn(true);
                // Optionally, you can redirect the user or perform other actions
                navigate('/dashboard');
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }

    }

    return (
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-4 ">
            <label htmlFor="email" className='w-full'>
                <p className='text-[1rem] text-black mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-yellow-200'>*</sup>
                </p>
                <input
                    className='bg-gray-700 rounded-[0.5rem] text-white w-full p-[10px] border-b-gray-400 border-b-[3px]'
                    required
                    type="email"
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter Email address'
                />
            </label>

            <label htmlFor="password" className='w-full relative'>
                <p className='text-[1rem] text-black mb-1 leading-[1.375rem]'>
                    Password<sup className='text-yellow-200'>*</sup>
                </p>
                <input
                    className='bg-gray-700 rounded-[0.5rem] text-white w-full p-[10px]  border-b-gray-400 border-b-[3px]'
                    required
                    type={showPassword ? ("text") : ("password")}
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                />

                <span className='absolute right-4 top-[35px] coursor-pointer'
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ?
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)
                        :
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
                </Link>
            </label>

            <button className='bg-yellow-500 rounded-[8px] font-medium text-black px-[12px] mt-2 py-[7px]'>
                Sign In
            </button>

        </form>
    );
}

export default LoginForm;