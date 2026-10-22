export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main-new">
          <div className="footer-brand">
            <img src="/assets/images/logo/better-marikina-logo-white.png" alt="Better Marikina logo" className="footer-logo" />
            <p className="footer-tagline">Empowering the people of Marikina with transparent access to the services, programs, and public funds of Marikina City.</p>
            <div className="footer-social-new">
              <a href="https://www.facebook.com/bettermarikina" className="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="https://github.com/BetterMarikina/bettermarikina" className="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="bi bi-github"></i></a>
              <a href="https://discord.com/invite/qeSu7RJkjQ" className="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Discord"><i className="bi bi-discord"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links-new">
              <li><a href="/sitemap-page">Sitemap</a></li>
              <li><a href="https://www.marikina.gov.ph/" target="_blank" rel="noopener noreferrer">Citizen&apos;s Charter</a></li>
              <li><a href="/terms">Terms of Use</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/accessibility">Accessibility</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul className="footer-links-new">
              <li><a href="https://data.gov.ph" target="_blank" rel="noopener noreferrer">Open Data Philippines</a></li>
              <li><a href="https://www.foi.gov.ph/" target="_blank" rel="noopener noreferrer">Freedom of Information</a></li>
              <li><a href="https://www.marikina.gov.ph/" target="_blank" rel="noopener noreferrer">Official Marikina City Portal</a></li>
              <li><a href="https://www.facebook.com/MarikinaCityPIO" target="_blank" rel="noopener noreferrer">Marikina City PIO Facebook</a></li>
              <li><a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer">BLGF Portal</a></li>
              <li><a href="https://cmci.dti.gov.ph/" target="_blank" rel="noopener noreferrer">CMCI DTI Portal</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <div className="footer-cost" role="status" aria-label="Cost to the People of Marikina: Zero Pesos">
              Cost to the People of Marikina = <span className="footer-cost-value">₱0</span>
            </div>
            <a href="https://www.facebook.com/bettermarikina" className="footer-contribute" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i> Contact BetterMarikina on Facebook</a>
            <a href="https://github.com/BetterMarikina/bettermarikina/issues" className="footer-contribute" target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope-heart"></i> Volunteer with us</a>
            <a href="https://github.com/BetterMarikina/bettermarikina" className="footer-contribute" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i> Contribute code with us</a>
          </div>
        </div>
        <div className="footer-bottom-new">
          <div className="footer-copyright">
            <span>&copy; {currentYear} BetterMarikina contributors. Based on BetterSolano. MIT | CC BY 4.0 All public information sourced from official government portals.</span>
            <span className="footer-version"><i className="bi bi-boxes"></i> Ver. 1.1.12</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
