import React from 'react';
import NavLink from './NavLink';

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
    return (
        <nav>
            {/*Option: 3. when we create the url an another file and use link options in others file */}
            <ul className='flex'>
                {
                    navigationData.map(route => <NavLink key={route.id} route={route}></NavLink>)
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
        </nav>
    );
};

export default Navbar;