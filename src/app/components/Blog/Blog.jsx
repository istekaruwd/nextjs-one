import Link from 'next/link';
import Image from 'next/image';
import { FaRegComment, FaRegUser, FaArrowTurnUp } from 'react-icons/fa6';

import Pagination from './Pagination';
import blogData from '@/app/data/blog/blog.json';
import './blog.scss';

const Blog = () => {
    return (
        <div className="blog-page section-padding">
            <div className="container">
                <div className="row">
                    {blogData &&
                        blogData.map((value, index) => (
                            <div className="col-lg-6" key={index}>
                                <div className="single-blog">
                                    <div className="blog-thumb">
                                        <Image
                                            src={value.thumb}
                                            width={1920}
                                            height={1080}
                                            alt={value.title}
                                        />
                                        <div className="blog-date">
                                            {value.publishDate}
                                        </div>
                                    </div>
                                    <ul className="blog-meta">
                                        <li>
                                            <FaRegUser /> {value.blogAuthor}
                                        </li>
                                        <li>
                                            <FaRegComment />
                                            {value.comments
                                                ? value.comments.length
                                                : '0'}
                                        </li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link href={`/blog/${value.slug}`}>
                                            {value.title}
                                        </Link>
                                    </h3>
                                    <p>{value.excerpt}</p>
                                    <div className="theme-btn">
                                        <Link href={`/blog/${value.slug}`}>
                                            Read more
                                            <FaArrowTurnUp />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                {/* Blog Pagination */}
                <Pagination />
            </div>
        </div>
    );
};

export default Blog;
