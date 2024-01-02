'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowTurnUp } from 'react-icons/fa6';

import Navbar from './Navbar';
import logo from '../../../../public/img/logo.png';

const HeaderBottom = () => {
    const [fixed, setFixed] = useState(false);

    const navFixed = () => {
        let heightToShow = 250;

        if (window.scrollY >= heightToShow) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', navFixed);
        return () => window.removeEventListener('scroll', navFixed);
    }, []);

    return (
        <div className={fixed ? 'header-bottom header-fixed' : 'header-bottom'}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-auto">
                        {/* Header Logo */}
                        <div className="header-logo">
                            <Link href="/">
                                <Image src={logo} alt="Medies Logo" priority />
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        {/* Header Navbar */}
                        <Navbar />
                    </div>
                    <div className="col-lg-auto d-none d-lg-block">
                        <div className="theme-btn">
                            <Link href="/contact">
                                Appointment
                                <FaArrowTurnUp />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;
