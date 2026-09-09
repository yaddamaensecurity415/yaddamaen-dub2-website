import './Services.css'

function Services() {
  return (
    <div className="services-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>OUR SERVICES</h1>
        <p>Professional security, staffing, and production services for events of all sizes</p>
      </div>

      {/* Main Services Section */}
      <section className="main-services">
        <div className="services-container">
          {/* Yaddamaen Security Services */}
          <div className="service-card yaddamaen-card">
            <div className="card-header">
              <h2>YADDAMAEN EVENT SECURITY INC.</h2>
              <p className="tagline">SECURITY YOU CAN RELY ON</p>
            </div>
            <p className="description">
              Professional event security services designed around the needs of your event.
            </p>
            <ul className="service-list">
              <li>✓ Event Security</li>
              <li>✓ Crowd Management</li>
              <li>✓ Venue Security</li>
              <li>✓ Concerts & Festivals</li>
              <li>✓ Access Control</li>
              <li>✓ Guest Screening</li>
              <li>✓ Corporate Events</li>
              <li>✓ Entry & Exit Monitoring</li>
              <li>✓ Private Events</li>
              <li>✓ VIP Areas</li>
            </ul>
            <button className="btn btn-primary">REQUEST SECURITY</button>
          </div>

          {/* Dub2 Event Staff Services */}
          <div className="service-card dub2-card">
            <div className="card-header">
              <h2>DUB2 EVENT STAFF</h2>
              <p className="tagline">THE RIGHT STAFF FOR A SUCCESSFUL EVENT</p>
            </div>
            <p className="description">
              Professional event personnel to help keep your event organized, welcoming, and running smoothly.
            </p>
            <ul className="service-list">
              <li>✓ Event Staff</li>
              <li>✓ Guest Services</li>
              <li>✓ Check-in / Registration</li>
              <li>✓ Door Staff</li>
              <li>✓ Crowd Support</li>
              <li>✓ Event Setup & Breakdown</li>
              <li>✓ Venue Support</li>
              <li>✓ General Event Operations</li>
            </ul>
            <button className="btn btn-secondary">BOOK EVENT STAFF</button>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="additional-services">
        <h2>DUB2 EVENT STAFF - ADDITIONAL SERVICES</h2>
        <div className="additional-grid">
          <div className="additional-card">
            <div className="card-icon">🎬</div>
            <h3>STAGEHAND</h3>
            <p>Professional stagehands for setup, teardown, and on-site support. From stage construction to equipment management.</p>
          </div>
          <div className="additional-card">
            <div className="card-icon">📹</div>
            <h3>VIDEO PRODUCTION</h3>
            <p>Capture your event with professional video production and live support. High-quality recording and streaming services.</p>
          </div>
          <div className="additional-card">
            <div className="card-icon">🧹</div>
            <h3>CLEAN-UP CREW</h3>
            <p>Keep your venue clean, safe, and ready for what's next. Professional cleaning and waste management services.</p>
          </div>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="detailed-services">
        <h2>DETAILED SERVICE BREAKDOWN</h2>
        
        <div className="service-category">
          <h3>YADDAMAEN EVENT SECURITY - SECURITY SERVICES</h3>
          <div className="service-details-grid">
            <div className="detail-item">
              <h4>🎫 Event Security</h4>
              <p>Comprehensive security coverage for events of any size, from intimate gatherings to large-scale festivals.</p>
            </div>
            <div className="detail-item">
              <h4>👥 Crowd Management</h4>
              <p>Expert crowd control and management to ensure smooth flow and guest safety throughout your event.</p>
            </div>
            <div className="detail-item">
              <h4>🏢 Venue Security</h4>
              <p>Complete venue security services including perimeter control, access points, and emergency response.</p>
            </div>
            <div className="detail-item">
              <h4>🎸 Concerts & Festivals</h4>
              <p>Specialized security for high-energy events with large crowds, multiple stages, and complex logistics.</p>
            </div>
            <div className="detail-item">
              <h4>🚪 Access Control</h4>
              <p>Professional gate and entrance management with ID verification and guest screening procedures.</p>
            </div>
            <div className="detail-item">
              <h4>🎬 Guest Screening</h4>
              <p>Thorough but welcoming guest screening to maintain safety and security without compromising experience.</p>
            </div>
            <div className="detail-item">
              <h4>💼 Corporate Events</h4>
              <p>Professional security for corporate functions, conferences, and executive gatherings.</p>
            </div>
            <div className="detail-item">
              <h4>🚪 Entry & Exit Monitoring</h4>
              <p>Controlled entry and exit points with professional monitoring to manage guest flow and security.</p>
            </div>
            <div className="detail-item">
              <h4>🎉 Private Events</h4>
              <p>Discreet security services for private celebrations, parties, and exclusive gatherings.</p>
            </div>
            <div className="detail-item">
              <h4>⭐ VIP Areas</h4>
              <p>Specialized VIP protection and premium area management for high-profile guests and exclusivity.</p>
            </div>
          </div>
        </div>

        <div className="service-category">
          <h3>DUB2 EVENT STAFF - STAFFING SERVICES</h3>
          <div className="service-details-grid">
            <div className="detail-item">
              <h4>👔 Event Staff</h4>
              <p>Professional event personnel trained to provide exceptional service and support throughout your event.</p>
            </div>
            <div className="detail-item">
              <h4>🤝 Guest Services</h4>
              <p>Friendly and efficient guest services staff to welcome attendees and answer questions.</p>
            </div>
            <div className="detail-item">
              <h4>✍️ Check-in / Registration</h4>
              <p>Organized registration and check-in services to streamline guest arrival and data collection.</p>
            </div>
            <div className="detail-item">
              <h4>🚪 Door Staff</h4>
              <p>Professional door staff for crowd management and guest direction at event entrances.</p>
            </div>
            <div className="detail-item">
              <h4>🎯 Crowd Support</h4>
              <p>Attentive staff positioned throughout the venue to assist guests and manage flow.</p>
            </div>
            <div className="detail-item">
              <h4>🔨 Event Setup & Breakdown</h4>
              <p>Experienced crew for pre-event setup and post-event breakdown of all equipment and materials.</p>
            </div>
            <div className="detail-item">
              <h4>🏛️ Venue Support</h4>
              <p>General venue support services to keep operations running smoothly during your event.</p>
            </div>
            <div className="detail-item">
              <h4>⚙️ General Event Operations</h4>
              <p>Comprehensive operational support ensuring all aspects of your event run seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="why-choose-services">
        <h2>WHY CHOOSE OUR SERVICES?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <div className="benefit-icon">✅</div>
            <h4>PROFESSIONAL</h4>
            <p>Our teams are trained professionals who represent your event with excellence and respect.</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">⏰</div>
            <h4>RELIABLE</h4>
            <p>You can count on us to be where you need us, when you need us, every single time.</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">🎯</div>
            <h4>FLEXIBLE</h4>
            <p>We customize our services to match your specific event needs and requirements.</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">🎪</div>
            <h4>EVENT-FOCUSED</h4>
            <p>Our goal is to support your event—we're here to make your vision a success.</p>
          </div>
        </div>
      </section>

      {/* Event Types We Serve */}
      <section className="event-types">
        <h2>EVENT TYPES WE SERVE</h2>
        <div className="event-types-grid">
          <div className="event-type-card">
            <div className="event-icon">🎵</div>
            <h4>CONCERTS & FESTIVALS</h4>
            <p>Large-scale music and festival events with high-energy crowds</p>
          </div>
          <div className="event-type-card">
            <div className="event-icon">💼</div>
            <h4>CORPORATE EVENTS</h4>
            <p>Professional conferences, seminars, and corporate gatherings</p>
          </div>
          <div className="event-type-card">
            <div className="event-icon">🎉</div>
            <h4>PRIVATE EVENTS</h4>
            <p>Intimate private celebrations and exclusive gatherings</p>
          </div>
          <div className="event-type-card">
            <div className="event-icon">🏟️</div>
            <h4>LARGE EVENTS</h4>
            <p>Major events with complex logistics and large attendance</p>
          </div>
          <div className="event-type-card">
            <div className="event-icon">🌙</div>
            <h4>NIGHTLIFE & ENTERTAINMENT</h4>
            <p>Clubs, lounges, and entertainment venues</p>
          </div>
          <div className="event-type-card">
            <div className="event-icon">✨</div>
            <h4>SPECIAL EVENTS</h4>
            <p>Custom events requiring specialized services</p>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="service-features">
        <h2>SERVICE FEATURES</h2>
        <div className="features-list">
          <div className="feature-column">
            <h3>YADDAMAEN SECURITY FEATURES</h3>
            <ul>
              <li>✓ Professional trained security personnel</li>
              <li>✓ Background-checked team members</li>
              <li>✓ Licensed and insured services</li>
              <li>✓ 24/7 availability</li>
              <li>✓ Customized security plans</li>
              <li>✓ Emergency response protocols</li>
            </ul>
          </div>
          <div className="feature-column">
            <h3>DUB2 STAFFING FEATURES</h3>
            <ul>
              <li>✓ Professional event staff</li>
              <li>✓ Customer service trained</li>
              <li>✓ Flexible scheduling</li>
              <li>✓ Quick response time</li>
              <li>✓ Team coordination support</li>
              <li>✓ Comprehensive onboarding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <h2>READY TO GET STARTED?</h2>
        <p>Contact us today to discuss your event needs and get a custom quote.</p>
        <div className="cta-buttons">
          <button className="btn btn-primary">REQUEST SECURITY</button>
          <button className="btn btn-secondary">BOOK EVENT STAFF</button>
          <button className="btn btn-contact">GET A QUOTE</button>
        </div>
      </section>
    </div>
  )
}

export default Services
