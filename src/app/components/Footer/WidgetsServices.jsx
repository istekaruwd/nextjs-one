import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

import servicesWidgetData from '@/app/data/services/services.json';

const WidgetsServices = ({ items }) => {
    return (
        <ul>
            {servicesWidgetData &&
                servicesWidgetData.slice(0, items).map((service, index) => (
                    <li key={index}>
                        <Link href={`/services/${service.slug}`}>
                            <FaArrowRightLong /> {service.heading}
                        </Link>
                    </li>
                ))}
        </ul>
    );
};

export default WidgetsServices;
