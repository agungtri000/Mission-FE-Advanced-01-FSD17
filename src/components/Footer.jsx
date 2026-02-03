const Footer = () => {
  const categories = [
    { name: 'Pemasaran', href: '#' },
    { name: 'Manajemen Bisnis', href: '#' },
    { name: 'Pengembangan Diri', href: '#' },
    { name: 'Desain', href: '#' }
  ];

  const company = [
    { name: 'Pusat Bantuan', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Ketentuan Layanan', href: '#' },
    { name: 'Kebijakan Privasi', href: '#' }
  ];

  const community = [
    { name: 'Tips Sukses', href: '#' },
    { name: 'Blog', href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <img src="/Image/Logo-video-belajar.png" alt="videobelajar" />
          </div>
          <address className="footer-address">
            <h3>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</h3>
            <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p>+62-877-7123-1234</p>
          </address>
        </div>

        <div className="footer-kanan">
          <div className="footer-column">
            <h3 className="footer-heading">Kategori</h3>
            <button className="footer-toggle mobile-only">
              <span className="footer-title">Kategori</span>
              <img src="/Image/icon-arrow-right.svg" alt="toggle" className="footer-arrow" />
            </button>
            <ul className="footer-links">
              {categories.map((item, index) => (
                <li key={index}><a href={item.href}>{item.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Perusahaan</h3>
            <button className="footer-toggle mobile-only">
              <span className="footer-title">Perusahaan</span>
              <img src="/Image/icon-arrow-right.svg" alt="toggle" className="footer-arrow" />
            </button>
            <ul className="footer-links">
              {company.map((item, index) => (
                <li key={index}><a href={item.href}>{item.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Komunitas</h3>
            <button className="footer-toggle mobile-only">
              <span className="footer-title">Komunitas</span>
              <img src="/Image/icon-arrow-right.svg" alt="toggle" className="footer-arrow" />
            </button>
            <ul className="footer-links">
              {community.map((item, index) => (
                <li key={index}><a href={item.href}>{item.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  
      <div className="footer-bottom">
        <p>@2023 Gerobak Sayur All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <img src="/Image/linkedin-icon.png" alt="" />
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <img src="/Image/fb-Icon-1.png" alt="" />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <img src="/Image/facebook-icon.png" alt="" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <img src="/Image/twitter-icon.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
