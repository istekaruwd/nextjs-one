import Image from 'next/image';
import Link from 'next/link';
import { FaGripLinesVertical } from 'react-icons/fa6';

import './BlogComments.scss';
import CommentForm from './CommentForm';

const BlogComments = ({ singlePostData }) => {
    return (
        <div className="comments-area">
            <h3 className="comments-title">
                <FaGripLinesVertical />

                {(() => {
                    if (
                        singlePostData.comments &&
                        singlePostData.comments.length > 1
                    )
                        return `${singlePostData.comments.length} Comments`;
                    if (
                        singlePostData.comments &&
                        singlePostData.comments.length === 1
                    )
                        return `${singlePostData.comments.length} Comment`;
                    else return '0 Comment';
                })()}
            </h3>
            <ol className="comment-list">
                {
                    /* Single Comment */
                    singlePostData.comments &&
                        singlePostData.comments.map((com, index) => (
                            <li key={index} className="single-comment">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <Link
                                            href="#"
                                            className="comment-thumb"
                                        >
                                            <Image
                                                src={com.commenterThumb}
                                                width={100}
                                                height={100}
                                                alt={com.commenterName}
                                                blurDataURL={com.commenterThumb}
                                            />
                                        </Link>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <div className="comment-heading">
                                            <h4>
                                                {com.commenterName}
                                                {' - '}
                                                <span>{com.commentDate}</span>
                                            </h4>
                                        </div>
                                        <div className="comment-text">
                                            {com.commentText}
                                        </div>
                                        <div className="reply">
                                            <Link href="#">Reply</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                }
            </ol>
            {/* Comment Form */}
            <CommentForm />
        </div>
    );
};

export default BlogComments;
