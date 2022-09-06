import React from 'react';
import { Link, NavLink } from "react-router-dom";

const SignIn = () => {
    return (
        <div className='min-h-screen h-auto xl:h-[900px] font-poppins grid grid-cols-1 sm:grid-cols-9 '>
            <div className='bg-black bg-contain bg-right-top h-full bg-no-repeat col-span-4 hidden sm:block'
                style={{ backgroundImage: "url(/shape/dotalpha.png)" }}
            >
                <div className='h-full  overflow-hidden bg-no-repeat  bg-bottom ' style={{ backgroundImage: 'url(/icons/blue-crv.png)' }}>
                    <div className="ml-[0px] px-[20px] xl:px-[0] xl:ml-[60px] ">
                        <div className=' '>
                            <div className='mt-[50px]'>
                                <NavLink className='inline-block' to='/'>
                                    <img src="/icons/Logo.png" alt=" logo" />
                                </NavLink>
                            </div>
                            <div className='mt-[173px]'>
                                <h4 className='text-[22px] mb-[10px] text-[#0067FF]'>Welcome back</h4>
                                <h1 className='lg:text-[39px]  text-[25px] md:leading-[51px] text-white font-semibold'>Simplify website & server management</h1>
                            </div>
                            <div className='mt-[100px] xxl:mt-[154px] flex justify-center'>
                                <img src="/icons/dark-small.png" alt="obj" />
                                {/* <img src="/icons/blue-crv.png" alt="obj" /> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black bg-top h-full bg-no-repeat col-span-2 block sm:hidden'
                style={{ backgroundImage: "url(/shape/dotalpha.png)" }}
            >
                <div className="ml-[30px]  pb-10">
                    <div className=' '>
                        <div className='mt-[50px]'>
                            <NavLink className='inline-block' to='/'>
                                <img src="/icons/Logo.png" alt=" logo" />
                            </NavLink>
                        </div>
                        <div className='mt-[173px]'>
                            <h4 className='text-[22px] mb-[10px] text-[#0067FF]'>Welcome back</h4>
                            <h1 className='lg:text-[39px]  md:text-[35px] text-[30px] md:leading-[51px] text-white font-semibold'>Simplify website & server management</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F8FAFB]  flex justify-center sm:items-center md:items-start  h-full col-span-5">
                <div className='w-full md:w-2/3 px-5 md:px-0 '>
                    <h1 className='text-normal md:text-[30px] text-upHeading text-center pt-[50px] md:pt-[133px] pb-[62px]'>Sign In</h1>

                    <form >
                        <label htmlFor="email" className='label'>Your email</label>
                        <input type="text" id='email' className='input input-field' placeholder='Enter your email' />

                        <label htmlFor="pass" className='label'>Password</label>
                        <input type="text" id='pass' className='input input-field' placeholder='Enter your password' />
                        <div className=' flex justify-between mb-[17px]'>
                            <div className=' flex items-center justify-center '>
                                <input className='w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ' type="checkbox" id="remember" />
                                <label htmlFor="remember" className='text-label ml-1 xs:ml-114  text-xs'>Remember me</label>
                            </div>
                            <a href="#" className='text-seen-blue text-xs' > Recover password</a>
                        </div>
                        <input type="submit" value='S’enregistrer' className='submit' />
                        <a href='#' className='mt-[36px] block text-endText text-center text-xs'>Sign up with social profiles</a>
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
                            <p className='mt-[53px] mb-10 md:mb-0 text-endText text-center text-xs'>Don’t have an account? <span className='text-seen-blue'>
                                <Link to='/register'>Sign up here</Link>
                            </span></p>
                        </div>
                    </form>
                </div>
            </div>
            <div className='h-full overflow-hidden bg-no-repeat bg-black block sm:hidden bg-bottom ' style={{ backgroundImage: 'url(/icons/blue-crv.png)' }}>
                <div className="ml-[60px] ">
                    <div className=' '>
                        <div className='pt-[154px] pb-[100px] flex justify-center'>
                            <img src="/icons/dark-small.png" alt="obj" />

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignIn;