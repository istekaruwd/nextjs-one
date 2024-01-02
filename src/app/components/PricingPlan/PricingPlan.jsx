import Link from 'next/link';
import { FaArrowTurnUp, FaCheck, FaXmark } from 'react-icons/fa6';

import pricingData from '../../data/pricingplan/pricingplan.json';
import './pricingplan.scss';

const PricingPlan = () => {
    return (
        <section className="pricing-plan-area section-padding">
            <div className="container">
                <div className="row align-items-center g-4">
                    {pricingData &&
                        pricingData.map((pricing, index) => (
                            <div key={index} className="col-lg-4">
                                <div
                                    className={
                                        pricing.recommended
                                            ? 'single-pricing-plan recommended'
                                            : 'single-pricing-plan'
                                    }
                                >
                                    <div className="pricing-top">
                                        <h4>{pricing.planName}</h4>
                                        <div className="price-data">
                                            {pricing.currencyType}
                                            {pricing.planPrice}
                                            <span>{pricing.subscribePlan}</span>
                                        </div>
                                    </div>
                                    <ul className="pricing-list">
                                        {pricing.planFeatures &&
                                            pricing.planFeatures.map(
                                                (list, idx) => (
                                                    <li key={idx}>
                                                        {list.active ? (
                                                            <FaCheck />
                                                        ) : (
                                                            <FaXmark />
                                                        )}
                                                        {list.list}
                                                    </li>
                                                )
                                            )}
                                    </ul>
                                    <div className="pricing-btm">
                                        <div className="theme-btn">
                                            <Link href={pricing.btnLink}>
                                                {pricing.btnText}
                                                <FaArrowTurnUp />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPlan;
