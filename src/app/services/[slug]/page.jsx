import { notFound } from 'next/navigation';
import Image from 'next/image';

import PageHeader from '@/app/components/PageHeader/PageHeader';
import ServicesSideNav from '@/app/components/ServicesSideNav/ServicesSideNav';
import singleServiceData from '@/app/data/services/services.json';
import './singleservicepage.scss';

export const metadata = {
    title: 'Single Service - Medies',
    description: 'Health & Medical React Next Js Template',
};

export async function generateServiceStaticParams() {
    return singleServiceData.map((service) => ({
        singleservicepage: service.slug,
    }));
}

const singleServicePage = ({ params }) => {
    const { slug } = params;
    const singleService = singleServiceData.find(
        (service) => service.slug.toString() === slug
    );

    if (!singleService) {
        notFound();
    }

    return (
        <>
            <PageHeader title={singleService.heading} />
            <section className="single-service-page section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 order-lg-2">
                            <div className="single-service-con">
                                <div className="single-service-thumb">
                                    <Image
                                        src={singleService.thumb}
                                        alt={singleService.heading}
                                        width={1500}
                                        height={1000}
                                    />
                                </div>
                                <div className="service-icon">
                                    <div className="service-icon-box">
                                        <Image
                                            src={singleService.icon}
                                            width={40}
                                            height={40}
                                            alt={singleService.heading}
                                        />
                                    </div>
                                    <div className="service-number">
                                        {singleService.number}
                                    </div>
                                </div>
                                <div className="single-service-text">
                                    <p>{singleService.shortDescription}</p>
                                    <h3>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h3>
                                    <p>
                                        Donec nec justo eget felis facilisis
                                        fermentum. Aliquam porttitor mauris sit
                                        amet orci. Aenean dignissim pellentesque
                                        felis.
                                    </p>
                                    <h4>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h4>
                                    <ul>
                                        <li>
                                            Aliquam tincidunt mauris eu risus.
                                        </li>
                                        <li>
                                            Vestibulum auctor dapibus neque.
                                        </li>
                                        <li>Nunc dignissim risus id metus.</li>
                                        <li>
                                            Vivamus vestibulum ntulla nec ante.
                                        </li>
                                        <li>
                                            Vestibulum commodo felis quis
                                            tortor.
                                        </li>
                                    </ul>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Animi, dolor alias
                                        maiores amet suscipit tenetur sit soluta
                                        dicta nam commodi.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            {/* Services Side Nav */}
                            <ServicesSideNav />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default singleServicePage;
