import PageHeader from '@/app/components/PageHeader/PageHeader';
import Departments from '@/app/components/Departments/Departments';

export const metadata = {
    title: 'Departments - Medies',
    description: 'Health & Medical React Next Js Template',
};

const DepartmentsPage = () => {
    return (
        <>
            <PageHeader title="Our sector" />
            <Departments />
        </>
    );
};

export default DepartmentsPage;
