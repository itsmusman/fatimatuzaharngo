import React from 'react'
import { Link } from 'react-router-dom';


const Blogs = () => {
    return (
        <>
            {/* <!-- Header Start --> */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h3 className="text-white display-3 mb-4">Latest News & Blog</h3>
                    <p className="fs-5 text-white mb-4">Explore our blogs for inspiring stories, expert advice, and the latest updates on women's welfare and community initiatives.</p>
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><Link to="/" className="headingred">Home</Link></li>
                        <li className="breadcrumb-item active text-white">Blog</li>
                    </ol>
                </div>
            </div>
            {/* <!-- Header End --> */}

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
                                    <img src='../assets/ngoImgs/b5.jpg' className="img-fluid w-100" alt="img" />
                                </div>
                                <div className="text-dark border p-4 ">
                                    <h4 className="mb-4">Community Spotlight</h4>
                                    <p className="mb-4">Discover how our latest initiatives are empowering women in our community through education, employment, and support services.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src='../assets/ngoImgs/6.jpg' className="img-fluid w-100" alt="img" />
                                </div>
                                <div className="text-dark border p-4 ">
                                    <h4 className="mb-4">Environmental Update</h4>
                                    <p className="mb-4">Learn about our ongoing efforts to protect the environment, from tree planting campaigns to eco-friendly practices in our community.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src='../assets/ngoImgs/b7.jpg' className="img-fluid w-100" alt="img" />
                                </div>
                                <div className="text-dark border p-4 ">
                                    <h4 className="mb-4">Health and Wellness</h4>
                                    <p className="mb-4">Stay up-to-date on health and wellness tips, resources, and events aimed at promoting a healthier lifestyle for everyone.Stay connected with us</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src='../assets/ngoImgs/b8.jpg' className="img-fluid w-100" alt="img" />
                                </div>
                                <div className="text-dark border p-4 ">
                                    <h4 className="mb-4">Bringing Us Together</h4>
                                    <p className="mb-4">Find out about upcoming events, workshops, and gatherings that foster community spirit and connection among our residents.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Blog End --> */}

        </>
    )
}

export default Blogs