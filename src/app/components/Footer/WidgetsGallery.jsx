import Image from 'next/image';
import galleryData from '@/app/data/gallery/gallery.json';

const WidgetsGallery = ({ items }) => {
    return (
        <div className="widget-gallery">
            {galleryData &&
                galleryData.slice(0, items).map((gallery, index) => (
                    <div
                        key={index}
                        id={`id-${gallery.id}`}
                        className="single-gallery"
                    >
                        <Image
                            src={gallery.thumb}
                            width={gallery.wiidth}
                            height={gallery.height}
                            alt={gallery.altText}
                        />
                    </div>
                ))}
        </div>
    );
};

export default WidgetsGallery;
