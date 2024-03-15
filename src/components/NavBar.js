import React from 'react';
import {toast} from 'react-hot-toast';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    return (
        <div className='flex justify-around items-center w-11/12 max-w-[1160px] py-4 mx-auto '>
            <Link to="/">
                <p className='text-white text-2xl font-bold'>Expense Tracker</p>
            </Link>

            <nav>
                <ul className='text-white flex gap-x-6 font-medium'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                </ul>
            </nav>
            
            <div className='flex items-center gap-x-4 '>
                { !isLoggedIn &&
                    <Link to="/login">
                        <button className='bg-sky-800 text-white py-[7px] px-[12px] rounded-[8px] 
                        border border-sky-700'>
                            Log in
                        </button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/signup">
                        <button className='bg-sky-800 text-white py-[7px] px-[12px] rounded-[8px] 
                        border border-sky-700'>
                            Sign Up
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/" >
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        }} className='bg-sky-800 text-white py-[7px] px-[12px] rounded-[8px] 
                        border border-sky-700'>
                            Log Out
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/dashboard">
                        <button className='bg-sky-800 text-white py-[7px] px-[12px] rounded-[8px] 
                        border border-sky-700'>
                            DashBoard
                        </button>
                    </Link>
                }
            </div>
        </div>
    );
}

export default NavBar;