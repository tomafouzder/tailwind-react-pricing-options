import React from 'react';

const NavLink = ({route}) => {
    return (
        <li className='lg:mr-10 px-8 rounded-xl py-1 hover:bg-gray-700 md:hover:bg-none w-full'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default NavLink;