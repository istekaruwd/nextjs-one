import PageHeader from '@/app/components/PageHeader/PageHeader';
import Team from '@/app/components/Team/Team';

export const metadata = {
    title: 'Doctors - Medies',
    description: 'Health & Medical React Next Js Template',
};

const doctorsPage = () => {
    return (
        <>
            <PageHeader title="Meet our specialists" />
            <Team />
        </>
    );
};

export default doctorsPage;
