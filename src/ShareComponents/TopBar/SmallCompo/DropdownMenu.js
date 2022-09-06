import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, } from 'react-router-dom';
import './DropdownMenu.css'
const DropdownMenu = ({ name, data }) => {
    const [visible, setVisible] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const change = () => setVisible(pre => !pre)
    const location = useLocation()
    useEffect(() => {
        const findPath = data.filter(single => `/${single.path}` === location.pathname)

        setIsActive(Boolean(findPath.length))
    }, [data])
    console.log({ name, visible });
    return (
        <div  >
            <div onClick={() => change()} onBlur={() => setTimeout(() => setVisible(() => false), 200)} className="relative inline-block menu-wrap text-left">
                <div>
                    <button type="button" className={`inline-flex w-full justify-center rounded-md   bg-transparent px-4 py-2 text-sm font-medium   hover:text-main-blue ${isActive ? 'text-main-blue' : ''}`} id="menu-button" aria-expanded="true" aria-haspopup="true">
                        {name}
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                {
                    visible && <div className="absolute py-0 drop-menu right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className=" " role="none">
                            <ul className=' '>
                                {
                                    data.map(single => <li onClick={() => setVisible(false)} className='
                                    ' key={single.path}>
                                        <NavLink className={({ isActive }) => (isActive ? 'activeLink text-gray-700 block px-4 hover:bg-main-blue hover:text-white transition-all py-2 text-sm' : 'inactive text-gray-700 block px-4 hover:bg-main-blue hover:text-white transition-all py-2 text-sm')} to={'/' + single.path}>
                                            {single.name}

                                        </NavLink>

                                    </li>)
                                }

                            </ul>
                        </div>
                    </div>
                }
            </div>
        </div >
    );
};

export default DropdownMenu;