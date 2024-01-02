import PageHeader from '@/app/components/PageHeader/PageHeader';
import Blog from '@/app/components/Blog/Blog';

export const metadata = {
    title: 'Blog - Medies',
    description: 'Health & Medical React Next Js Template',
};

const BlogPage = () => {
    return (
        <>
            <PageHeader title="Our Blog" />
            <Blog />
        </>
    );
};

export default BlogPage;
