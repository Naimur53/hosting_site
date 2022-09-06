import React from 'react';
import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import DropdownMenu from './SmallCompo/DropdownMenu';
import MessageBar from './SmallCompo/MessageBar';

const TopBar = ({ isDark }) => {
    const [openNav, setOpenNav] = useState(false);
    const [dark, setDark] = useState(isDark || false);
    const location = useLocation()

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
        const changeNavbarColor = () => {
            if (window.scrollY >= 80) {
                setDark(true);
            }
            else {
                if (!isDark) {
                    setDark(false);
                }
            }
        };
        window.addEventListener('scroll', changeNavbarColor);
    }, []);

    const hosting = [
        { name: 'Web Hosting', path: "web-hosting" },
        { name: 'Email Hosting', path: "email-hosting" },
        { name: 'Vps Game', path: "vps-game" },
        { name: 'Domain Name', path: "domain-name" },
        { name: 'Domain Transfer', path: "transfer-domain" },
        { name: 'Legal Documents', path: "legal-document" },
    ]
    const email = [
        { name: 'Ecology 1 ', path: "ecology1" },
        { name: 'Ecology 2', path: "ecology2" },
    ]

    const navList = (
        <ul className="mb-4  mt-2 flex flex-col gap-[28px] lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-[28px]">
            <li className='flex lg:block hover:activeLink justify-center  font-medium text-ls'>
                <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'inactive')} to='/'>Home</NavLink>
            </li>
            <li className='flex lg:block justify-center font-medium text-ls'>
                <DropdownMenu name='Hosting' data={hosting}></DropdownMenu>

            </li>
            <li className={`flex  hover:activeLink lg:block justify-center  font-medium text-ls ${location.pathname === '/vps-dedicated-server' || location.pathname === '/vps-web' ? "activeLink" : ''}`}>
                <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'inactive')} to='/vps'>VPS</NavLink>
            </li>
            <li className=' flex lg:block justify-center font-medium text-ls'>
                <DropdownMenu name='Email' data={email}></DropdownMenu>

            </li>
        </ul>
    );
    return (
        <Navbar color='white' shadow={false} fullWidth={true} blurred={false} className={` w-vw pb-2 pt-0 lg:pb-4 px-0 z-50 fixed ${dark || openNav ? 'text-black bg-white ' : 'text-white bg-transparent'}  top-0 left-0 right-0 `}>
            <MessageBar></MessageBar>
            <div className="container  pt-2 lg:pt-4  flex items-center border-0 justify-between bg-transparent">
                <div
                    className="lg:mr-[50px]  xl:mr-[94px] cursor-pointer py-1.5 font-normal"
                >

                    <NavLink className='inline-block' to='/'>
                        {
                            dark || openNav ? <img src="/images/dark-logo.png" alt="logo" /> : <img src="/images/logo-white.png" alt="logo" />
                        }
                    </NavLink>
                </div>
                <div className=" hidden grow lg:block">{navList}</div>
                <div className='hidden lg:block'>
                    <NavLink className={`inline-block mr-[32px]  hover:text-main-blue ${dark ? 'text-black' : 'text-white'} text-ls`} to='/login'>
                        Login

                    </NavLink>
                    <NavLink className='inline-block hover:bg-dark-blue transition-all px-[36px] py-[16px] rounded-[50px] bg-main-blue text-xs text-white' to='/register'>Try for free</NavLink>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav} className='  max-h-90vh'>
                {navList}
                <div className='flex justify-center items-center p-4'>
                    <NavLink className={`inline-block mr-[32px] hover:text-main-blue text-black  ${dark || isDark ? 'text-black' : 'text-white'} text-ls`} to='/login'>
                        Login

                    </NavLink>
                    <NavLink className='inline-block px-[36px] py-[16px] hover:bg-dark-blue rounded-[50px] bg-main-blue text-xs text-white' to='/register'>Try for free</NavLink>
                </div>
            </MobileNav>
        </Navbar>
    );
};

export default TopBar;