import Image from 'next/image';
import Link from 'next/link';
import {
    FaArrowUpRightFromSquare,
    FaCalendarDays,
    FaGripLinesVertical,
} from 'react-icons/fa6';
import homeBlogTwoData from '@/app/data/blog/blog.json';

const HomeBlogItems = ({ items }) => {
    return (
        <>
            {homeBlogTwoData &&
                homeBlogTwoData.slice(0, items).map((blog, index) => (
                    <div
                        key={index}
                        className={
                            index === 0
                                ? 'single-post single-post-big'
                                : 'single-post'
                        }
                        id={`homePost${blog.id}`}
                    >
                        <div className="single-post-thumb">
                            <Image
                                src={blog.thumb}
                                alt={blog.title}
                                width={1102}
                                height={620}
                            />
                        </div>
                        <div className="single-post-txt">
                            <h4>
                                <FaGripLinesVertical />
                                <Link href={`/blog/${blog.slug}`}>
                                    {blog.title}
                                </Link>
                            </h4>
                            <div className="single-post-meta">
                                <div className="single-post-date">
                                    <FaCalendarDays /> {blog.publishDate}
                                </div>
                                <Link href={`/blog/${blog.slug}`}>
                                    <FaArrowUpRightFromSquare />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default HomeBlogItems;
