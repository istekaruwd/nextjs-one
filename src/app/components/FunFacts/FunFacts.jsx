'use client';

import { useState } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import funfactBg from '../../../../public/img/funfact/bg.jpg';
import funFactsData from '@/app/data/funfacts/funfacts.json';
import './funfacts.scss';

const FunFacts = () => {
    const [counterStart, setCounterStart] = useState(false);

    return (
        <section className="funfact-area section-padding">
            <div className="funfact-bg">
                <Image src={funfactBg} alt="Fun Facts BG" priority />
            </div>
            <ScrollTrigger
                onEnter={() => setCounterStart(true)}
                onExit={() => setCounterStart(false)}
            >
                <div className="container">
                    <div className="row g-4">
                        {funFactsData &&
                            funFactsData.map((value, index) => (
                                <div key={index} className="col-lg-3 col-sm-6">
                                    <div className="single-funfact">
                                        <Image
                                            src={value.icon}
                                            width={60}
                                            height={60}
                                            alt={value.counterText}
                                        />
                                        <div className="count">
                                            <span className="number">
                                                {counterStart && (
                                                    <CountUp
                                                        className="fun-fact-project"
                                                        start={0}
                                                        end={
                                                            value.counterNumber
                                                        }
                                                        duration={2.75}
                                                        delay={0}
                                                    />
                                                )}
                                            </span>
                                            {value.mathSymbol}
                                        </div>
                                        <h3>{value.counterText}</h3>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </ScrollTrigger>
        </section>
    );
};

export default FunFacts;
