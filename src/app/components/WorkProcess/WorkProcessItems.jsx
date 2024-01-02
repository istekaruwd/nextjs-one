import Image from 'next/image';

import workProcessData from '@/app/data/workprocess/workprocess.json';

const WorkProcessItems = () => {
    return (
        <div className="work-process-items">
            <div className="row">
                {workProcessData &&
                    workProcessData.map((process, index) => (
                        <div key={index} className="col-lg-3">
                            <div className="single-work-process">
                                <div className="work-process-thumb">
                                    <Image
                                        src={process.thumb}
                                        alt={process.heading}
                                        width={600}
                                        height={400}
                                    />
                                    <div className="process-num">
                                        {process.number}
                                    </div>
                                </div>
                                <h3>{process.heading}</h3>
                                <p>{process.shortDescription}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default WorkProcessItems;
