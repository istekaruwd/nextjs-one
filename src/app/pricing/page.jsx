import PageHeader from '@/app/components/PageHeader/PageHeader';
import PricingPlan from '@/app/components/PricingPlan/PricingPlan';

export const metadata = {
    title: 'Pricing Plan - Medies',
    description: 'Health & Medical React Next Js Template',
};

const pricingPage = () => {
    return (
        <>
            <PageHeader title="Pricing plan" />
            <PricingPlan />
        </>
    );
};

export default pricingPage;
