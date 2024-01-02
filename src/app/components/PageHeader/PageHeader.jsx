import Image from 'next/image';
import { FaGripLinesVertical } from 'react-icons/fa6';

import pageHeaderBg from '../../../../public/img/page-header/bg.jpg';
import './pageheader.scss';

const PageHeader = ({ title }) => {
    return (
        <div className="page-headeer">
            <div className="page-headeer-bg">
                <Image src={pageHeaderBg} alt="Page headeer Bg" priority />
            </div>
            <div className="container">
                <div className="page-headeer-con">
                    <h2>
                        <FaGripLinesVertical />
                        {title}
                        <FaGripLinesVertical />
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
