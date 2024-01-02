import Image from 'next/image';
import Link from 'next/link';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaPinterestP,
    FaTwitter,
} from 'react-icons/fa6';

import logoWhite from '../../../../public/img/logo-white.png';

const WidgetsAbout = () => {
    return (
        <div className="widget-about">
            <div className="footer-logo">
                <Link href="/">
                    <Image src={logoWhite} alt="Medies Logo" />
                </Link>
            </div>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
                inventore!
            </p>
            <div className="footer-social">
                <Link href="/">
                    <FaFacebookF />
                </Link>
                <Link href="/">
                    <FaTwitter />
                </Link>
                <Link href="/">
                    <FaLinkedinIn />
                </Link>
                <Link href="/">
                    <FaPinterestP />
                </Link>
            </div>
        </div>
    );
};

export default WidgetsAbout;
