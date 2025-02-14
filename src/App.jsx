import './App.css'
import { useEffect } from 'react'

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const header = document.querySelector('.main-header');
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="main-header">
        <div className="nav-container">
          <div className="logo-area">POLITICIAN</div>
          <nav className="nav-links">
            <a onClick={scrollToTop} href="#" className="nav-link">Home</a>
            <a href="#about">About</a>
            <a href="#platform">Platform</a>
            <a href="#news">Updates</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>Jagbir Dosanjh</h1>
            <p className="hero-quote">"I am committed to using my position as a politician to serve the needs and interests of my constituents and to create a better future for our community."</p>
            <img src="/signature.png" alt="" className="signature" />
          </div>
        </section>

        <section id="about" className="content-section">
          <h2>About Jagbir</h2>
          <div className="section-content">
            <div className="text-content">
              <p>Jagbir Dosanjh has been a proud resident of Markham for over 20 years, dedicated to serving the community through various initiatives and programs.</p>
              <p>With a background in public service and community development, Jagbir understands the unique challenges and opportunities that face our diverse community.</p>
            </div>
          </div>
        </section>

        <section id="platform" className="content-section">
          <h2>Platform</h2>
          <div className="platform-grid">
            <div className="platform-item">
              <h3>Healthcare</h3>
              <p>Improving access to healthcare services and reducing wait times in our local hospitals.</p>
            </div>
            <div className="platform-item">
              <h3>Education</h3>
              <p>Supporting our schools and ensuring quality education for future generations.</p>
            </div>
            <div className="platform-item">
              <h3>Economy</h3>
              <p>Creating jobs and supporting local businesses in Markham-Unionville.</p>
            </div>
          </div>
        </section>

        <section id="news" className="content-section">
          <h2>Latest Updates</h2>
          <div className="news-content">
            <article className="news-item">
              <h3>Community Town Hall Success</h3>
              <div className="news-meta">Posted on March 15, 2024</div>
              <p>Thank you to everyone who joined us at our recent town hall meeting. The engagement and feedback from our community members was invaluable as we discussed important local issues including transit development and healthcare services.</p>
              <p>Key points discussed included:</p>
              <ul>
                <li>Improving local transit connectivity</li>
                <li>Healthcare wait times reduction strategies</li>
                <li>Supporting small businesses post-pandemic</li>
              </ul>
            </article>

            <article className="news-item">
              <h3>Healthcare Initiative Launch</h3>
              <div className="news-meta">Posted on March 10, 2024</div>
              <p>Our new proposal for improving local healthcare services focuses on reducing wait times and expanding services at our local medical facilities. Working with healthcare professionals, we've developed a comprehensive plan to address our community's needs.</p>
            </article>

            <article className="news-item">
              <h3>Supporting Local Businesses</h3>
              <div className="news-meta">Posted on March 5, 2024</div>
              <p>Meeting with small business owners to discuss economic growth and recovery strategies. Our local businesses are the backbone of our community, and we're committed to supporting their success.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="content-section">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>Get in touch with our team to learn more about how you can get involved.</p>
              <div className="contact-details">
                <p>Email: info@jagbirdosanjh.ca</p>
                <p>Phone: (123) 456-7890</p>
                <p>Office: 123 Main Street, Markham, ON</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
