import SectionHeadingTwo from '../SectionHeading/SectionHeadingTwo';
import WorkProcessItems from './WorkProcessItems';
import './workprocess.scss';

const WorkProcess = () => {
    return (
        <section className="work-process-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-9">
                        {/* Section Heading */}
                        <SectionHeadingTwo
                            heading="Our Work Process"
                            subheading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ut id voluptatem recusandae. Vitae facere eaque, quo aliquid possimus assumenda!"
                        />
                    </div>
                </div>
                {/* Work Process Items */}
                <WorkProcessItems />
            </div>
        </section>
    );
};

export default WorkProcess;
