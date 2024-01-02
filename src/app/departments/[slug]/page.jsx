import { notFound } from 'next/navigation';
import Image from 'next/image';

import PageHeader from '@/app/components/PageHeader/PageHeader';
import Contact from '@/app/components/Contact/Contact';
import DepartmentDoctors from '@/app/components/DepartmentDoctors/DepartmentDoctors';
import departmentsData from '@/app/data/departments/departments.json';
import './singledepartmentpage.scss';

export const metadata = {
    title: 'Single Department - Medies',
    description: 'Health & Medical React Next Js Template',
};

export async function generatedepartmentStaticParams() {
    return departmentsData.map((department) => ({
        singledepartmentpage: department.slug,
    }));
}

const singleDepartmentsPage = ({ params }) => {
    const { slug } = params;
    const singleDepartment = departmentsData.find(
        (department) => department.slug.toString() === slug
    );

    if (!singleDepartment) {
        notFound();
    }
    return (
        <>
            <PageHeader title={singleDepartment.title} />
            <section className="single-department-page section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-department-con">
                                <div className="single-department-thumb">
                                    <Image
                                        src={singleDepartment.thumb}
                                        alt={singleDepartment.title}
                                        width={1500}
                                        height={1000}
                                    />
                                    <div className="department-icon">
                                        <Image
                                            src={singleDepartment.icon}
                                            width={60}
                                            height={60}
                                            alt={singleDepartment.title}
                                        />
                                    </div>
                                </div>
                                <div className="single-department-text">
                                    <p>{singleDepartment.shortDescription}</p>
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
                            {/* Available Doctors */}
                            <DepartmentDoctors />
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
};

export default singleDepartmentsPage;
