import Link from 'next/link';
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaSquarePinterest,
} from 'react-icons/fa6';

import HeaderInfo from './HeaderInfo';
import HeaderBottom from './HeaderBottom';
import './header.scss';

const Header = () => {
    return (
        <header>
            {/* Header Top */}
            <div className="header-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-auto order-md-2">
                            <div className="header-top-social">
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
                                    <FaSquarePinterest />
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            {/* HEader Info */}
                            <HeaderInfo />
                        </div>
                    </div>
                </div>
            </div>
            {/* Header Bottom */}
            <HeaderBottom />
        </header>
    );
};

export default Header;
