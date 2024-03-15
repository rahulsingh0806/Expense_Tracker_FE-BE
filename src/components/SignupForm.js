import { useState } from "react";
import React from 'react';
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const splitEmail = (email) => {
    const [username, domain] = email.split('@');
    return { username, domain };
};

const SignupForm = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        confirmpassword: "",
    });
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const changeHandler = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirmpassword) {
            toast.error("Password Doesn't Match");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const { username, domain } = splitEmail(formData.email);
                toast.success(`Account created successfully for ${username} at ${domain}!`);
                setIsLoggedIn(true);
                navigate("/login");
            } else {
                const errorData = await response.json();
                toast.error(`Error: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className="">

            <form onSubmit={submitHandler} className="flex flex-col">
                <div className="flex flex-row gap-x-8 w-full mt-4">

                    <label htmlFor="fName">
                        <p className='text-[1rem] text-black mb-1 leading-[1.375rem]'>First Name<sup className='text-yellow-200'>*</sup></p>
                        <input
                            className='bg-gray-700 rounded-[0.5rem] text-white w-[105%] p-[10px] border-b-gray-400 border-b-[3px]'
                            required
                            type="text"
                            name="fName"
                            id='fName'
                            value={formData.fName}
                            onChange={changeHandler}
                            placeholder='Enter First Name' />
                    </label>

                    <label htmlFor="lName">
                        <p className='text-[1rem] text-black mb-1 leading-[1.375rem]'>Last Name<sup className='text-yellow-200'>*</sup></p>
                        <input
                            className='bg-gray-700 rounded-[0.5rem] text-white w-[105%] p-[10px] border-b-gray-400 border-b-[3px]'
                            required
                            type="text"
                            name="lName"
                            id='lName'
                            value={formData.lName}
                            onChange={changeHandler}
                            placeholder='Enter Last Name' />
                    </label>
                </div>

                <label className="w-full mt-4" htmlFor="email">
                    <p className='text-[1rem] text-black mb-1 leading-[1.375rem]'>
                        Email Address<sup className='text-yellow-200'>*</sup>
                    </p>
                    <input
                        className='bg-gray-700 rounded-[0.5rem] text-white w-[99%] p-[10px] border-b-gray-400 border-b-[3px]'
                        required
                        type="email"
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder='Enter Email id'
                    />
                </label>

                <div className="flex flex-row gap-x-8 mt-4 w-full">
                    <label className="relative" htmlFor="password">
                        <p className='text-[1rem] text-black mb-1 leading-[1.375rem]'>
                            Create Password<sup className='text-yellow-200'>*</sup>
                        </p>
                        <input
                            className='bg-gray-700 rounded-[0.5rem] text-white w-[105%] p-[10px] border-b-gray-400 border-b-[3px]'
                            required
                            type={showPassword ? ("text") : ("password")}
                            id='password'
                            name='password'
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder='Enter Password'
                        />

                        <span className='absolute right-1 top-[35px] coursor-pointer'
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)
                                :
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                    <label className="relative" htmlFor="confirmpassword">
                        <p className='text-[1rem] text-black mb-1 leading-[1.375rem]'>
                            Confirm Password<sup className='text-yellow-200'>*</sup>
                        </p>
                        <input
                            className='bg-gray-700 rounded-[0.5rem] text-white w-[105%] p-[10px] border-b-gray-400 border-b-[3px]'
                            required
                            type={showConfirmPassword ? ("text") : ("password")}
                            id='confirmpassword'
                            name='confirmpassword'
                            value={formData.confirmpassword}
                            onChange={changeHandler}
                            placeholder='Enter Password'
                        />

                        <span className='absolute right-1 top-[35px] coursor-pointer'
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)
                                :
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>

                <button className='w-full bg-yellow-500 rounded-[8px] font-medium text-black px-[12px] py-[7px] mt-4'>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm;