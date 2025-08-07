import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const navItems = [
        { name: "Services", href: "#services" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "Projects", href: "#projects" },
        { name: "More", href: "#more" },
    ];

    return (
        <section>
            <div className="navbar max-w-11/12 xl:max-w-6xl mx-auto my-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-[#573E89] font-semibold transition-colors duration-200 text-sm"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link href="/">
                        <img className="w-12 h-10" src="/faarnsventures-removebg-preview (1) 1.png" alt="Logo"></img>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-5">
                        {navItems.map((item) => (
                            <li key={item.name} className='hover:scale-105 duration-300 transition-all'>
                                <Link
                                    href={item.href}
                                    className="text-[#573E89] font-semibold transition-colors duration-200 text-[15px]"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href="" className='px-1 py-1 rounded-full backdrop-blur-md shadow-md hover:scale-105 duration-300 transition-all hover:shadow-lg'>
                        <div className='flex items-center justify-center rounded-full bg-[#8C75F7]/5'>
                            <img className="w-11 h-10" src="/bulb.png" alt="Logo"></img>
                            <p className='rounded-full bg-[#FFFFFF]/90 p-1 text-[#573E69] font-semibold text-[13px] mr-1 drop-shadow-sm'>Got a Concept ?</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Navbar;