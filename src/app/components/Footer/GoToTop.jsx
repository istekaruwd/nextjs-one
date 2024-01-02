'use client';

import { useState, useEffect } from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

const GoToTop = () => {
    const [show, setShow] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const showGoTo = () => {
        let heightToShow = 500;

        if (window.scrollY >= heightToShow) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', showGoTo);
        return () => window.removeEventListener('scroll', showGoTo);
    }, []);

    return (
        <div
            className={show ? 'go-to-top show' : 'go-to-top'}
            onClick={goToBtn}
        >
            <FaArrowUpLong />
        </div>
    );
};

export default GoToTop;
