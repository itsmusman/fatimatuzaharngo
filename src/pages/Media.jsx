import React from 'react'
import { Link } from 'react-router-dom';
const Media = () => {
  return (
    <>
    {/* <!-- Header Start --> */}
       <div class="container-fluid bg-breadcrumb">
           <div class="container text-center py-5" style={{ maxWidth: '900px' }}>
               <h3 class="text-white display-3 mb-4">Image Gallery</h3>
               <p class="fs-5 text-white mb-4">Stay updated with our latest news, events, and initiatives. Follow us on social media for real-time updates and community stories.</p>
               <ol class="breadcrumb justify-content-center mb-0">
                   <li class="breadcrumb-item"><a href="index.html" className="headingred">Home</a></li>
                   <li class="breadcrumb-item"><a href="#" className="headingred">Pages</a></li>
                   <li class="breadcrumb-item active text-white">Gallery</li>
               </ol>    
           </div>
       </div>
       {/* <!-- Header End --> */}
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
                       <img src='../assets/ngoImgs/G1.jpg' className="img-fluid w-100" alt=""/>
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
                       <img src='../assets/ngoImgs/G2.jpg' className="img-fluid w-100" alt=""/>
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
                       <img src='../assets/ngoImgs/G3.jpg' className="img-fluid w-100" alt=""/>
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
                       <img src='../assets/ngoImgs/G4.jpg' className="img-fluid w-100" alt=""/>
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
                       <img src='../assets/ngoImgs/G5.jpg' className="img-fluid w-100" alt=""/>
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
   </>
  )
}

export default Media