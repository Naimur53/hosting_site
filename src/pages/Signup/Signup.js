import React from 'react';
import { Link } from "react-router-dom";

const Signup = () => {
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
            <div className="bg-[#F8FAFB]  container flex flex-col justify-center h-full  items-center">
                <h1 className='text-normal md:text-base  text-upHeading mb-138'>Créer un compte</h1>
                <div className='w-full md:w-2/3 px-5 md:px-0 '>

                    <form >
                        <label htmlFor="name" className='label'>Nom complet</label>
                        <input type="text" id='name' className='input input-field' placeholder='Your name' />

                        <label htmlFor="email" className='label'>Votre adresse e-mail</label>
                        <input type="text" id='email' className='input input-field' placeholder='Votre adresse e-mail' />

                        <label htmlFor="pass" className='label'>Mot de passe</label>
                        <input type="text" id='pass' className='input input-field' placeholder='Entrez votre mot de passe' />

                        <input type="submit" value='S’enregistrer' className='submit' />
                        <a href="#" className='mt-138 block text-endText text-center'>Se connecter avec un réseau social</a>
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
                            <p className='mt-138 text-endText text-center text-xs'>Déjà inscris chez nous ? <span className='text-seen-blue'>
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