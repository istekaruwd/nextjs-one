import PageHeader from '@/app/components/PageHeader/PageHeader';
import ServicesGrid from '@/app/components/ServicesGrid/ServicesGrid';

export const metadata = {
    title: 'Services - Medies',
    description: 'Health & Medical React Next Js Template',
};

const ServicesPage = () => {
    return (
        <>
            <PageHeader title="Our Services" />
            <ServicesGrid />
        </>
    );
};

export default ServicesPage;
