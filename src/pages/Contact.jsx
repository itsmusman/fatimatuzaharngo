import React from 'react'
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <>
            {/* <!-- Header Start --> */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h3 className="text-white display-3 mb-4">Contact Us</h3>
                    <p className="fs-5 text-white mb-4">Get in touch with us via email, phone, or visit our office for any questions, support, or assistance.</p>
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><Link href="/" className="headingred">Home</Link></li>
                        <li className="breadcrumb-item"><Link href="/" className="headingred">Pages</Link></li>
                        <li className="breadcrumb-item active text-white">Contact</li>
                    </ol>
                </div>
            </div>
            {/* <!-- Header End --> */}

            {/* <!-- Contact Start --> */}
            <div className="container-fluid  py-5">
                <div className="container py-5">
                    <div className="contact p-5">
                        <div className="row g-4">
                            <div className="col-xl-5">
                                <h5 className="text-uppercase headingred">Contact Us</h5>
                                <h1 className="mb-4">Get in touch</h1>
                                <p className="fs-6 mb-3">Welcome to Fatima-Tu-Zahra Women Welfare Society. If you want to get in touch with us, it's very easy. You can contact us through our email, phone number, or by visiting our address. For any questions or support, feel free to email us at email address. If you prefer to talk to us directly, you can call us at phone number, and our team will be happy to assist you. You are also welcome to visit us at our office located at address. Our team is always ready to help and looks forward to hearing from you. Your satisfaction is our priority, so please don’t hesitate to reach out.
                                </p>
                                <h3 className="text-uppercase headingred">Thank You!</h3>
                            </div>
                            <div className="col-xl-7">
                                <div>
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <iframe className="w-100" style={{ height: '412px', marginBottom: '-6px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.383374805816!2d73.2754088743224!3d31.896179428481055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922033366ec7671%3A0x5d6aa0ebd80c7eed!2sTHQ%20Hospital%20Pindi%20Bhattian!5e0!3m2!1sen!2sbd!4v1716059064584!5m2!1sen!2sbd"
                                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bg-white p-4">
                                    <i className="fas fa-map-marker-alt fa-2x headingred mb-2"></i>
                                    <h4>Address</h4>
                                    <p className="mb-0">Opposite THQ Hospital Lahore Rd. Pindi Bhattian District Hafizabad, Punjab , Pakistan.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bg-white p-4">
                                    <i className="fas fa-envelope fa-2x headingred mb-2"></i>
                                    <h4>Mail Us</h4>
                                    <p className="mb-0">mrsshaziaasad @gmail.com</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bg-white p-4">
                                    <i className="fa fa-phone-alt fa-2x headingred mb-2"></i>
                                    <h4>Telephone</h4>
                                    <p className="mb-0">+92-3335608550</p>
                                    <p className='mb-0'>+92-54-7531750</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}

        </>
    )
}

export default Contact