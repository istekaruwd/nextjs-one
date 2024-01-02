import SectionHeadingOne from '../SectionHeading/SectionHeadingOne';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

import './contact.scss';

const Contact = () => {
    return (
        <section className="appointment-area grey-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 offset-xl-1 col-lg-6 order-lg-2 align-self-center">
                        <div className="appointment-content section-padding">
                            {/* Section Heading */}
                            <SectionHeadingOne
                                heading="Book an appointment"
                                subheading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ut id voluptatem recusandae. Vitae facere eaque, quo aliquid!"
                            />
                            {/* Contact Info */}
                            <ContactInfo />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
