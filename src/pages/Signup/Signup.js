import React from 'react';
import { Link } from "react-router-dom";
import SignupSlider from './SmallCompo/SignupSlider/SignupSlider';

const Signup = () => {
    return (
        <div className='h-[900px] font-poppins grid grid-cols-1 sm:grid-cols-2 '>
            <div className='bg-black hidden sm:block h-full bg-no-repeat'
                style={{ backgroundImage: "url(/shape/dotalpha.png)" }}
            >
                <div className=" pl-[60px]  ">
                    <div className=' '>
                        <div>

                            <img className='pt-[46px] pb-[219px]' src="/icons/Logo.png" alt=" logo" />
                        </div>
                        <div>
                            <h1 className='text-lg text-white'>Bienvenue!</h1>
                        </div>

                    </div>
                </div>
                <div className='mt-[185px] relative'>
                    <SignupSlider ></SignupSlider>
                    <div className="absolute top-0 z-40 left-1/2">
                        <img src="/icons/dark-cur.png" alt="ob" />

                    </div>

                </div>
            </div>
            <div className="bg-[#F8FAFB]  container flex flex-col  h-full  items-center">
                <h1 className='text-normal md:text-base pt-[133px] text-upHeading mb-[40px]'>Créer un compte</h1>
                <div className='w-full md:w-2/3 px-5 md:px-0 '>

                    <form >
                        <label htmlhtmlFor="name" className='label'>Nom complet</label>
                        <input type="text" id='name' className='input input-field' placeholder='Your name' />

                        <label htmlhtmlFor="email" className='label'>Votre adresse e-mail</label>
                        <input type="text" id='email' className='input input-field' placeholder='Votre adresse e-mail' />

                        <label htmlhtmlFor="pass" className='label'>Mot de passe</label>
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

        </div>
    );
};

export default Signup;