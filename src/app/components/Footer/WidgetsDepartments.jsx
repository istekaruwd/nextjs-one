import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';

import departmentsWidgetData from '@/app/data/departments/departments.json';

const WidgetsDepartments = ({ items }) => {
    return (
        <ul>
            {departmentsWidgetData &&
                departmentsWidgetData
                    .slice(0, items)
                    .map((department, index) => (
                        <li key={index}>
                            <Link href={`/departments/${department.slug}`}>
                                <FaAngleRight /> {department.title}
                            </Link>
                        </li>
                    ))}
        </ul>
    );
};

export default WidgetsDepartments;
