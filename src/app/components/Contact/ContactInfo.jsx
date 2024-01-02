import Link from 'next/link';
import Image from 'next/image';

import contactInfoData from '@/app/data/contact/contactinfo.json';

const ContactInfo = () => {
    return (
        <>
            {contactInfoData &&
                contactInfoData.map((value, index) => (
                    <div key={index} className="single-appointment-info">
                        <div className="appointment-info-icon">
                            <Image
                                src={value.icon}
                                width={40}
                                height={40}
                                alt={value.name}
                            />
                        </div>
                        <div className="appointment-info-txt">
                            <h3>{value.name}</h3>
                            <Link href={value.link}>{value.info}</Link>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default ContactInfo;
