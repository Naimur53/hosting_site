import React from 'react';
import { Link, NavLink } from "react-router-dom";
import SignupSlider from './SmallCompo/SignupSlider/SignupSlider';

const Signup = () => {
    return (
        <div className='min-h-screen xxl:h-[900px] font-poppins grid grid-cols-1 sm:grid-cols-9'>
            <div className='bg-black  bg-contain bg-right-top h-full bg-no-repeat col-span-4'
                style={{ backgroundImage: "url(/shape/dotalpha.png)" }}
            >
                <div className="px-[20px] md:pl-[60px]  ">
                    <div className=' '>
                        <div className='pt-[46px] pb-[130px] md:pb-[219px]'>
                            <NavLink className='inline-block' to='/'>
                                <img src="/icons/Logo.png" alt=" logo" />
                            </NavLink>
                        </div>
                        <div>
                            <h1 className='text-[39px] lg:text-[35px] xxl:text-[39px] pb-5 md:pb-0 text-white'>Bienvenue!</h1>
                        </div>

                    </div>
                </div>
                <div className='mt-[185px] relative hidden sm:block'>
                    <SignupSlider ></SignupSlider>
                    <div className="absolute top-0 z-40 left-1/2">
                        <img src="/icons/dark-cur.png" alt="ob" />

                    </div>
                </div>
            </div>
            <div className="bg-[#F8FAFB] col-span-5  container flex flex-col  h-full  items-center">
                <h1 className='text-normal md:text-[30px] pt-[50px] md:pt-[133px] text-upHeading mb-[40px]'>Créer un compte</h1>
                <div className='w-full md:w-2/3 px-5 md:px-0 '>

                    <form >
                        <label htmlFor="name" className='label'>Nom complet</label>
                        <input type="text" id='name' className='input input-field' placeholder='Your name' />

                        <label htmlFor="email" className='label'>Votre adresse e-mail</label>
                        <input type="text" id='email' className='input input-field' placeholder='Votre adresse e-mail' />

                        <label htmlFor="pass" className='label'>Mot de passe</label>
                        <input type="text" id='pass' className='input input-field' placeholder='Entrez votre mot de passe' />

                        <input type="submit" value='S’enregistrer' className='submit' />
                        <a href="#" className='mt-[48px] block text-endText text-center'>Se connecter avec un réseau social</a>
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
                            <p className='mt-[53px] text-endText text-center text-xs'>Déjà inscris chez nous ? <span className='text-seen-blue'>
                                <Link to='/login'>Connecte-toi</Link>
                            </span></p>
                        </div>
                    </form>
                </div>
            </div>
            <div className='mt-[50px] relative block sm:hidden bg-black pt-5'>
                <SignupSlider ></SignupSlider>
                <div className="absolute top-5 z-40 left-1/2">
                    <img src="/icons/dark-cur.png" alt="ob" />

                </div>
            </div>

        </div>
    );
};

export default Signup;