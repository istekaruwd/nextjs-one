'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useRef } from 'react';
import {
    FaArrowRightLong,
    FaChevronLeft,
    FaChevronRight,
} from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ServiceData from '@/app/data/services/services.json';

const ServiceItems = () => {
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
                <div className="services-navigation">
                    <div className="service-button-prev" onClick={handlePrev}>
                        <FaChevronLeft />
                    </div>
                    <div className="service-button-next" onClick={handleNext}>
                        <FaChevronRight />
                    </div>
                </div>
            </div>
            <div className="col-lg-10">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    grabCursor={true}
                    spaceBetween={30}
                    ref={sliderRef}
                    modules={[Autoplay]}
                    className="testimonial-carousel"
                >
                    {
                        /* service Items */
                        ServiceData &&
                            ServiceData.map((value, index) => (
                                <SwiperSlide key={index}>
                                    <div className="single-service">
                                        <div className="service-icon">
                                            <div className="service-icon-box">
                                                <Image
                                                    src={value.icon}
                                                    width={40}
                                                    height={40}
                                                    alt={value.heading}
                                                />
                                            </div>
                                            <div className="service-number">
                                                {value.number}
                                            </div>
                                        </div>
                                        <h3>{value.heading}</h3>
                                        <p>{value.shortDescription}</p>
                                        <Link
                                            href={`/services/${value.slug}`}
                                            className="service-btn"
                                        >
                                            <FaArrowRightLong />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default ServiceItems;
