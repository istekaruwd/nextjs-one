import Link from 'next/link';
import Image from 'next/image';
import { FaArrowTurnUp } from 'react-icons/fa6';
import { MdOutlineContactPhone } from 'react-icons/md';

import ctaBg from '../../../../public/img/cta/cta-bg.jpg';

import './cta.scss';

const Cta = () => {
    return (
        <section className="cta-area section-padding">
            <div className="cta-bg">
                <Image src={ctaBg} alt="CTA Background" priority />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="cta-con">
                            <MdOutlineContactPhone />
                            <h2>
                                <span>Need a Doctor for Check-up?</span>
                                Just Make An Appointment & You&apos;re Done!
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="theme-btn">
                            <Link href="/contact">
                                Make an Appointment
                                <FaArrowTurnUp />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
