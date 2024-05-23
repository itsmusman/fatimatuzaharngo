import React from 'react'
import { Link } from 'react-router-dom';

const Testimonials = () => {
  return (
    <>
    {/* <!-- Header Start --> */}
    <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style={{ maxWidth: '900px' }}>
                <h3 class="text-white display-3 mb-4">Upcoming Events</h3>
                <p class="fs-5 text-white mb-4">Read what others have to say about their experiences with us. Explore our testimonials to see how we've made a difference.</p>
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="index.html" className="headingred">Home</a></li>
                    <li class="breadcrumb-item"><a href="#" className="headingred">Pages</a></li>
                    <li class="breadcrumb-item active text-white">Testimonials</li>
                </ol>    
            </div>
        </div>
        {/* <!-- Header End --> */}
  
    
{/* <!-- Carousel wrapper --> */}
<div id="carouselExampleInterval" class="carousel slide  text-center" data-bs-ride="carousel">
  <div class="carousel-inner justify-content-center mb-4 mt-4">
    <div class="carousel-item active" data-bs-interval="10000">
    
      <div class="container py-5">
        <div class="row p-4">
          <div class="col-lg-4 cssshadow">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="" 
              style={{ width: '150px' }} />
            <h5 class="mb-3">Amina Khan</h5>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              "Volunteering with Fatima-Tu-Zahra Women Welfare Society has been an incredibly rewarding experience. The impact we've made on the community is truly heartwarming."
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
            </ul>
          </div>

          <div class="col-lg-4 d-none d-lg-block cssshadow px-3 cssshadow">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="" 
              style={{ width: '150px' }} />
            <h5 class="mb-3">Yusuf Ahmed</h5>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              "I am grateful for the opportunity to be part of such a noble cause. Through our collective efforts, we've been able to bring hope and support to those in need."

            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li>
                <i class="fas fa-star-half-alt fa-sm"></i>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 d-none d-lg-block cssshadow px-3">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="" 
              style={{ width: '150px' }} />
            <h5 class="mb-3">Safiya Ali</h5>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              "Joining as a volunteer has not only allowed me to give back to society but has also enriched my own life. I've learned the true meaning of compassion and empathy."
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="far fa-star fa-sm"></i></li>
            </ul>
          </div>
        </div>
      
    </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">

      <div class="container py-5">
        <div class="row p-4">
          <div class="col-lg-4 cssshadow">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="" 
              style={{ width: '150px' }} />
            <h5 class="mb-3">Ibrahim Hassan</h5>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              "As a volunteer, I've witnessed firsthand the difference we can make when we come together. Together, we're building a brighter future for our community."
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
            </ul>
          </div>

          <div class="col-lg-4 d-none d-lg-block cssshadow px-3">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="" 
              style={{ width: '150px' }} />
            <h5 class="mb-3">Aisha Rahman</h5>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              "Being part of Fatima-Tu-Zahra Women Welfare Society has been an inspiring journey. It's amazing to see the positive change we can bring when we work as a team."


            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li>
                <i class="fas fa-star-half-alt fa-sm"></i>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 d-none d-lg-block cssshadow px-3">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="" 
              style={{ width: '150px' }} />
            <h5 class="mb-3">Muhammad Khan</h5>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              "Volunteering here has taught me the importance of kindness and generosity. Together, we're making a real difference in the lives of those who need it most."
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="far fa-star fa-sm"></i></li>
            </ul>
          </div>
        </div>
      </div>
  
    </div>
    <div class="carousel-item">
    
    <div class="container py-5">
        <div class="row p-4">
          <div class="col-lg-4 cssshadow">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="" 
              style={{ width: '150px' }} />
            <h5 class="mb-3">Ibrahim Hassan</h5>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              "As a volunteer, I've witnessed firsthand the difference we can make when we come together. Together, we're building a brighter future for our community."
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
            </ul>
          </div>

          <div class="col-lg-4 d-none d-lg-block cssshadow px-3">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="" 
              style={{ width: '150px' }} />
            <h5 class="mb-3">Aisha Rahman</h5>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              "Being part of Fatima-Tu-Zahra Women Welfare Society has been an inspiring journey. It's amazing to see the positive change we can bring when we work as a team."


            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li>
                <i class="fas fa-star-half-alt fa-sm"></i>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 d-none d-lg-block cssshadow px-3">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="" 
              style={{ width: '150px' }} />
            <h5 class="mb-3">Muhammad Khan</h5>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              "Volunteering here has taught me the importance of kindness and generosity. Together, we're making a real difference in the lives of those who need it most."
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="far fa-star fa-sm"></i></li>
            </ul>
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

    </>
  )
}

export default Testimonials