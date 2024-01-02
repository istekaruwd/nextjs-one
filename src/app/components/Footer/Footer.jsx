import Link from 'next/link';

import WidgetsServices from './WidgetsServices';
import WidgetsDepartments from './WidgetsDepartments';
import WidgetsGallery from './WidgetsGallery';
import WidgetsAbout from './WidgetsAbout';
import GoToTop from './GoToTop';
import './footer.scss';

const Footer = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                {/* About Widget */}
                                <div className="footer-widget">
                                    <WidgetsAbout />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                {/* Services Widget */}
                                <div className="footer-widget">
                                    <h3 className="footer-widget-heading">
                                        <span>Our</span> services
                                    </h3>
                                    <WidgetsServices items={5} />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                {/* Departments Widget */}
                                <div className="footer-widget">
                                    <h3 className="footer-widget-heading">
                                        <span>Our</span> departments
                                    </h3>
                                    <WidgetsDepartments items={5} />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                {/* Gallery Widget */}
                                <div className="footer-widget">
                                    <h3 className="footer-widget-heading">
                                        <span>Photo</span> gallery
                                    </h3>
                                    <WidgetsGallery items={6} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="copy-right text-center">
                            &copy; {new Date().getFullYear()}
                            <Link href="/">Medies.</Link> All right reserved.
                        </div>
                    </div>
                </div>
            </footer>
            <GoToTop />
        </>
    );
};

export default Footer;
