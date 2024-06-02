import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Donate = () => {
    const [activeButton, setActiveButton] = useState('About');

    // Function to handle button clicks
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    function Counter({ initialValue, duration }) {
        const [count, setCount] = useState(0);

        useEffect(() => {
            let start = 0;
            const end = parseInt(initialValue, 10);
            const incrementTime = (duration / end) * 1000;

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) {
                    clearInterval(timer);
                }
            }, incrementTime);

            return () => clearInterval(timer);
        }, [initialValue, duration]);

        return <span>{count}</span>;
    }
    return (
        <>
            {/* <!-- Header Start --> */}
            <div class="container-fluid bg-breadcrumb">
                <div class="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h3 class="text-white display-3 mb-4">Donate now</h3>
                    <p class="fs-5 text-white mb-4">Help today because tomorrow you may be the one who needs more helping!</p>
                    <ol class="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><Link to="/" className="headingred">Home</Link></li>
                        <li class="breadcrumb-item active text-white">Donate Now</li>
                    </ol>
                </div>
            </div>
            {/* <!-- Header End --> */}
            <div className="container-fluid blog ">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
                        <h5 className="text-uppercase headingred">Donate Now</h5>
                        <div className='bg-success'>
                            <h1 className='text-primary'>Total Income Last Year: <h1>RS: 788940/-</h1></h1>
                            <h1 className='text-primary'>Total Overhead Expenses Last Year: <h1>RS: 833569/-</h1></h1>
                        </div>
                        <h1 className="mb-0">Donate Now to Support Our Mission
                        </h1>
                        <p class="fs-5 mb-4">Join hands with us to make a difference in the lives of women and communities in need. Your donations fuel our efforts to empower women, provide education, and support the underprivileged.</p>
                        <div className="tab-className bggray p-4">
                            <div className="tab-content">
                                <h5 className="text-uppercase headingred">donate your charity and gifts to Fatima tu Zahra Women Welfare.</h5>
                                <h5 className="mb-4">Bank : UBL</h5>
                                <h5 className="mb-4">Account Number : 227082838</h5>
                                <h5 className="mb-4">Branch Code : 0248 (pindi Bhattian)</h5>
                                <h5 className="mb-4">For OVERSEAS IBN: PK59 UNIL 0109000227082838</h5>
                                <h5 className="mb-4">Your gifts ensure a bright future for these women and children.</h5>
                            </div>

                            <div className="tab-content">
                                <h5 className="text-uppercase headingred">donate your charity and gifts to Fatima tu Zahra Women Welfare.</h5>
                                <h5 className="mb-4">Bank : UBL</h5>
                                <h5 className="mb-4">Account Number : 287907359</h5>
                                <h5 className="mb-4">Branch Code : 0248 (pindi Bhattian)</h5>
                                <h5 className="mb-4">For OVERSEAS IBN: PK81 UNIL 0109000287907359</h5>
                                <h5 className="mb-4">BANK ACCOUNT NAME: FATIMA TU ZAHARA CENTER</h5>
                                <h5 className="mb-4">Your gifts ensure a bright future for these women and children.</h5>
                            </div>

                            <div className="tab-content">
                                <h5 className="text-uppercase headingred">donate your charity and gifts to Fatima tu Zahra Women Welfare.</h5>
                                <h5 className="mb-4">Easypaisa / Jazzcash</h5>
                                <h5 className="mb-4">Account Number : 0300 0430773</h5>
                                <h5 className="mb-4">Your gifts ensure a bright future for these women and children.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About Start --> */}
            <div className="container-fluid about  ">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-7">
                            <h5 className="text-uppercase headingred">Our Mission:</h5>
                            <h3 className="mb-4">Empowering Women for Success and Community Development</h3>
                            <h5 className="mb-4">Empowering Women's Success:</h5>
                            <p className="fs-5 mb-4">We strive to uplift women by providing them with resources and opportunities to achieve success in their personal and professional lives.Your donations enable us to offer free skill development courses, empowering women to acquire new skills and become financially independent.
                            </p>
                        </div>
                        <div className="col-xl-5">
                            <h1 className="mb-4">President Message</h1>
                            <img src='/assets/ngoImgs/DrAqsa.jpeg' className='img-fluid' width='220px' height='80px' />
                            <p className="fs-5 mb-4">We have organized and registered (NGOs) Fatima-Tu-Zahra Women Welfare Society Pindi Bhattian. For the welfare of women of this town ; We will struggle for betterment of women in the field of Education "Health,Skill" Poverty and entertainment. We will support orphans Child poor women... Kindly Pray for Us for this Pious Service. We hope for yours Support.Thanks</p>
                            <h5 className="text-uppercase headingred">Dr.Aqsa zamaan</h5>
                        </div>
                        <div className="tab-className p-2">
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane fade show p-0 active">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex">
                                                <div className="text-start my-auto">
                                                    <h5 className="mb-4">Free Skill Development Courses for the Unprivileged:</h5>
                                                    <p className="fs-5 mb-4">Help us in our mission to provide free skill development courses to the underprivileged, allowing them to gain valuable skills for sustainable livelihoods.
                                                        Your contributions enable us to offer courses in various fields, including computer literacy, vocational training, and entrepreneurship.
                                                    </p>
                                                    <h5 className="mb-4">Education Support for the Needy:</h5>
                                                    <p className="fs-5 mb-4">Your donations support our efforts to provide educational assistance to impoverished children and orphans, ensuring they have access to quality education.
                                                        Together, we can make a difference by funding school fees, educational materials, and tutoring services for those in need.
                                                    </p>
                                                    <h5 className="mb-4">Bridging the Digital Divide:</h5>
                                                    <p className="fs-5 mb-4">Contribute to our cause of bridging the digital divide by providing computer literacy training to women from low-income backgrounds.
                                                        Your support helps us equip women with essential computer skills, opening up opportunities for better employment and economic growth.
                                                    </p>
                                                    <h5 className="mb-4">Providing Food Assistance to the Needy:</h5>
                                                    <p className="fs-5 mb-4">Your donations help us provide essential food supplies to impoverished and vulnerable women, ensuring they have access to nutritious meals.
                                                        By supporting us, you directly contribute to alleviating hunger and improving the well-being of disadvantaged women and families.
                                                    </p>
                                                    <h5 className="mb-4">Promoting Women's Health and Well-being:</h5>
                                                    <p className="fs-5 mb-4">Support our initiatives aimed at providing women with essential health advice and resources to improve their overall well-being.
                                                        Your contributions enable us to conduct health awareness programs and provide access to basic healthcare services for women in underserved communities.
                                                    </p>
                                                    <h5 className="mb-4">Clothing Assistance for the Needy:</h5>
                                                    <p className="fs-5 mb-4">Help us in our mission to provide clothing assistance to impoverished women, ensuring they have access to clean and wearable clothing.
                                                        Your donations make it possible for us to distribute clothing items to those in need, promoting dignity and self-confidence.
                                                    </p>
                                                    <h5 className="mb-4">Employment Opportunities for Educated Women:</h5>
                                                    <p className="fs-5 mb-4">HSupport our efforts to empower educated and skilled women by providing them with job opportunities and career guidance.
                                                        Your contributions help us create employment opportunities and connect qualified women with suitable job placements, fostering economic independence and empowerment.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
        </>
    )
}

export default Donate