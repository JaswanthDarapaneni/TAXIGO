import React, { useState } from 'react';
import BrandIcon from '../../../parts/BrandIcon';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [indNumber, setIndNumber] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [errors, setErrors] = useState({ email: '', password: '', indNumber: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
        // Handle sign-in logic here
    };

    const validateForm = () => {
        const newErrors = { email: '', password: '', indNumber: '' };

        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }

        if (!indNumber) {
            newErrors.indNumber = 'IND number is required';
        } else if (!/^\d{10}$/.test(indNumber)) {
            newErrors.indNumber = 'IND number must be 10 digits';
        }

        setErrors(newErrors);
    };

    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    const navigateToSignup = () => {
        // Navigation logic for sign-in
    };

    return (
        <div className="flex h-screen">
            <div className="w-full text-gray-950 max-w-xs m-auto rounded p-5">
                <header>
                    <div className='flex justify-center'>
                        <BrandIcon isTextVisible={true} />
                    </div>
                </header>
                <br />
                <form onSubmit={handleSubmit}>


                    <div className="relative">
                        <label className="block mb-2 dark:text-white text-gray-950" htmlFor="indNumber">Number</label>
                        <input
                            className="w-full p-2 mb-6 text-gray-950 border-b-2 border-gray-800 outline-none focus:bg-gray-300"
                            id="indNumber"
                            type="text"
                            value={indNumber}
                            onChange={(e) => setIndNumber(e.target.value)}
                        />
                        {errors.indNumber && <small className="text-red-500">{errors.indNumber}</small>}
                    </div>
                    <div>
                        <label className="block mb-2 dark:text-white text-gray-950" htmlFor="email">Email</label>
                        <input
                            className="w-full p-2 mb-6 text-gray-950 border-b-2 border-gray-800 outline-none focus:bg-gray-300"
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <small className="text-red-500">{errors.email}</small>}
                    </div>

                    <div className="relative">
                        <label className="block mb-2 dark:text-white text-gray-950" htmlFor="password">Password</label>
                        <input
                            className="w-full p-2 mb-6 border-b-2 text-gray-950 border-gray-800 outline-none focus:bg-gray-300"
                            id="password"
                            type={hidePassword ? 'password' : 'text'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className={`absolute top-0 ${(errors.password && errors.email && errors.indNumber) ? 'bottom-4' : 'bottom-0'}  right-0 flex items-center justify-center pr-3`}
                            aria-label="Toggle password visibility"
                        >
                            {hidePassword ? (
                                <EyeIcon className="w-5 h-5 text-gray-500" />
                            ) : (
                                <EyeSlashIcon className="w-5 h-5 text-gray-500" />
                            )}
                        </button>
                        {errors.password && <small className="text-red-500 ">{errors.password}</small>}
                    </div>

                    <div>
                        <input
                            className="w-full dark:text-gray-900 dark:bg-white bg-gray-900 text-white  dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer font-bold py-2 px-4 mb-6 rounded"
                            type="submit"
                            value="Sign Up"
                        />
                    </div>
                </form>
                <footer>
                    <div className="flex items-center justify-between flex-wrap">
                        <a
                            className="dark:text-white cursor-pointer text-sm float-right"
                            onClick={navigateToSignup}
                        >
                            Have Account? <span className='text-sm hover:text-gray-500'>Login</span>
                        </a>
                        <span className="dark:text-white">|</span>
                        <span className="dark:text-white text-sm">Login With</span>
                        <button className="hover:scale-105 ease-in-out duration-500 shadow-lg p-2 rounded-lg m-1">
                            <img
                                className="max-w-[25px]"
                                src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                                alt="Google"
                            />
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default SignInForm;
