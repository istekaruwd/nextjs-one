import Image from 'next/image';
import Link from 'next/link';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from 'react-icons/fa6';

import teamMembersData from '@/app/data/team/team.json';

const TeamMembers = () => {
    return (
        <div className="row">
            {teamMembersData &&
                teamMembersData.map((team, index) => (
                    <div key={index} className="col-lg-6">
                        <div className="single-team">
                            <div className="team-thumb">
                                <Image
                                    src={team.thumb}
                                    alt={team.name}
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="team-content">
                                <h3>{team.name}</h3>
                                <h5>{team.designation}</h5>
                                <div className="team-soocial">
                                    <Link href={team.facebookUrl}>
                                        <FaFacebookF />
                                    </Link>
                                    <Link href={team.facebookUrl}>
                                        <FaTwitter />
                                    </Link>
                                    <Link href={team.facebookUrl}>
                                        <FaLinkedinIn />
                                    </Link>
                                    <Link href={team.facebookUrl}>
                                        <FaInstagram />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default TeamMembers;
