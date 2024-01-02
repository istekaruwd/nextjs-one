import SectionHeadingOne from '../SectionHeading/SectionHeadingOne';
import DepartmentTab from './DepartmentTab';

import './departments.scss';

const Departments = () => {
    return (
        <>
            <section className="departments-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9">
                            {/* Section Heading */}
                            <SectionHeadingOne
                                heading="Our Departments"
                                subheading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ut id voluptatem recusandae. Vitae facere eaque, quo aliquid possimus assumenda!"
                            />
                        </div>
                    </div>
                    {/* Department Tab */}
                    <DepartmentTab />
                </div>
            </section>
        </>
    );
};

export default Departments;
