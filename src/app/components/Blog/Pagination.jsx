import Link from 'next/link';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

import './blog.scss';

const Pagination = () => {
    return (
        <div className="blog-pagination">
            <div className="prev">
                <Link href="/blog">
                    <FaArrowLeftLong />
                </Link>
            </div>
            <div className="pagi-number">
                <Link href="/blog">1</Link>
                <Link href="/blog">2</Link>
                <Link href="/blog" className="active">
                    3
                </Link>
                <Link href="/blog">4</Link>
                <Link href="/blog">5</Link>
            </div>
            <div className="next">
                <Link href="/blog">
                    <FaArrowRightLong />
                </Link>
            </div>
        </div>
    );
};

export default Pagination;
