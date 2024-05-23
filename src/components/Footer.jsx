import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid footer bggray fontblack py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item">
                                <h4 className="mb-4 ">Newsletter</h4>
                                <p className="mb-4">Learn about our mission, vision, and values. Discover our journey and the team behind our efforts to empower women and uplift communities.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 ">Our Services</h4>
                                <Link to="/" ><i className="fas fa-angle-right me-2"></i> Home</Link>
                                <Link to="about" ><i className="fas fa-angle-right me-2"></i> About Us</Link>
                                <Link to="blog" ><i className="fas fa-angle-right me-2"></i> Blogs</Link>
                                <Link to="contact" ><i className="fas fa-angle-right me-2"></i> Contact</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 ">Volunteer</h4>
                                <Link to="testimonials" ><i className="fas fa-angle-right me-2"></i> Testimonials</Link>
                                <Link to="donate" ><i className="fas fa-angle-right me-2"></i> Donate Now</Link>
                                <Link to="media" ><i className="fas fa-angle-right me-2"></i> Media</Link>
                                <Link to="program" ><i className="fas fa-angle-right me-2"></i> Program</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item">
                                <h4 className="mb-4 ">Our Gallery</h4>
                                <div className="row g-2">
                                    <div className="col-4">
                                        <div className="footer-gallery">
                                            <img src='/assets/ngoImgs/b1.jpg' className="img-fluid w-100" alt="" />
                                            <div className="footer-search-icon">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="footer-gallery">
                                            <img src='/assets/ngoImgs/b2.jpg' className="img-fluid w-100" alt="" />
                                            <div className="footer-search-icon">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="footer-gallery">
                                            <img src='/assets/ngoImgs/b3.jpg' className="img-fluid w-100" alt="" />
                                            <div className="footer-search-icon">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="footer-gallery">
                                            <img src='/assets/ngoImgs/b4.jpg' className="img-fluid w-100" alt="" />
                                            <div className="footer-search-icon">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="footer-gallery">
                                            <img src='/assets/ngoImgs/b5.jpg' className="img-fluid w-100" alt="" />
                                            <div className="footer-search-icon">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="footer-gallery">
                                            <img src='../assets/ngoImgs/6.jpg' className="img-fluid w-100" alt="" />
                                            <div className="footer-search-icon">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}
        </>
    )
}

export default Footer