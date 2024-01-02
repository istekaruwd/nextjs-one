import Image from 'next/image';
import Link from 'next/link';

import partnersBg from '../../../../public/img/partners/bg.jpg';
import partnesrsData from '@/app/data/partners/partners.json';
import './partners.scss';

const Partners = () => {
    return (
        <div className="partners-area section-padding">
            <div className="partners-bg">
                <Image src={partnersBg} alt="Partners Background" priority />
            </div>
            <div className="container">
                <div className="partners-content">
                    {partnesrsData &&
                        partnesrsData.map((partner, index) => (
                            <div key={index} className="single-partner">
                                <Link href="/">
                                    <Image
                                        src={partner.logoImage}
                                        alt={partner.altText}
                                        width={128}
                                        height={128}
                                        priority
                                    />
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
