import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>YADDAMAEN EVENT SECURITY INC.</h4>
          <p>EST 2024</p>
        </div>
        <div className="footer-section">
          <h4>DUB2 EVENT STAFF</h4>
          <p>EST 2024</p>
        </div>
        <div className="footer-section">
          <h4>SERVICE AREAS</h4>
          <p>Serving the Bay Area & Your City</p>
          <p>Security • Staffing • Stagehands • Production • Clean-up</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Yaddamaen Event Security Inc. & Dub2 Event Staff. All rights reserved.</p>
        <p>Follow us on <a href="https://instagram.com/yaddamaensecurity415" target="_blank" rel="noopener noreferrer">Instagram</a></p>
      </div>
    </footer>
  )
}

export default Footer
