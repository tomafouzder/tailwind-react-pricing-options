import React, { useState } from 'react';
import NavLink from './NavLink';
import { Menu, X } from 'lucide-react';

const navigationData = [
    {
        id: 1,
        name: "Home",
        path: "/home"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Portfolio",
        path: "/portfolio"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];


const Navbar = () => {

    const [open, setOpen] = useState(false);

    const links = navigationData.map(route => <NavLink key={route.id} route={route}></NavLink>)

    return (
        <nav className='flex justify-between mx-10'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {open ?
                    <X className='md:hidden'></X> :
                    <Menu className='md:hidden'></Menu>}

                <ul className={`md:hidden absolute rounded-box duration-1000
                     ${open ? 'top-10' : '-left-40'} 
                     bg-base-100 shadow dropdown-content text-white`}>
                    {links}
                </ul>
                <h3 className='ml-4 text-xl'>My Navbar</h3>
            </span>

            {/*Option: 3. when we create the url an another file and use link options in others file */}
            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>

            {/* ............................................................. */}

            {/*Option: 2. when url data in this file  */}
            {/* <ul className='flex'>
                {
                    navigationData.map(route =>
                        <li className='mr-10'>
                            <a href={route.path}>{route.name}</a>
                        </li>
                    )
                }
            </ul> */}

            {/* .............................................................. */}

            {/* Option: 1. simple ways */}
            {/* <ul className='flex'>
                <li className='mr-10'><a href="/home">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}

            <button>Sing In</button>
        </nav>
    );
};

export default Navbar;