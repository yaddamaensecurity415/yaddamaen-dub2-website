import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>EVENT SECURITY THAT PROVIDES<br />BAY AREA QUALITY SECURITY IN YOUR CITY!!!</h1>
          <p>Yaddamaen Event Security Inc. & Dub2 Event Staff provide professional security, stagehands, production support, and event staff for events of all sizes.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">REQUEST SECURITY</button>
            <button className="btn btn-secondary">BOOK EVENT STAFF</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-item">
          <h3>✓ PROFESSIONAL TEAMS</h3>
        </div>
        <div className="feature-item">
          <h3>✓ ALL EVENT SIZES</h3>
        </div>
        <div className="feature-item">
          <h3>✓ LOCAL & TRUSTED</h3>
        </div>
        <div className="feature-item">
          <h3>✓ ESTABLISHED 2024</h3>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2>OUR SERVICES</h2>
        <div className="services-grid">
          <div className="service-card yaddamaen">
            <h3>YADDAMAEN EVENT SECURITY INC.</h3>
            <p className="tagline">SECURITY YOU CAN RELY ON</p>
            <p>Professional event security services designed around the needs of your event.</p>
            <ul>
              <li>✓ Event Security</li>
              <li>✓ Crowd Management</li>
              <li>✓ Venue Security</li>
              <li>✓ Concerts & Festivals</li>
              <li>✓ Corporate Events</li>
              <li>✓ Private Events</li>
            </ul>
            <button className="btn btn-primary">REQUEST SECURITY</button>
          </div>
          <div className="service-card dub2">
            <h3>DUB2 EVENT STAFF</h3>
            <p className="tagline">THE RIGHT STAFF FOR A SUCCESSFUL EVENT</p>
            <p>Professional event personnel to help keep your event organized, welcoming, and running smoothly.</p>
            <ul>
              <li>✓ Event Staff</li>
              <li>✓ Guest Services</li>
              <li>✓ Check-in / Registration</li>
              <li>✓ Door Staff</li>
              <li>✓ Crowd Support</li>
              <li>✓ Event Setup & Breakdown</li>
            </ul>
            <button className="btn btn-secondary">BOOK EVENT STAFF</button>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services">
        <h2>DUB2 EVENT STAFF - ADDITIONAL SERVICES</h2>
        <div className="services-flex">
          <div className="service-box">
            <h4>STAGEHAND</h4>
            <p>Professional stagehands for setup, teardown, and on-site support.</p>
          </div>
          <div className="service-box">
            <h4>VIDEO PRODUCTION</h4>
            <p>Capture your event with professional video production and live support.</p>
          </div>
          <div className="service-box">
            <h4>CLEAN-UP CREW</h4>
            <p>Keep your venue clean, safe, and ready for what's next.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>WHY CHOOSE US?</h2>
        <div className="reasons-grid">
          <div className="reason">
            <h4>PROFESSIONAL</h4>
            <p>Our teams are there to represent your event professionally and respectfully.</p>
          </div>
          <div className="reason">
            <h4>RELIABLE</h4>
            <p>We understand that event organizers need prepared, ready-when-expected, and where they're expected.</p>
          </div>
          <div className="reason">
            <h4>FLEXIBLE</h4>
            <p>Every event is different. We work with you to ensure appropriate staffing and security needs.</p>
          </div>
          <div className="reason">
            <h4>EVENT-FOCUSED</h4>
            <p>Our goal is to support your event—not get in the way of it.</p>
          </div>
        </div>
      </section>

      {/* Events We Serve */}
      <section className="events-served">
        <h2>EVENTS WE SERVE</h2>
        <div className="events-grid">
          <div className="event-type">CONCERTS & FESTIVALS</div>
          <div className="event-type">CORPORATE EVENTS</div>
          <div className="event-type">PRIVATE EVENTS</div>
          <div className="event-type">LARGE EVENTS</div>
          <div className="event-type">NIGHTLIFE & ENTERTAINMENT</div>
          <div className="event-type">SPECIAL EVENTS</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>YOUR EVENT STARTS WITH A PLAN</h2>
        <p>Tell us about your event and we'll help determine what type of security, staffing, stagehand, production, and clean-up support you need.</p>
        <div className="cta-buttons">
          <button className="btn btn-primary">REQUEST A QUOTE</button>
          <button className="btn btn-phone">CALL NOW</button>
        </div>
      </section>
    </div>
  )
}

export default Home
