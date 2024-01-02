'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaAngleDown } from 'react-icons/fa6';

import NavbarData from '@/app/data/navbar/navbar.json';

const Navbar = () => {
    const currentRoute = usePathname();
    const [toggleNav, setToggleNav] = useState(false);
    const [hasChildren, setHasChildren] = useState('');

    const handleHasChildren = (idx) => {
        if (hasChildren === idx) {
            setHasChildren('');
        } else {
            setHasChildren(idx);
        }
    };

    return (
        <nav className={toggleNav ? 'header-nav show-nav' : 'header-nav'}>
            {/* Mobile Nav Button */}
            <div
                className="mobile-nav-line d-lg-none"
                onClick={() => setToggleNav((toggleNav) => !toggleNav)}
            >
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
            </div>
            {/* Header Navigation */}
            <ul>
                {NavbarData &&
                    NavbarData.map((nav, index) => (
                        <li
                            key={index}
                            className={`${
                                currentRoute === nav.link ? 'active' : ''
                            } ${
                                nav.subMenu && hasChildren === index
                                    ? 'hasChildren'
                                    : ''
                            }`}
                        >
                            <Link
                                href={nav.link}
                                onClick={() => handleHasChildren(index)}
                            >
                                {nav.title} {nav.subMenu ? <FaAngleDown /> : ''}
                            </Link>
                            {(() => {
                                if (nav.subMenu) {
                                    return (
                                        <ul className="subMenu">
                                            {nav.subMenu.map(
                                                (subItem, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <Link
                                                                href={
                                                                    subItem.link
                                                                }
                                                            >
                                                                {subItem.title}
                                                            </Link>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    );
                                }
                            })()}
                        </li>
                    ))}
            </ul>
        </nav>
    );
};

export default Navbar;
