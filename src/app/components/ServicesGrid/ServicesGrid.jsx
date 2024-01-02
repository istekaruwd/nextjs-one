import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

import ServiceData from '@/app/data/services/services.json';
import './servicesgrid.scss';

const ServicesGrid = () => {
    return (
        <section className="services-grid-area section-padding">
            <div className="container">
                <div className="row g-4">
                    {
                        /* service Items */
                        ServiceData &&
                            ServiceData.map((value, index) => (
                                <div key={index} className="col-lg-4 col-md-6">
                                    <div className="single-service">
                                        <div className="service-icon">
                                            <div className="service-icon-box">
                                                <Image
                                                    src={value.icon}
                                                    width={40}
                                                    height={40}
                                                    alt={value.heading}
                                                />
                                            </div>
                                            <div className="service-number">
                                                {value.number}
                                            </div>
                                        </div>
                                        <h3>{value.heading}</h3>
                                        <p>{value.shortDescription}</p>
                                        <Link
                                            href={`/services/${value.slug}`}
                                            className="service-btn"
                                        >
                                            <FaArrowRightLong />
                                        </Link>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
