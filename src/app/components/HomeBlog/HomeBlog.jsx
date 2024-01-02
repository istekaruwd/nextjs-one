import SectionHeadingOne from '../SectionHeading/SectionHeadingOne';
import HomeBlogItems from './HomeBlogItems';
import './homeblog.scss';

const HomeBlog = () => {
    return (
        <section className="home-blog-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        {/* Section Heading */}
                        <SectionHeadingOne
                            heading="Our Latest Post"
                            subheading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ut id voluptatem recusandae. Vitae facere eaque, quo aliquid possimus assumenda!"
                        />
                    </div>
                </div>
                <div className="home-blog-content">
                    {/* Home Blog */}
                    <HomeBlogItems items={4} />
                </div>
            </div>
        </section>
    );
};

export default HomeBlog;
