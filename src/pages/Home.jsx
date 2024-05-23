import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
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
            <div className="container-fluid carousel-header vh-100 px-0">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src='/assets/ngoImgs/i7.jpg' className="img-fluid" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>WE'll Plan For Bright Futures</h4>
                                    <h3 className="display-4 text-capitalize text-white mb-4">Education for Child</h3>
                                    <p className="mb-5 fs-5">We provide free education to poor children, giving them hope for a better future. Every child deserves a chance to learn and grow.
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Link className=" btn btnred py-3 px-5" to="donate">Join With Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src='/assets/ngoImgs/i2.jpg' className="img-fluid" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>WE'll Plan For New Beginnings</h4>
                                    <h3 className="display-4 text-capitalize text-white mb-4">Helping Girls Marry</h3>
                                    <p className="mb-5 fs-5">We help poor girls get married, supporting them in starting a happy new life. Every girl deserves love and a joyful beginning.
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Link className=" btn btnred py-3 px-5" to="donate">Join With Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src='/assets/ngoImgs/i4.jpg' className="img-fluid" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>WE'll Plan For Helping Hands</h4>
                                    <h1 className="display-4 text-capitalize text-white mb-4">Support for the Needy</h1>
                                    <p className="mb-5 fs-5">We provide food and support to the needy and widows, showing them they are not alone. Everyone deserves compassion and care.
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Link className=" btn btnred py-3 px-5" to="donate">Join With Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <!-- Carousel End --> */}





            {/* <!-- About Start --> */}
            <div className="container-fluid about  py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-5">
                            <div className="h-100">
                                <img src='/assets/ngoImgs/i8.jpg' className="img-fluid w-100 h-100" alt="Image" />
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


            {/* <!-- Services Start --> */}
            <div className="container-fluid service py-5 bglighred">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
                        <h5 className="text-uppercase headingred">What we do</h5>
                        <h1 className="mb-0">Bringing Hope, Dignity, and Transformation</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="service-item">
                                <img src='/assets/ngoImgs/img3.jpg' className="img-fluid w-100" alt="Image" />
                                <div className="service-link">
                                    <Link to="blog" className="h5 mb-0">Nurturing Dreams Through Education</Link>
                                </div>
                            </div>
                            <p className="my-4">We empower individuals through education, nurturing dreams and unlocking potential for a brighter future. Our programs inspire children and women to reach their fullest potential and break the cycle of poverty.
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="service-item">
                                <img src='/assets/ngoImgs/img8.jpg' className="img-fluid w-100" alt="Image" />
                                <div className="service-link">
                                    <Link to="blog" className="h5 mb-0"> Restoring Dignity Through Marriage Support</Link>
                                </div>
                            </div>
                            <p className="my-4">Every girl deserves dignity and love. We restore dignity by providing financial support and arranging marriages for underprivileged girls, ensuring they enter married life with happiness and hope for the future.
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="service-item">
                                <img src='/assets/ngoImgs/img5.jpg' className="img-fluid w-100" alt="Image" />
                                <div className="service-link">
                                    <Link to="blog" className="h5 mb-0">Extending Compassion in Times of Need</Link>
                                </div>
                            </div>
                            <p className="my-4">In times of hardship, we offer compassionate support and assistance. From widows to struggling families, we provide essential aid and comfort, ensuring that no one faces their challenges alone.
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="service-item">
                                <img src='/assets/ngoImgs/img6.jpg' className="img-fluid w-100" alt="Image" />
                                <div className="service-link">
                                    <Link to="blog" className="h5 mb-0">Preserving Our Planet, Preserving Our Future</Link>
                                </div>
                            </div>
                            <p className="my-4">As stewards of the earth, we're committed to environmental preservation. Through tree planting, clean-up campaigns, and awareness programs, we protect our planet for future generations, fostering a sustainable and thriving world.
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="d-flex align-items-center justify-content-center">
                                <Link className=" btn btnred py-2 px-4" to="about">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Services End --> */}


            {/* <!-- Donation Start --> */}
            <div className="container-fluid donation py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
                        <h5 className="text-uppercase headingred">Donation</h5>
                        <h1 className="mb-0">Your money will save our life</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="donation-item">
                                <img src='/assets/ngoImgs/img133.jpg' className="img-fluid w-100" alt="Image" />
                                <div className="donation-content d-flex flex-column">
                                    <h5 className="text-uppercase headingred mb-4">Organic</h5>
                                    <Link to="donate" className="btn-hover-color display-6 text-white">Empower Hope</Link>
                                    <h4 className="text-white mb-4">Hope for Tomorrow</h4>
                                    <p className="text-white mb-4">Your contribution empowers hope, transforming lives and building brighter futures for those in need.</p>
                                    <div className="donation-btn d-flex align-items-center justify-content-start">
                                        <Link className=" btn btnred py-2 px-4" to="donate">Donate !</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="donation-item">
                                <img src='/assets/ngoImgs/img12.jpg' className="img-fluid w-100" alt="Image" />
                                <div className="donation-content d-flex flex-column">
                                    <h5 className="text-uppercase headingred mb-4">Ecosystem</h5>
                                    <Link to="donate" className="btn-hover-color display-6 text-white">Change Lives</Link>
                                    <h4 className="text-white mb-4">Impactful Giving</h4>
                                    <p className="text-white mb-4">Your contribution empowers hope, transforming lives and building brighter futures for those in need.</p>
                                    <div className="donation-btn d-flex align-items-center justify-content-start">
                                        <Link className=" btn btnred py-2 px-4" to="donate">Donate !</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="donation-item">
                                <img src='/assets/ngoImgs/img14.jpg' className="img-fluid w-100" alt="Image" />
                                <div className="donation-content d-flex flex-column">
                                    <h5 className="text-uppercase headingred mb-4">Recycling</h5>
                                    <Link to="donate" className="btn-hover-color display-6 text-white">Be the Difference</Link>
                                    <h4 className="text-white mb-4">Make a Difference</h4>
                                    <p className="text-white mb-4">Join us in our mission to make a meaningful impact. Your generosity saves lives and brings hope to many.</p>
                                    <div className="donation-btn d-flex align-items-center justify-content-start">
                                        <Link className=" btn btnred py-2 px-4" to="/">Donate !</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex align-items-center justify-content-center">
                                <Link className=" btn btnred py-2 px-4" to="donate">All Donation</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Donation End --> */}


            {/* <!-- Counter Start --> */}
            <div className="container-fluid counter py-5" style={{
                background: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.4)), url('/assets/ngoImgs/i11.jpg') center center`,
                backgroundSize: 'cover'
            }}>
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
                        <h5 className="text-uppercase headingred">Achievements</h5>
                        <p className="text-white mb-0">Empowering 1000+ children through education. Facilitating 500+ marriages for underprivileged girls. Supporting 200 widows. Support 1000+ needy peoples.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter-item text-center border p-5">
                                <i className="fas fa-thumbs-up fa-4x text-white"></i>
                                <h3 className="text-white my-4">Education For children</h3>
                                <div className="counter-counting">
                                    <span className="headingred fs-2 fw-bold" data-toggle="counter-up" ><Counter initialValue={1000} duration={5} /></span>
                                    <span className="h1 fw-bold headingred">+</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter-item text-center border p-5">
                                <i className="fas fa-file-invoice-dollar fa-4x text-white"></i>
                                <h3 className="text-white my-4">marriages for girls</h3>
                                <div className="counter-counting text-center border-white w-100" style={{ borderStyle: 'dotted', fontSize: '30px' }}>
                                    <span className="headingred fs-2 fw-bold" data-toggle="counter-up"><Counter initialValue={1001} duration={5} /></span>
                                    <span className="h1 fw-bold headingred">$</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter-item text-center border p-5">
                                <i className="fas fa-user fa-4x text-white"></i>
                                <h3 className="text-white my-4">Supporting For widows</h3>
                                <div className="counter-counting text-center border-white w-100" style={{ borderStyle: 'dotted', fontSize: '30px' }}>
                                    <span className="headingred fs-2 fw-bold" data-toggle="counter-up"><Counter initialValue={720} duration={5} /></span>
                                    <span className="h1 fw-bold headingred">+</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter-item text-center border p-5">
                                <i className="fas fa-heart fa-4x text-white"></i>
                                <h3 className="text-white my-4">Helping needy </h3>
                                <div className="counter-counting text-center border-white w-100" style={{ borderStyle: 'dotted', fontSize: '30px' }}>
                                    <span className="headingred fs-2 fw-bold" data-toggle="counter-up"><Counter initialValue={487} duration={5} /></span>
                                    <span className="h1 fw-bold headingred">+</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex align-items-center justify-content-center">
                                <Link className=" btn btnred py-2 px-4" to="donate">Join With Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Counter End --> */}


            {/* <!-- Causes Start --> */}
            <div className="container-fluid causes py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
                        <h5 className="text-uppercase headingred">Recent Causes</h5>
                        <h1 className="mb-4">Impactful Initiatives in Motion</h1>
                        <p className="mb-0">In our ongoing efforts, we've championed various causes, each contributing to positive change and meaningful impact within our community.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6 col-xl-3">
                            <div className="causes-item">
                                <div className="causes-img">
                                    <img src='/assets/ngoImgs/b1.jpg' className="img-fluid w-100" alt="Image" />
                                    <div className="causes-link pb-2 px-3">
                                        <small className="text-white"><i className="fas fa-chart-bar headingred me-2"></i>Total Raised RS: 788940</small>
                                        <small className="text-white"><i className="fa fa-thumbs-up headingred me-2"></i>Total Spent RS: 833569</small>
                                    </div>
                                    <div className="causes-dination p-2">
                                        <Link className=" btn btnred py-2 px-3" to="donate">Donate Now</Link>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                        <span>65%</span>
                                    </div>
                                </div>
                                <div className="causes-content p-4">
                                    <h4 className="mb-3">Education Empowerment</h4>
                                    <p className="mb-4">Empowering children through education initiatives, ensuring every child has the opportunity to learn and thrive.</p>
                                    <Link className=" btn btnred py-2 px-3" to="about">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="causes-item">
                                <div className="causes-img">
                                    <img src='/assets/ngoImgs/b2.jpg' className="img-fluid w-100" alt="Image" />
                                    <div className="causes-link pb-2 px-3">
                                        <small className="text-white"><i className="fas fa-chart-bar headingred me-2"></i>Total Raised RS: 788940</small>
                                        <small className="text-white"><i className="fa fa-thumbs-up headingred me-2"></i>Total Spent RS: 833569</small>
                                    </div>
                                    <div className="causes-dination p-2">
                                        <Link className=" btn btnred py-2 px-3" to="donate">Donate Now</Link>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <span>75%</span>
                                    </div>
                                </div>
                                <div className="causes-content p-4">
                                    <h4 className="mb-3">Healthcare Access</h4>
                                    <p className="mb-4">Providing essential healthcare services and resources to underserved communities, promoting well-being and resilience.</p>
                                    <Link className=" btn btnred py-2 px-4" to="about">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="causes-item">
                                <div className="causes-img">
                                    <img src='/assets/ngoImgs/b3.jpg' className="img-fluid w-100" alt="Image" />
                                    <div className="causes-link pb-2 px-3">
                                        <small className="text-white"><i className="fas fa-chart-bar headingred me-2"></i>Total Raised RS: 788940</small>
                                        <small className="text-white"><i className="fa fa-thumbs-up headingred me-2"></i>Total Spent RS: 833569</small>
                                    </div>
                                    <div className="causes-dination p-2">
                                        <Link className=" btn btnred py-2 px-3" to="donate">Donate Now</Link>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <span>85%</span>
                                    </div>
                                </div>
                                <div className="causes-content p-4">
                                    <h4 className="mb-3">Environmental Conservation</h4>
                                    <p className="mb-4">Leading initiatives for environmental preservation, including tree planting and clean-up campaigns, to protect our planet for future generations.</p>
                                    <Link className=" btn btnred py-2 px-4" to="about">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="causes-item">
                                <div className="causes-img">
                                    <img src='/assets/ngoImgs/b4.jpg' className="img-fluid w-100" alt="Image" />
                                    <div className="causes-link pb-2 px-3">
                                        <small className="text-white"><i className="fas fa-chart-bar headingred me-2"></i>Total Raised RS: 788940</small>
                                        <small className="text-white"><i className="fa fa-thumbs-up headingred me-2"></i>Total Spent RS: 833569</small>
                                    </div>
                                    <div className="causes-dination p-2">
                                        <Link className=" btn btnred py-2 px-3" to="donate">Donate Now</Link>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                        <span>95%</span>
                                    </div>
                                </div>
                                <div className="causes-content p-4">
                                    <h4 className="mb-3">Humanitarian Aid</h4>
                                    <p className="mb-4">Offering humanitarian aid to those in need, including food distribution, shelter assistance, and support for vulnerable populations.</p>
                                    <Link className=" btn btnred py-2 px-4" to="about">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Causes End --> */}
            {/* <!-- Gallery Start --> */}
            <div className="container-fluid gallery py-5 px-0">
                <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
                    <h5 className="text-uppercase headingred">Our work</h5>
                    <h1 className="mb-4">We consider environment welfare</h1>
                    <p className="mb-0">At Fatima-Tu-Zahra Women Welfare Society, environmental welfare is integral to our mission. We prioritize initiatives that promote sustainability, conservation, and eco-consciousness, ensuring a healthier planet for generations to come.</p>
                </div>
                <div className="row g-0">
                    <div className="col-lg-4">
                        <div className="gallery-item">
                            <img src='/assets/ngoImgs/G1.jpg' className="img-fluid w-100" alt="" />
                            <div className="search-icon">
                                <Link to="donate" data-lightbox="gallery-2" className="my-auto"><i className="fas fa-search-plus btn-hover-color bg-white headingred p-3"></i></Link>
                            </div>
                            <div className="gallery-content">
                                <div className="gallery-inner pb-5">
                                    <Link to="/" className="h4 text-white">Beauty Of Life</Link>
                                    <Link to="/" className="text-white"><p className="mb-0">Bright Futures</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src='/assets/ngoImgs/G2.jpg' className="img-fluid w-100" alt="" />
                            <div className="search-icon">
                                <Link to="donate" data-lightbox="gallery-3" className="my-auto"><i className="fas fa-search-plus btn-hover-color bg-white headingred p-3"></i></Link>
                            </div>
                            <div className="gallery-content">
                                <div className="gallery-inner pb-5">
                                    <Link to="/" className="h4 text-white">Beauty Of Life</Link>
                                    <Link to="/" className="text-white"><p className="mb-0">Unity in Action</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="gallery-item">
                            <img src='/assets/ngoImgs/i5.jpg' className="img-fluid w-100" alt="" />
                            <div className="search-icon">
                                <Link to="donate" data-lightbox="gallery-1" className="my-auto"><i className="fas fa-search-plus btn-hover-color bg-white headingred p-3"></i></Link>
                            </div>
                            <div className="gallery-content">
                                <div className="gallery-inner pb-5">
                                    <Link to="/" className="h4 text-white">Beauty Of Life</Link>
                                    <Link to="/" className="text-white"><p className="mb-0">Strength in Unity</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="gallery-item">
                            <img src='/assets/ngoImgs/G4.jpg' className="img-fluid w-100" alt="" />
                            <div className="search-icon">
                                <Link to="donate" data-lightbox="gallery-4" className="my-auto"><i className="fas fa-search-plus btn-hover-color bg-white headingred p-3"></i></Link>
                            </div>
                            <div className="gallery-content">
                                <div className="gallery-inner pb-5">
                                    <Link to="/" className="h4 text-white">Beauty Of Life</Link>
                                    <Link to="/" className="text-white"><p className="mb-0">Green Initiatives</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src='/assets/ngoImgs/G5.jpg' className="img-fluid w-100" alt="" />
                            <div className="search-icon">
                                <Link to="donate" data-lightbox="gallery-5" className="my-auto"><i className="fas fa-search-plus btn-hover-color bg-white headingred p-3"></i></Link>
                            </div>
                            <div className="gallery-content">
                                <div className="gallery-inner pb-5">
                                    <Link to="/" className="h4 text-white">Beauty Of Life</Link>
                                    <Link to="/" className="text-white"><p className="mb-0">Rising Together</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Gallery End --> */}


            {/* <!-- Events Start --> */}
            <div className="container-fluid event py-5">
                <div className="container px-5">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
                        <h5 className="text-uppercase headingred">Upcoming Events</h5>
                        <h1 className="mb-0">Help today because tomorrow you may be the one who needs more helping!</h1>
                    </div>
                </div>
            </div>
            {/* event end */}
            {/* slider */}
            {/* <!-- Carousel wrapper --> */}
            <div id="carouselExampleInterval" class="carousel slide  text-center" data-bs-ride="carousel">
                <div class="carousel-inner justify-content-center mb-4 mt-4">
                    <div class="carousel-item active" data-bs-interval="10000">

                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="card">
                                        <img
                                            src='/assets/ngoImgs/E1.jpg'
                                            class="card-img-top"
                                            alt="Sunset Over the Sea"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Community Clean-up Drive</h5>
                                            <p class="card-text">
                                                Let's join hands to keep our community clean and green. Together, we can make our environment healthier and more beautiful for everyone to enjoy.
                                            </p>
                                            <Link to="program" data-mdb-ripple-init class="btn btnred">Read more</Link>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 d-none d-lg-block">
                                    <div class="card">
                                        <img
                                            src='/assets/ngoImgs/E2.jpg'
                                            class="card-img-top"
                                            alt="Sunset Over the Sea"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Educational Workshop</h5>
                                            <p class="card-text">
                                                Empower yourself with knowledge at our upcoming workshop. Learn valuable skills to navigate life's challenges and build a brighter future for yourself and your loved ones.
                                            </p>
                                            <Link to="program" data-mdb-ripple-init class="btn btnred">Read more</Link>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 d-none d-lg-block">
                                    <div class="card">
                                        <img
                                            src='/assets/ngoImgs/E3.jpg'
                                            class="card-img-top"
                                            alt="Sunset Over the Sea"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Healthcare Awareness Camp</h5>
                                            <p class="card-text">
                                                Your well-being matters to us. Join us at our healthcare awareness camp to learn how to take better care of yourself and your family. Together, we can promote a healthier community.
                                            </p>
                                            <Link to="program" data-mdb-ripple-init class="btn btnred">Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">

                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="card">
                                        <img
                                            src='/assets/ngoImgs/E4.jpg'
                                            class="card-img-top"
                                            alt="Sunset Over the Sea"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Charity Fundraiser</h5>
                                            <p class="card-text">
                                                Your kindness can change lives. By contributing to our charity fundraiser, you're providing hope and assistance to those in need. Together, we can make a meaningful difference in people's lives.
                                            </p>
                                            <Link to="program" data-mdb-ripple-init class="btn btnred">Read more</Link>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 d-none d-lg-block">
                                    <div class="card">
                                        <img
                                            src='/assets/ngoImgs/E1.jpg'
                                            class="card-img-top"
                                            alt="Sunset Over the Sea"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Women's Empowerment Seminar</h5>
                                            <p class="card-text">
                                                Every woman deserves a chance to thrive. Join us for a seminar on women's empowerment and gender equality. Let's create a world where every woman's voice is heard and valued.
                                            </p>
                                            <Link to="program" data-mdb-ripple-init class="btn btnred">Read more</Link>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 d-none d-lg-block">
                                    <div class="card">
                                        <img
                                            src='/assets/ngoImgs/E2.jpg'
                                            class="card-img-top"
                                            alt="Sunset Over the Sea"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Environmental Conservation Symposium</h5>
                                            <p class="card-text">
                                                Our planet needs our help. Join us for a symposium on environmental conservation and discover how you can make a positive impact.
                                            </p>
                                            <Link to="program" data-mdb-ripple-init class="btn btnred">Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="carousel-item">

                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="card">
                                        <img
                                            src='/assets/ngoImgs/E1.jpg'
                                            class="card-img-top"
                                            alt="Sunset Over the Sea"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Community Clean-up Drive</h5>
                                            <p class="card-text">
                                                Let's join hands to keep our community clean and green. Together, we can make our environment healthier and more beautiful for everyone to enjoy.
                                            </p>
                                            <Link to="program" data-mdb-ripple-init class="btn btnred">Read more</Link>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 d-none d-lg-block">
                                    <div class="card">
                                        <img
                                            src='/assets/ngoImgs/E4.jpg'
                                            class="card-img-top"
                                            alt="Sunset Over the Sea"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Educational Workshop</h5>
                                            <p class="card-text">
                                                Empower yourself with knowledge at our upcoming workshop. Learn valuable skills to navigate life's challenges and build a brighter future for yourself and your loved ones.
                                            </p>
                                            <Link to="program" data-mdb-ripple-init class="btn btnred">Read more</Link>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 d-none d-lg-block">
                                    <div class="card">
                                        <img
                                            src='/assets/ngoImgs/E3.jpg'
                                            class="card-img-top"
                                            alt="Sunset Over the Sea"
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">Healthcare Awareness Camp</h5>
                                            <p class="card-text">
                                                Your well-being matters to us. Join us at our healthcare awareness camp to learn how to take better care of yourself and your family. Together, we can promote a healthier community.
                                            </p>
                                            <Link to="program" data-mdb-ripple-init class="btn btnred">Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* slider */}

            {/* <!-- Blog Start --> */}
            <div className="container-fluid blog py-5 mb-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
                        <h5 className="text-uppercase headingred">Latest News</h5>
                        <h1 className="mb-0">Stay Informed, Stay Connected!
                        </h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6 col-xl-3">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src='/assets/ngoImgs/b5.jpg' className="img-fluid w-100" alt="" />
                                    <div className="search-icon">
                                        <Link to="blog" data-lightbox="Blog-1" className="my-auto"><i className="fas fa-search-plus btnred p-3"></i></Link>
                                    </div>
                                </div>
                                <div className="text-dark border p-4 ">
                                    <h4 className="mb-4">Community Spotlight</h4>
                                    <p className="mb-4">Discover how our latest initiatives are empowering women in our community through education, employment, and support services.</p>
                                    <Link className=" btn btnred py-2 px-4" to="blog">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src='/assets/ngoImgs/6.jpg' className="img-fluid w-100" alt="" />
                                    <div className="search-icon">
                                        <Link to="blog" data-lightbox="Blog-2" className="my-auto"><i className="fas fa-search-plus btnred p-3"></i></Link>
                                    </div>
                                </div>
                                <div className="text-dark border p-4 ">
                                    <h4 className="mb-4">Environmental Update</h4>
                                    <p className="mb-4">Learn about our ongoing efforts to protect the environment, from tree planting campaigns to eco-friendly practices in our community.</p>
                                    <Link className=" btn btnred py-2 px-4" to="blog">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src='/assets/ngoImgs/b7.jpg' className="img-fluid w-100" alt="" />
                                    <div className="search-icon">
                                        <Link to="blog" data-lightbox="Blog-3" className="my-auto"><i className="fas fa-search-plus btnred p-3"></i></Link>
                                    </div>
                                </div>
                                <div className="text-dark border p-4 ">
                                    <h4 className="mb-4">Health and Wellness</h4>
                                    <p className="mb-4">Stay up-to-date on health and wellness tips, resources, and events aimed at promoting a healthier lifestyle for everyone.Stay connected with us</p>
                                    <Link className=" btn btnred py-2 px-4" to="blog">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src='/assets/ngoImgs/b8.jpg' className="img-fluid w-100" alt="" />
                                    <div className="search-icon">
                                        <Link to="blog" data-lightbox="Blog-4" className="my-auto"><i className="fas fa-search-plus btnred p-3"></i></Link>
                                    </div>
                                </div>
                                <div className="text-dark border p-4 ">
                                    <h4 className="mb-4">Bringing Us Together</h4>
                                    <p className="mb-4">Find out about upcoming events, workshops, and gatherings that foster community spirit and connection among our residents.</p>
                                    <Link className=" btn btnred py-2 px-4" to="blog">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Blog End --> */}




            {/* <!-- Volunteers Start --> */}
            <div className="container-fluid volunteer py-5 mt-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-5">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="volunteer-img">
                                        <img src='/assets/ngoImgs/m1.jpg' className="img-fluid w-100" alt="Image" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="volunteer-img">
                                        <img src='/assets/ngoImgs/m4.jpg' className="img-fluid w-100" alt="Image" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="volunteer-img">
                                        <img src='/assets/ngoImgs/m2.jpg' className="img-fluid w-100" alt="Image" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="volunteer-img">
                                        <img src='/assets/ngoImgs/m3.jpg' className="img-fluid w-100" alt="Image" />
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
        </>
    )
}

export default Home