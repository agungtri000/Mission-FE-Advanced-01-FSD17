import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import PhoneInput from '../components/PhoneInput';
import Button from '../components/Button';
import '../styles/register-page.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted:', formData);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleGoogleRegister = () => {
    console.log('Google register clicked');
  };

  return (
    <>
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">
              <img src="/Image/Logo-video-belajar.png" alt="videobelajar" />
            </div>
          </div>
        </div>
      </nav>

      <main className="register-container">
        <div className="register-card">
          <div className="register-header">
            <h1 className="register-title">Pendaftaran Akun</h1>
            <p className="register-subtitle">Yuk, daftarkan akunmu sekarang juga!</p>
          </div>

          <div className="register-form-section">
            <form className="register-form" onSubmit={handleSubmit}>
              <FormInput
                label="Nama Lengkap"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required={true}
              />

              <FormInput
                label="E-Mail"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required={true}
              />

              <PhoneInput
                label="No. Hp"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required={true}
              />

              <FormInput
                label="Kata Sandi"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required={true}
                hasToggle={true}
              />

              <FormInput
                label="Konfirmasi Kata Sandi"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required={true}
                hasToggle={true}
              />

              <div className="form-footer">
                <a href="#" className="forgot-password">Lupa Password?</a>
              </div>

              <div className="form-buttons">
                <Button type="submit" variant="register">
                  Daftar
                </Button>
                <Button type="button" variant="login" onClick={handleLoginClick}>
                  Masuk
                </Button>
              </div>
            </form>

            <div className="register-divider">
              <span className="divider-text">atau</span>
            </div>

            <Button variant="google" onClick={handleGoogleRegister} icon="/Image/icon-google.png">
              Daftar dengan Google
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterPage;
