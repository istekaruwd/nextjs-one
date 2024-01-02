import PageHeader from '@/app/components/PageHeader/PageHeader';
import Contact from '@/app/components/Contact/Contact';

export const metadata = {
    title: 'Contact - Medies',
    description: 'Health & Medical React Next Js Template',
};

const ContactPage = () => {
    return (
        <>
            <PageHeader title="Contact us" />
            <Contact />
        </>
    );
};

export default ContactPage;
