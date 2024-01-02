import Image from 'next/image';
import { FaArrowsTurnRight, FaPlus } from 'react-icons/fa6';

import aboutThumb from '../../../../public/img/about/01.jpg';
import './about.scss';

const About = () => {
    return (
        <>
            <section className="about-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="about-img-area">
                                <div className="about-exp">
                                    <div className="about-counter">
                                        <span className="about-number">25</span>{' '}
                                        <FaPlus />
                                    </div>
                                    <h6>Years of experience</h6>
                                </div>
                                <div className="about-img">
                                    <Image
                                        src={aboutThumb}
                                        alt="About Us"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="about-txt">
                                <h2>About us</h2>
                                <div className="about-list">
                                    <FaArrowsTurnRight />
                                    <div className="about-list-txt">
                                        <h3>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Aspernatur, commodi.
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit.
                                            Placeat ipsum, hic quia asperiores
                                            ipsam totam facere vel, optio
                                            provident voluptates sit dolorum
                                            dicta est alias.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
