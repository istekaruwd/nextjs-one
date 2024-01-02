import Image from 'next/image';
import { FaBarsStaggered } from 'react-icons/fa6';

import teamMembersData from '@/app/data/team/team.json';

import './departmentdoctors.scss';

const DepartmentDoctors = () => {
    return (
        <div className="department-doctors">
            <h3 className="department-doctors-heading">
                Available Doctors <FaBarsStaggered />
            </h3>
            {teamMembersData &&
                teamMembersData.map((value, index) => (
                    <div key={index} className="single-avail-dr">
                        <div className="single-avail-dr-thumb">
                            <Image
                                src={value.thumb}
                                alt={value.name}
                                width={514}
                                height={601}
                            />
                        </div>
                        <div className="single-avail-dr-txt">
                            <h4>{value.name}</h4>
                            <p>{value.designation}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default DepartmentDoctors;
