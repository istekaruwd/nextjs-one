'use client';

import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import galleryData from '@/app/data/gallery/gallery.json';
import './gallery.scss';

const Gallery = () => {
    return (
        <section className="gallery-area section-padding">
            <div className="container">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 320: 1, 768: 2, 992: 3 }}
                >
                    <Masonry gutter="30px">
                        {galleryData &&
                            galleryData.map((gallery, index) => (
                                <div key={index} className="single-gallery">
                                    <Image
                                        src={gallery.thumb}
                                        alt={gallery.altText}
                                        width={gallery.wiidth}
                                        height={gallery.height}
                                    />
                                </div>
                            ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </section>
    );
};

export default Gallery;
