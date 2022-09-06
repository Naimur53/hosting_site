import React from 'react';

const Footer = ({ className }) => {
    return (
        <div>
            <footer className={`bg-banner ${className}`}>
                <div className="container ">
                    <div className='lg:flex justify-between'>
                        <div className="pt-[85px] w-100%  pr-5 lg:w-[30%]">
                            <a href="#" className="flex items-center">
                                <img src="/images/footer-logo.png" className="mr-3 h-8" alt=" Logo" />

                            </a>
                            <p className='mt-[34px] text-ls text-neutral-300'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit ...

                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-4 mt-[80px]">
                            <div>
                                <h2 className=" footer_content_heading">Resources</h2>
                                <ul className=" ">
                                    <li className="footer_content">
                                        <a href="#" className="hover:underline">Domain</a>
                                    </li>
                                    <li className="footer_content">
                                        <a href="#" className="hover:underline">Shared Hosting</a>
                                    </li>
                                    <li className="footer_content">
                                        <a href="#" className="hover:underline">Web Hosting</a>
                                    </li>
                                    <li className="footer_content">
                                        <a href="#" className="hover:underline">Private Hosting</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className=" footer_content_heading">Hosting</h2>
                                <ul className=" ">
                                    <li className="footer_content">
                                        <a href="#" className="hover:underline">Game Server Hosting</a>
                                    </li>
                                    <li className="footer_content">
                                        <a href="#" className="hover:underline">Hosting Wordpress</a>
                                    </li>
                                    <li className="footer_content">
                                        <a href="#" className="hover:underline">Email Hosting</a>
                                    </li>
                                    <li className="footer_content">
                                        <a href="#" className="hover:underline">Hosting Unlimited</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className=" footer_content_heading">Company</h2>
                                <ul className=" ">
                                    <li className="footer_content">
                                        <a href="#" className="hover:underline">About</a>
                                    </li>
                                    <li className="footer_content">
                                        <a href="#" className="hover:underline">Career</a>
                                    </li>
                                    <li className="footer_content">
                                        <a href="#" className="hover:underline">Email Hosting</a>
                                    </li>
                                    <li className="footer_content">
                                        <a href="#" className="hover:underline">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className=" footer_content_heading">Help</h2>
                                <ul className=" ">
                                    <li className="footer_content">
                                        <a href="#" className="hover:underline">FAQ</a>
                                    </li>
                                    <li className="footer_content">
                                        <a href="#" className="hover:underline">Help support</a>
                                    </li>
                                    <li className="footer_content">
                                        <a href="#" className="hover:underline">Legal documents</a>
                                    </li>
                                    <li className="footer_content">
                                        <a href="#" className="hover:underline">Ecology</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <hr className="my-6 border-neutral-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between py-[32px]">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2022 Hostim. Tous droits réservés.
                        </span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <img src="/icons/tw.png" alt="tw" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <img src="/icons/link.png" alt="tw" />

                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <img src="/icons/face.png" alt="tw" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <img src="/icons/git.png" alt="tw" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <img src="/icons/dribble.png" alt="tw" />
                            </a>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;