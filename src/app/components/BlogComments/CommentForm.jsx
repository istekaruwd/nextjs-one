'use client';

import {
    FaArrowTurnUp,
    FaGripLinesVertical,
    FaLink,
    FaRegComments,
    FaRegEnvelope,
    FaRegUser,
} from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(JSON.stringify(data));
        toast.success('Message Submited');
    };

    return (
        <div className="comment-respond">
            <ToastContainer />
            <h3 className="comment-reply-title">
                <FaGripLinesVertical /> Leave a comment
            </h3>
            <p className="comment-notes">
                Fill out all required fields to send a message. You have to
                login to your wordpress account to post any comment. Please dont
                spam, thank you!
            </p>
            <form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <span className="input-group-text">
                        <FaRegComments />
                    </span>
                    <textarea
                        rows="6"
                        className="form-control"
                        placeholder="Message"
                        {...register('message', {
                            required: 'Message is required',
                        })}
                        aria-invalid={errors.message ? 'true' : 'false'}
                    />
                </div>
                {errors.message && (
                    <span className="text-danger mt-2">
                        {errors.message.message}
                    </span>
                )}
                <div className="row">
                    <div className="col-lg-6">
                        <div className="input-group">
                            <span
                                className="input-group-text"
                                id="comment-name"
                            >
                                <FaRegUser />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                                {...register('fullName', {
                                    required: 'Full Name is required',
                                })}
                                aria-invalid={
                                    errors.fullName ? 'true' : 'false'
                                }
                            />
                        </div>
                        {errors.fullName && (
                            <span className="text-danger mt-2">
                                {errors.fullName.message}
                            </span>
                        )}
                    </div>
                    <div className="col-lg-6">
                        <div className="input-group">
                            <span
                                className="input-group-text"
                                id="comment-email"
                            >
                                <FaRegEnvelope />
                            </span>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                {...register('email', {
                                    pattern: /\S+@\S+\.\S+/,
                                    required: 'Email Address is required',
                                })}
                                aria-invalid={errors.email ? 'true' : 'false'}
                            />
                        </div>
                        {errors.email && (
                            <span className="text-danger mt-2">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                </div>
                <div className="comment-form-btn">
                    <div className="theme-btn">
                        <button type="submit">
                            Post Comment <FaArrowTurnUp />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CommentForm;
