import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaRegComment, FaRegUser } from 'react-icons/fa6';

import PageHeader from '@/app/components/PageHeader/PageHeader';
import BlogComments from '@/app/components/BlogComments/BlogComments';
import singleBlogData from '@/app/data/blog/blog.json';
import './singleblogpage.scss';

export const metadata = {
    title: 'Single Blog - Medies',
    description: 'Health & Medical React Next Js Template',
};

export async function generateStaticParams() {
    return singleBlogData.map((post) => ({
        singleblogpage: post.slug,
    }));
}

const SingleBlogPage = ({ params }) => {
    const { slug } = params;
    const singlePost = singleBlogData.find(
        (post) => post.slug.toString() === slug
    );

    if (!singlePost) {
        notFound();
    }

    return (
        <>
            <PageHeader title={singlePost.title} />
            <section className="single-blog-page section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="single-blog-page-con">
                                <div className="single-blog-page-thumb">
                                    <Image
                                        src={singlePost.thumb}
                                        width={1920}
                                        height={1080}
                                        alt={singlePost.title}
                                    />
                                    <div className="single-blog-page-date">
                                        {singlePost.publishDate}
                                    </div>
                                </div>
                                <ul className="single-blog-page-meta">
                                    <li>
                                        <FaRegUser /> {singlePost.blogAuthor}
                                    </li>
                                    <li>
                                        <FaRegComment />
                                        {singlePost.comments
                                            ? singlePost.comments.length
                                            : '0'}
                                    </li>
                                </ul>
                                <div className="single-blog-page-text">
                                    <p>{singlePost.content}</p>
                                    <h3>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h3>
                                    <p>
                                        Donec nec justo eget felis facilisis
                                        fermentum. Aliquam porttitor mauris sit
                                        amet orci. Aenean dignissim pellentesque
                                        felis.
                                    </p>
                                    <h4>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h4>
                                    <ul>
                                        <li>
                                            Aliquam tincidunt mauris eu risus.
                                        </li>
                                        <li>
                                            Vestibulum auctor dapibus neque.
                                        </li>
                                        <li>Nunc dignissim risus id metus.</li>
                                        <li>
                                            Vivamus vestibulum ntulla nec ante.
                                        </li>
                                        <li>
                                            Vestibulum commodo felis quis
                                            tortor.
                                        </li>
                                    </ul>
                                    <blockquote>
                                        <p>
                                            It is a long established fact that a
                                            reader will be distracted by the
                                            readable content of a page when
                                            looking at its layout.
                                        </p>
                                        <p>
                                            <strong>– Michal Smart</strong>
                                        </p>
                                    </blockquote>
                                </div>
                                {/* Comment Area */}
                                <BlogComments singlePostData={singlePost} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleBlogPage;
