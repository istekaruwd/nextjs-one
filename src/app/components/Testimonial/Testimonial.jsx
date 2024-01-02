import SectionHeadingTwo from '../SectionHeading/SectionHeadingTwo';
import TestimonialItems from './TestimonialItems';
import './testimonial.scss';

const Testimonial = () => {
    return (
        <section className="testimonial-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-9">
                        {/* Section Heading */}
                        <SectionHeadingTwo
                            heading="Our Testimonial"
                            subheading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ut id voluptatem recusandae. Vitae facere eaque, quo aliquid possimus assumenda!"
                        />
                    </div>
                </div>
                {/* Testimonial Carousel */}
                <TestimonialItems />
            </div>
        </section>
    );
};

export default Testimonial;
