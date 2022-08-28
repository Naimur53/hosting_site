import React from 'react';
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div className='h-[900px] grid grid-cols-1 sm:grid-cols-2 '>
            <div className='bg-black hidden sm:block h-full bg-no-repeat'
                style={{ backgroundImage: "url(/shape/dotalpha.png)" }}
            >
                <div className="container h-1/2">
                    <div className=' flex justify-around flex-col items-start h-full'>
                        <div>

                            <img className='img-fluid' src="/icons/Logo.png" alt="" />
                        </div>
                        <div>
                            <h1 className='text-lg text-white'>Bienvenue!</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F8FAFB]  flex justify-center h-full  items-center">
                <div className='w-full md:w-2/3 px-5 md:px-0 '>
                    <h1 className='text-normal md:text-base text-upHeading mb-138'>Sign In</h1>

                    <form >
                        <label htmlFor="email" className='label'>Your email</label>
                        <input type="text" id='email' className='input input-field' placeholder='Enter your email' />

                        <label htmlFor="pass" className='label'>Password</label>
                        <input type="text" id='pass' className='input input-field' placeholder='Enter your password' />
                        <div className=' flex justify-between mb-120'>
                            <div className=' flex items-center justify-center '>
                                <input className='w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ' type="checkbox" id="remember" />
                                <label htmlFor="remember" className='text-label ml-1 xs:ml-114  text-xs'>Remember me</label>
                            </div>
                            <a href="#" className='text-seen-blue text-xs' > Recover password</a>
                        </div>
                        <input type="submit" value='S’enregistrer' className='submit' />
                        <a href='#' className='mt-138 block text-endText text-center text-xs'>Sign up with social profiles</a>
                        <div>
                            <div className='flex mt-115 justify-center items-center'>
                                <a href="#" className='mr-108'  >
                                    <img className='img-fluid' src="/icons/Facebook.png" alt="" />
                                </a>
                                <a href="#" className='mr-108'>
                                    <img src="/icons/Google.png" alt="" />
                                </a>
                                <a href="#" className='mr-108' >
                                    <img src="/icons/Twitter.png" alt="" />
                                </a>
                            </div>
                            <p className='mt-138 text-endText text-center text-xs'>Don’t have an account? <span className='text-seen-blue'>
                                <Link to='/register'>Sign up here</Link>
                            </span></p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignIn;