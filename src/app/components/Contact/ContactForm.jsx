'use client';

import Image from 'next/image';
import { FaArrowTurnUp } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import contactBg from '../../../../public/img/contact/bg.jpg';

const ContactForm = () => {
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
        <div className="appointment-form">
            <ToastContainer />
            <div className="appointment-form-bg">
                <Image src={contactBg} alt="Contact Bg" priority />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="appointment-input">
                    <label htmlFor="appointmentName" className="form-label">
                        Full name
                    </label>
                    <input
                        className="form-control"
                        id="appointmentName"
                        type="text"
                        {...register('fullName', {
                            required: 'Full Name is required',
                        })}
                        aria-invalid={errors.fullName ? 'true' : 'false'}
                    />
                    {errors.fullName && (
                        <span className="text-danger mt-2">
                            {errors.fullName.message}
                        </span>
                    )}
                </div>
                <div className="appointment-input">
                    <label htmlFor="appointmentEmail" className="form-label">
                        Email address
                    </label>
                    <input
                        className="form-control"
                        id="appointmentEmail"
                        type="email"
                        {...register('email', {
                            pattern: /\S+@\S+\.\S+/,
                            required: 'Email Address is required',
                        })}
                        aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && (
                        <span className="text-danger mt-2">
                            {errors.email.message}
                        </span>
                    )}
                </div>
                <div className="appointment-input">
                    <label htmlFor="appointmentSubject" className="form-label">
                        Your Subject
                    </label>
                    <input
                        className="form-control"
                        id="appointmentSubject"
                        type="text"
                        {...register('subject', {
                            required: 'Subject is required',
                        })}
                        aria-invalid={errors.subject ? 'true' : 'false'}
                    />
                    {errors.subject && (
                        <span className="text-danger mt-2">
                            {errors.subject.message}
                        </span>
                    )}
                </div>
                <div className="appointment-input">
                    <label htmlFor="appointmentMessage" className="form-label">
                        Your Message
                    </label>
                    <textarea
                        className="form-control"
                        id="appointmentMessage"
                        rows="5"
                        {...register('message', {
                            required: 'Message is required',
                        })}
                        aria-invalid={errors.message ? 'true' : 'false'}
                    />
                    {errors.message && (
                        <span className="text-danger mt-2">
                            {errors.message.message}
                        </span>
                    )}
                </div>
                <div className="theme-btn">
                    <button type="submit">
                        submit <FaArrowTurnUp />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
