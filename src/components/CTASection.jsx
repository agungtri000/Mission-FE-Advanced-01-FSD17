const CTASection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter submitted');
  };

  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>
      <div className="cta-content">
        <p className="cta-label">NEWSLETTER</p>
        <h2 className="cta-title">Mau Belajar Lebih Banyak?</h2>
        <p className="cta-description">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik harisenin.com
        </p>
        <div className="cta-form-wrapper">
          <form className="cta-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Masukkan Emailmu" className="cta-input" required />
            <button type="submit" className="btn-cta">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
