import Image from 'next/image';
import featuresData from '@/app/data/features/features.json';

import './features.scss';

const Features = () => {
    return (
        <>
            <section className="features-area section-padding">
                <div className="container">
                    <div className="row">
                        {/* Feature Item */}
                        {featuresData &&
                            featuresData.map((feature, index) => (
                                <div key={index} className="col-lg-4">
                                    <div
                                        className={`single-feature ${
                                            index % 2 === 1 ? 'two' : ''
                                        }${index % 3 === 2 ? 'three' : ''}`}
                                    >
                                        <div className="feature-icon">
                                            <Image
                                                src={feature.icon}
                                                width={40}
                                                height={40}
                                                alt={feature.heading}
                                            />
                                        </div>
                                        <div className="feature-content">
                                            <h3>{feature.heading}</h3>
                                            <p>{feature.shortDescription}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
