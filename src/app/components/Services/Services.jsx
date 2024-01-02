import SectionHeadingTwo from '@/app/components/SectionHeading/SectionHeadingTwo';
import ServiceItems from './ServiceItems';
import './services.scss';

const ServiceSection = () => {
    return (
        <>
            <section className="services-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9">
                            {/* Section Heading */}
                            <SectionHeadingTwo
                                heading="Our Services"
                                subheading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ut id voluptatem recusandae. Vitae facere eaque, quo aliquid possimus assumenda!"
                            />
                        </div>
                    </div>
                    {/* services Carousel */}
                    <ServiceItems />
                </div>
            </section>
        </>
    );
};

export default ServiceSection;
