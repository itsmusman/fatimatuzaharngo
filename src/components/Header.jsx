import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const Header = () => {

    // Initialize activeLink state variable using useState hook
    const [activeLink, setActiveLink] = useState('Home');

    // Function to handle link clicks
    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
        window.scrollTo(0, 0);
    };
    return (
        <>
            {/* <!-- Navbar start --> */}
            <div className="container-fluid fixed-top px-0">
                <div className="container px-0">
                    <div className="topbar">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-8">
                                <div className="topbar-info d-flex flex-wrap align-items-center">
                                    <i className="fas fa-phone-alt text-white me-3"></i>
                                    <h4 className='text-light pt-2'>Mob: +92-3335608550 | Tel: +92-54-7531750</h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="topbar-icon d-flex align-items-center justify-content-end">
                                    <Link to="mailto:mrsshaziaasad@gmail.com" className="text-light me-4"><i className="fas fa-envelope text-white me-2"></i>mrsshaziaasad@gmail.com</Link>
                                    <Link to="https://www.facebook.com/shazia.asad.549?mibextid=kFxxJD" target="_blank" className="btn-square me-2 icondesign"><i className="fab fa-facebook-f"></i></Link>
                                    {/* <Link to="#" className="btn-square text-white me-2"><i className="fab fa-twitter"></i></Link>
                        <Link to="#" className="btn-square text-white me-2"><i className="fab fa-instagram"></i></Link>
                        <Link to="#" className="btn-square text-white me-2"><i className="fab fa-pinterest"></i></Link>
                        <Link to="#" className="btn-square text-white me-0"><i className="fab fa-linkedin-in"></i></Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-light bgtrans navbar-expand-xl">
                        <Link to="index.html" className="navbar-brand ms-3">
                            <img src='/assets/ngoImgs/logonav.png' className='img-fluid' width='220px' height='80px' />
                        </Link>
                        <button className="navbar-toggler py-2 px-3 me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars headingred"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">
                                <Link to="/" className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`} onClick={() => handleLinkClick('Home')}>Home</Link>
                                <Link to="about" className={`nav-link ${activeLink === 'About' ? 'active' : ''}`} onClick={() => handleLinkClick('About')}>About</Link>
                                <Link to="testimonials" className={`nav-link ${activeLink === 'Testimonials' ? 'active' : ''}`} onClick={() => handleLinkClick('Testimonials')}>Testimonials</Link>
                                <Link to="blog" className={`nav-link ${activeLink === 'Blogs' ? 'active' : ''}`} onClick={() => handleLinkClick('Blogs')}>Blogs</Link>
                                <Link to="program" className={`nav-link ${activeLink === 'Events' ? 'active' : ''}`} onClick={() => handleLinkClick('Events')}>Programs</Link>
                                <Link to="media" className={`nav-link ${activeLink === 'Media' ? 'active' : ''}`} onClick={() => handleLinkClick('Media')} >Media</Link>
                                {/* <div className="nav-item dropdown">
                        <Link to="media" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Media</Link>
                        <div className="dropdown-menu m-0 bg-secondary rounded-0">
                            <Link to="blog" className="dropdown-item">Blog</Link>
                            <Link to="media" className="dropdown-item">Gallery</Link>
                            <Link to="volunteer.html" className="dropdown-item">Volunteers</Link>
                            <Link to="donation.html" className="dropdown-item">Donation</Link>
                            <Link to="404.html" className="dropdown-item">404 Error</Link>
                        </div>
                    </div> */}
                                <Link to="contact" className={`nav-link ${activeLink === 'Contact' ? 'active' : ''}`} onClick={() => handleLinkClick('Contact')}>Contact</Link>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap pt-xl-0" style={{ marginLeft: '15px' }}>
                                <Link to="donate" className=" btn btnred py-2 px-4 me-3">Donate Now</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}
        </>
    )
}

export default Header