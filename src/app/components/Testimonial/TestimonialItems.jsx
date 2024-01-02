'use client';

import { useCallback, useRef } from 'react';
import Image from 'next/image';
import {
    FaChevronLeft,
    FaChevronRight,
    FaQuoteLeft,
    FaQuoteRight,
    FaRegStar,
    FaStar,
    FaStarHalfStroke,
} from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import testimonialData from '@/app/data/testimonial/testimonial.json';
import './testimonial.scss';

const TestimonialItems = () => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <div className="row">
            <div className="col-lg-2">
                {/* Navigation */}
                <div className="testimonial-navigation">
                    <div
                        className="testimonial-button-prev"
                        onClick={handlePrev}
                    >
                        <FaChevronLeft />
                    </div>
                    <div
                        className="testimonial-button-next"
                        onClick={handleNext}
                    >
                        <FaChevronRight />
                    </div>
                </div>
            </div>
            <div className="col-lg-10">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 5000000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                    grabCursor={true}
                    spaceBetween={30}
                    ref={sliderRef}
                    modules={[Autoplay]}
                    className="services-carousel"
                >
                    {/* service Item */}
                    {testimonialData &&
                        testimonialData.map((value, index) => (
                            <SwiperSlide key={index}>
                                <div className="single-testimonial">
                                    <div className="testimonial-thumb">
                                        <Image
                                            src={value.imgUrl}
                                            width={640}
                                            height={427}
                                            alt={value.name}
                                        />
                                    </div>
                                    <div className="testimonial-txt">
                                        <p>{value.shortDescription}</p>
                                    </div>
                                    <div className="testimonial-info">
                                        <div className="testimonial-info-icon">
                                            <FaQuoteLeft />
                                        </div>
                                        <div className="testimonial-meta">
                                            <h3>{value.name}</h3>
                                            <h5>{value.position}</h5>
                                            <div className="testimonial-rating">
                                                {Array.from(
                                                    { length: 5 },
                                                    (ele, index) => {
                                                        let number =
                                                            index + 0.5;

                                                        return (
                                                            <span key={index}>
                                                                {value.rating >=
                                                                index + 1 ? (
                                                                    <FaStar />
                                                                ) : value.rating >=
                                                                  number ? (
                                                                    <FaStarHalfStroke />
                                                                ) : (
                                                                    <FaRegStar />
                                                                )}
                                                            </span>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                        <div className="testimonial-info-icon">
                                            <FaQuoteRight />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TestimonialItems;
