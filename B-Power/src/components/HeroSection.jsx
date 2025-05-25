import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  {
    id: 1,
    title: 'Instant Credit Access',
    description: 'MSMEs can access credit instantly with no interest for 48 days.',
    image: 'https://images.unsplash.com/photo-1688149013444-da644d290749?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'One-Day Payment',
    description: 'Suppliers receive payments within 24 hours ensuring smooth cash flow.',
    image: 'https://images.pexels.com/photos/4968550/pexels-photo-4968550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Smart Liquidity',
    description: 'Optimize working capital with AI-driven liquidity management.',
    image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Invoice Financing',
    description: 'Get funding against unpaid invoices without collateral.',
    image: 'https://images.unsplash.com/photo-1688149013444-da644d290749?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: 'Supplier Onboarding',
    description: 'Easy digital onboarding and KYC for vendors.',
    image: 'https://via.placeholder.com/300x180?text=Supplier+Onboarding',
  },
  {
    id: 6,
    title: 'Analytics Dashboard',
    description: 'Real-time cash flow and risk visibility.',
    image: 'https://via.placeholder.com/300x180?text=Analytics+Dashboard',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-primary text-white text-center d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: '80vh', padding: '3rem 1rem' }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Empowering 63M MSMEs</h1>
          <p className="lead mt-3">48-Day Interest-Free Credit • 1-Day Payments to MSMEs</p>
          <div className="mt-4">
            <button className="btn btn-light me-3">Join Now</button>
            <button className="btn btn-outline-light">Learn More</button>
          </div>
        </div>
      </section>

      {/* Explainer Video Placeholder */}
      <section
        className="bg-light d-flex justify-content-center align-items-center"
        style={{ minHeight: '80vh', padding: '3rem 1rem' }}
      >
        <div className="container">
          <div style={{ width: '90%', maxWidth: '800px', margin: '0 auto' }}>
            <div
              className="bg-secondary text-white rounded overflow-hidden"
              style={{
                paddingTop: '56.25%',
                position: 'relative',
                borderRadius: '15px',
                overflow: 'hidden',
              }}
            >
              <div className="position-absolute top-50 start-50 translate-middle text-center">
                <h2>Explainer Video Placeholder</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview Carousel */}
      <section className="py-5" style={{ minHeight: '80vh' }}>
        <div className="container">
          <h2 className="text-center mb-4">Product Preview</h2>
          <div
            id="productCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner">
              {[0, 1, 2].map((slideIndex) => (
                <div
                  key={slideIndex}
                  className={`carousel-item${slideIndex === 0 ? ' active' : ''}`}
                >
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    {products
                      .slice(slideIndex * 3, slideIndex * 3 + 3)
                      .map((product) => (
                        <div
                          key={product.id}
                          className="card"
                          style={{ minWidth: '18rem', flex: '0 0 auto' }}
                        >
                          <img
                            src={product.image}
                            alt={product.title}
                            className="card-img-top"
                            style={{ height: '180px', objectFit: 'cover' }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section
        className="py-5 bg-white text-center d-flex flex-column justify-content-center"
        style={{ minHeight: '60vh' }}
      >
        <div className="container">
          <h4 className="mb-4">Trusted by</h4>
          <div className="row justify-content-center align-items-center">
            <div className="col-4 col-md-2">
              <img
                src="https://imgs.search.brave.com/7Bn9nPeYYBZTwr-o9NU4v7xD3YcammKdCzoDsFBw80c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vcTY5N2o0/bE14Sy1aLXU5cExY/LVJPbC13ajNSbElF/NUR2Y3Vma0VHc3RW/QS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlq/Y25sei9kR0ZzY0c1/bkxtTnZiUzkzL2ND/MWpiMjUwWlc1MEwz/VncvYkc5aFpITXZN/akF5TlM4dy9NUzl6/ZEdGeWRIVndMV2x1/L1pHbGhMV3h2WjI4/dWNHNW4"
                alt="Startup India"
                className="img-fluid mb-3"
              />
            </div>
            <div className="col-4 col-md-2">
              <img
                src="https://imgs.search.brave.com/YTPBsH3MxybpviDNuUsAh5kLBNuIdg_46bVkvgD_DvQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vdlZETkxM/UjQ0Zmx3LURXZHlH/TkRnNmtXMkxlQVE3/WU5sVkYzUEp0dmhW/WS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlz/YjJkdi9aR2w0TG1O/dmJTOXNiMmR2L0x6/SXlNRFkwTmpNdWNH/NW4"
                alt="ICICI Bank"
                className="img-fluid mb-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-5 d-flex flex-column justify-content-center"
        style={{ minHeight: '80vh' }}
        id="services"
      >
        <div className="container">
          <h2 className="text-center mb-5">Who We Serve</h2>
          <div className="row">
            <div className="col-md-4">
              <h4>For Enterprises</h4>
              <ul>
                <li>Smart liquidity programs</li>
                <li>Embedded finance for suppliers and buyers</li>
                <li>Real-time cash flow visibility</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>For Financial Institutions</h4>
              <ul>
                <li>Whitelabel lending platforms</li>
                <li>Digital underwriting and KYC</li>
                <li>API integrations</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>For SMEs</h4>
              <ul>
                <li>Invoice discounting</li>
                <li>Small business credit</li>
                <li>Predictive cash flow tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="bg-dark text-white text-center d-flex flex-column justify-content-center"
        style={{ minHeight: '60vh' }}
      >
        <div className="container">
          <h2 className="mb-4">Ready to unlock working capital and grow with B-Power?</h2>
          <button className="btn btn-light">Join Now</button>
        </div>
      </section>
    </div>
  );
}
