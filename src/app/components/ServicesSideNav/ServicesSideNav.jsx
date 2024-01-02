'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaAngleRight } from 'react-icons/fa6';

import singleServiceData from '@/app/data/services/services.json';
import './servicessidenav.scss';

const ServicesSideNav = () => {
    const currentRoute = usePathname();

    return (
        <ul className="services-side-nav">
            {singleServiceData &&
                singleServiceData.map((val, index) => (
                    <li
                        key={index}
                        className={
                            currentRoute === `/services/${val.slug}`
                                ? 'active'
                                : ''
                        }
                    >
                        <Link href={`/services/${val.slug}`}>
                            {val.heading} <FaAngleRight />
                        </Link>
                    </li>
                ))}
        </ul>
    );
};

export default ServicesSideNav;
