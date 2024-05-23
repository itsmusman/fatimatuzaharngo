import React from 'react'
import { Link } from 'react-router-dom';

const Program = () => {
  return (
    <>
    {/* <!-- Header Start --> */}
        <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style={{ maxWidth: '900px' }}>
                <h3 class="text-white display-3 mb-4">Upcoming Events</h3>
                <p class="fs-5 text-white mb-4">Discover our diverse programs aimed at empowering women through education, skill development, and community support. Join us to make a positive impact.</p>
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="index.html" className="headingred">Home</a></li>
                    <li class="breadcrumb-item"><a href="#" className="headingred">Pages</a></li>
                    <li class="breadcrumb-item active text-white">Events</li>
                </ol>    
            </div>
        </div>
        {/* <!-- Header End --> */}
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
                src='../assets/ngoImgs/E1.jpg'
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
                src='../assets/ngoImgs/E2.jpg'
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
                src='../assets/ngoImgs/E3.jpg'
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
                src='../assets/ngoImgs/E4.jpg'
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
                src='../assets/ngoImgs/E1.jpg'
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
                src='../assets/ngoImgs/E2.jpg'
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
                src='../assets/ngoImgs/E1.jpg'
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
                src='../assets/ngoImgs/E4.jpg'
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
                src='../assets/ngoImgs/E3.jpg'
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
    </>
  )
}

export default Program