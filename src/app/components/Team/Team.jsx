import SectionHeadingOne from '../SectionHeading/SectionHeadingOne';
import TeamMembers from './TeamMembers';
import './team.scss';

const Team = () => {
    return (
        <section className="team-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-9">
                        {/* Section Heading */}
                        <SectionHeadingOne
                            heading="Our Doctors"
                            subheading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ut id voluptatem recusandae. Vitae facere eaque, quo aliquid possimus assumenda!"
                        />
                    </div>
                </div>
                {/* Team Members */}
                <TeamMembers />
            </div>
        </section>
    );
};

export default Team;
