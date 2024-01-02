import Image from 'next/image';

import headerInfoData from '@/app/data/contact/contactinfo.json';

const HeaderInfo = () => {
    return (
        <div className="header-top-info">
            {headerInfoData &&
                headerInfoData.map((headerInfo, index) => (
                    <div key={index} className="single-info">
                        <Image
                            src={headerInfo.icon}
                            width={16}
                            height={16}
                            alt={headerInfo.name}
                        />{' '}
                        {headerInfo.info}
                    </div>
                ))}
        </div>
    );
};

export default HeaderInfo;
