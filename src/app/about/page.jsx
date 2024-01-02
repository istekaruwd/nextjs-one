import PageHeader from '@/app/components/PageHeader/PageHeader';
import About from '@/app/components/About/About';
import WorkProcess from '@/app/components/WorkProcess/WorkProcess';
import FunFacts from '@/app/components/FunFacts/FunFacts';

export const metadata = {
    title: 'About - Medies',
    description: 'Health & Medical React Next Js Template',
};

const aboutPage = () => {
    return (
        <>
            <PageHeader title="Who we are" />
            <About />
            <WorkProcess />
            <FunFacts />
        </>
    );
};

export default aboutPage;
