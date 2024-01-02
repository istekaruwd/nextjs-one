import PageHeader from '@/app/components/PageHeader/PageHeader';
import Gallery from '@/app/components/Gallery/Gallery';

export const metadata = {
    title: 'Gallery - Medies',
    description: 'Health & Medical React Next Js Template',
};

const galleryPage = () => {
    return (
        <>
            <PageHeader title="Our Gallery" />
            <Gallery />
        </>
    );
};

export default galleryPage;
