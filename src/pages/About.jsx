import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const About = () => {
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
                    <h3 class="text-white display-3 mb-4">About Us</h3>
                    <p class="fs-5 text-white mb-4">Learn about our mission, vision, and values. Discover our journey and the team behind our efforts to empower women and uplift communities.</p>
                    <ol class="breadcrumb justify-content-center mb-0">
                        <li class="breadcrumb-item"><a href="/" className="headingred">Home</a></li>
                        <li class="breadcrumb-item"><a href="/" className="headingred">Pages</a></li>
                        <li class="breadcrumb-item active text-white">About Us</li>
                    </ol>
                </div>
            </div>
            {/* <!-- Header End --> */}
            {/* <!-- About Start --> */}
            <div className="container-fluid about  py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-5">
                            <div className="h-100">
                                <img src='../assets/ngoImgs/img7.jpg' className="img-fluid w-100 h-100" alt="Image" />
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <h5 className="text-uppercase headingred">About Us</h5>
                            <h1 className="mb-4">Our main goal is to protect environment</h1>
                            <p className="fs-5 mb-4">Welcome to Fatima-Tu-Zahra Women Welfare Society. We are not just an organization; we are a family united by our passion for serving those in need. Our mission is to uplift and support the underserved communities around us. But beyond all else, we are driven by a deep-rooted desire to protect the environment, the very essence of our existence.

                            </p>
                            <div className="tab-className bggray p-4">
                                <ul class="nav d-flex mb-2" >
                                    <li class="nav-item mb-3">
                                        <Link className={`btn d-flex  py-2 text-center ${activeButton === 'About' ? 'bg-danger text-white' : 'bg-white'}`} onClick={() => handleButtonClick('About')} data-bs-toggle="pill" to="#tab-1">
                                            <span class="text-dar " style={{ width: '150px' }}>About</span>
                                        </Link>
                                    </li>
                                    <li class="nav-item mb-3">
                                        <Link className={`btn d-flex  py-2 mx-3 text-center ${activeButton === 'Mission' ? 'bg-danger text-white' : 'bg-white'}`} onClick={() => handleButtonClick('Mission')} data-bs-toggle="pill" to="#tab-2">
                                            <span class="text-dar " style={{ width: '150px' }}>Mission</span>
                                        </Link>
                                    </li>
                                    <li class="nav-item mb-3">
                                        <Link className={`btn d-flex  py-2 text-center ${activeButton === 'Vision' ? 'bg-danger text-white' : 'bg-white'}`} onClick={() => handleButtonClick('Vision')} data-bs-toggle="pill" to="#tab-3">
                                            <span class="text-dar " style={{ width: '150px' }}>Vision</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tab-1" className="tab-pane fade show p-0 active">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-flex">
                                                    <div className="text-start my-auto">
                                                        <h5 className="text-uppercase mb-3">Supporting Women and Families</h5>
                                                        <p className="mb-4">Behind every smile we bring, there's a story of resilience, of strength, and of hope. We stand by women and families in their darkest hours, offering them not just material support but also the warmth of human connection. Whether it's arranging marriages for underprivileged girls or providing essential supplies to widows, our love knows no bounds.
                                                        </p>
                                                        <div className="d-flex align-items-center justify-content-start">
                                                            <Link className=" btn btnred py-2 px-4" to="about">Read More</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-2" className="tab-pane fade show p-0">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-flex">
                                                    <div className="text-start my-auto">
                                                        <h5 className="text-uppercase mb-3">Empowering Communities Through Education</h5>
                                                        <p className="mb-4">Education is not just about books and classrooms; it's about unlocking potential, igniting dreams, and breaking barriers. Through our free schooling programs and vocational training opportunities, we are not only shaping minds but also empowering souls. We believe that education is the key to unlocking a brighter future, not just for individuals, but for entire communities.
                                                        </p>
                                                        <div className="d-flex align-items-center justify-content-start">
                                                            <Link className=" btn btnred py-2 px-4" to="about">Read More</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-3" className="tab-pane fade show p-0">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-flex">
                                                    <div className="text-start my-auto">
                                                        <h5 className="text-uppercase mb-3">Building Sustainable Communities</h5>
                                                        <p className="mb-4">Together, we are architects of change, builders of a better world. We envision communities where every voice is heard, every need is met, and every dream is within reach. Through advocacy, collaboration, and sheer determination, we are laying the foundation for a future where sustainability is not just a goal but a way of life.
                                                        </p>
                                                        <div className="d-flex align-items-center justify-content-start">
                                                            <Link className=" btn btnred py-2 px-4" to="about">Read More</Link>
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
                </div>
            </div>
            {/* <!-- About End --> */}
            {/* <!-- Volunteers Start --> */}
            <div className="container-fluid volunteer py-5 mt-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-5">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="volunteer-img">
                                        <img src='../assets/ngoImgs/m4.jpg' className="img-fluid w-100" alt="Image" />
                                        <div className="volunteer-title">
                                            <h5 className="mb-2 text-white">Michel Brown</h5>
                                            <p className="mb-0 text-white">Communicator</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="volunteer-img">
                                        <img src='../assets/ngoImgs/m1.jpg' className="img-fluid w-100" alt="Image" />
                                        <div className="volunteer-title">
                                            <h5 className="mb-2 text-white">Michel Brown</h5>
                                            <p className="mb-0 text-white">Communicator</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="volunteer-img">
                                        <img src='../assets/ngoImgs/m2.jpg' className="img-fluid w-100" alt="Image" />
                                        <div className="volunteer-title">
                                            <h5 className="mb-2 text-white">Michel Brown</h5>
                                            <p className="mb-0 text-white">Communicator</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="volunteer-img">
                                        <img src='../assets/ngoImgs/m3.jpg' className="img-fluid w-100" alt="Image" />
                                        <div className="volunteer-title">
                                            <h5 className="mb-2 text-white">Michel Brown</h5>
                                            <p className="mb-0 text-white">Communicator</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <h5 className="text-uppercase headingred">Become a Volunteer?</h5>
                            <h1 className="mb-4">Join your hand with us for a better life and beautiful future.</h1>
                            <p className="mb-4">At Fatima-Tu-Zahra Women Welfare Society, we foster a culture of camaraderie and support. If you join us, you'll receive free training, equipping you with the skills needed to make a meaningful impact. This is your chance to lend a hand in improving the lives of the underprivileged and safeguarding our environment. There are no specific requirements; all that matters is your willingness to help. Best of all, joining us won't cost you a penny. We value your time and dedication, not your money. Take this opportunity to make a difference today.
                            </p>
                            <p className="text-dark"><i className=" fa fa-check headingred me-2"></i> We are friendly to each other.</p>
                            <p className="text-dark"><i className=" fa fa-check headingred me-2"></i> If you join with us,We will give you free training.</p>
                            <p className="text-dark"><i className=" fa fa-check headingred me-2"></i> Its an opportunity to help poor Environments.</p>
                            <p className="text-dark"><i className=" fa fa-check headingred me-2"></i> No goal requirements.</p>
                            <p className="text-dark mb-5"><i className=" fa fa-check headingred me-2"></i> Joining is tottaly free. We dont need any money from you.</p>
                            <Link className=" btn btnred py-2 px-4" to="donate">Join With Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Volunteers End --> */}
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
                                                    <h5 className="mb-4">CEmployment Opportunities for Educated Women:</h5>
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

export default About