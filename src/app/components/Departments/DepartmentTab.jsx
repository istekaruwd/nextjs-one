'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import { FaArrowTurnUp } from 'react-icons/fa6';
import departmentsData from '@/app/data/departments/departments.json';

const DepartmentTab = () => {
    return (
        <div className="departments-content">
            <Tab.Container
                id="departments-tabs"
                defaultActiveKey={`dTab-${departmentsData[0].id}`}
            >
                <div className="row g-0 align-items-center">
                    <div className="col-xl-auto">
                        <Nav
                            variant="pills"
                            className="flex-column departments-nav"
                        >
                            {departmentsData &&
                                departmentsData.map((value, index) => (
                                    <Nav.Item key={index}>
                                        <Nav.Link eventKey={`dTab-${value.id}`}>
                                            <span className="nav-icon">
                                                <Image
                                                    src={value.icon}
                                                    width={30}
                                                    height={30}
                                                    alt={value.title}
                                                />
                                            </span>
                                            <span className="nav-text">
                                                {value.department}
                                            </span>
                                        </Nav.Link>
                                    </Nav.Item>
                                ))}
                        </Nav>
                    </div>
                    <div className="col">
                        <Tab.Content>
                            {departmentsData &&
                                departmentsData.map((tabcontent, index) => (
                                    <Tab.Pane
                                        key={index}
                                        eventKey={`dTab-${tabcontent.id}`}
                                    >
                                        <div className="row align-items-center g-0">
                                            <div className="col-lg-6 order-lg-2">
                                                <div className="department-thumb">
                                                    <Image
                                                        src={tabcontent.thumb}
                                                        width={1125}
                                                        height={750}
                                                        alt={tabcontent.title}
                                                        priority
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="department-txt">
                                                    <div className="department-icon">
                                                        <Image
                                                            src={
                                                                tabcontent.icon
                                                            }
                                                            width={60}
                                                            height={60}
                                                            alt={
                                                                tabcontent.title
                                                            }
                                                        />
                                                    </div>
                                                    <h3>{tabcontent.title}</h3>
                                                    <p>
                                                        {
                                                            tabcontent.shortDescription
                                                        }
                                                    </p>
                                                    <div className="theme-btn">
                                                        <Link
                                                            href={`/departments/${tabcontent.slug}`}
                                                        >
                                                            {
                                                                tabcontent.buttonText
                                                            }
                                                            <FaArrowTurnUp />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                ))}
                        </Tab.Content>
                    </div>
                </div>
            </Tab.Container>
        </div>
    );
};

export default DepartmentTab;
