import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import '../styles/login-page.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    console.log('Login submitted:', formData);
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
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

      <main className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Masuk ke Akun</h1>
            <p className="login-subtitle">Yuk, lanjutin belajarmu di videobelajar.</p>
          </div>

          <div className="login-form-section">
            <form className="login-form" onSubmit={handleSubmit}>
              <FormInput
                label="E-Mail"
                type="email"
                name="email"
                value={formData.email}
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

              <div className="form-footer">
                <a href="#" className="forgot-password">Lupa Password?</a>
              </div>

              <div className="form-buttons">
                <Button type="submit" variant="login">
                  Masuk
                </Button>
                <Button type="button" variant="register" onClick={handleRegisterClick}>
                  Daftar
                </Button>
              </div>
            </form>

            <div className="login-divider">
              <span className="divider-text">atau</span>
            </div>

            <Button variant="google" onClick={handleGoogleLogin}>
                        Masuk dengan Google
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
