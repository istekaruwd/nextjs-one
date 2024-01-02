'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowTurnUp } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import sliderBannerData from '@/app/data/sliderbanner/sliderbanner.json';
import './sliderbanner.scss';

const SliderBanner = () => {
    return (
        <section className="slider-banner-area">
            <Swiper
                loop={true}
                grabCursor={true}
                navigation
                pagination={{ type: 'fraction' }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="slider-banner"
            >
                {sliderBannerData &&
                    sliderBannerData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="single-slide">
                                <div className="slide-bg">
                                    <Image
                                        src={slide.bg}
                                        alt={slide.title}
                                        width={2000}
                                        height={1333}
                                        priority
                                    />
                                </div>
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7 order-lg-2">
                                            <div className="slide-thumb-area">
                                                <div className="slide-thumb">
                                                    <Image
                                                        src={slide.thumb}
                                                        alt={slide.title}
                                                        width={750}
                                                        height={501}
                                                        priority
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="slide-text">
                                                <h1>{slide.title}</h1>
                                                <p>{slide.description}</p>
                                                <div className="theme-btn">
                                                    <Link href={slide.btnLink}>
                                                        {slide.btnText}
                                                        <FaArrowTurnUp />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
};

export default SliderBanner;
