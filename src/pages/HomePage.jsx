import { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import CategoryTabs from '../components/CategoryTabs';
import CourseCard from '../components/CourseCard';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import '../styles/home-page.css';

const HomePage = () => {
  const categories = ['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'];
  const [activeCategory, setActiveCategory] = useState('Semua Kelas');

  const courses = [
    {
      id: 1,
      image: '/Image/foto-card.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      instructor: {
        name: 'Jenna Ortega',
        role: 'Senior Accountant',
        avatar: '/Image/instrutur-foto.png'
      },
      rating: { value: 3.5, count: 86 },
      price: 'Rp 300K'
    },
    {
      id: 2,
      image: '/Image/foto-card-2.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      instructor: {
        name: 'Jenna Ortega',
        role: 'Senior Accountant',
        avatar: '/Image/instrutur-foto-2.png'
      },
      rating: { value: 3.5, count: 86 },
      price: 'Rp 300K'
    },
    {
      id: 3,
      image: '/Image/foto-card-3.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      instructor: {
        name: 'Jenna Ortega',
        role: 'Senior Accountant',
        avatar: '/Image/instrutur-foto-3.png'
      },
      rating: { value: 3.5, count: 86 },
      price: 'Rp 300K'
    },
    {
      id: 4,
      image: '/Image/foto-card-4.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      instructor: {
        name: 'Jenna Ortega',
        role: 'Senior Accountant',
        avatar: '/Image/instrutur-foto-4.png'
      },
      rating: { value: 3.5, count: 86 },
      price: 'Rp 300K'
    },
    {
      id: 5,
      image: '/Image/foto-card.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      instructor: {
        name: 'Jenna Ortega',
        role: 'Senior Accountant',
        avatar: '/Image/instrutur-foto.png'
      },
      rating: { value: 3.5, count: 86 },
      price: 'Rp 300K'
    },
    {
      id: 6,
      image: '/Image/foto-card-2.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      instructor: {
        name: 'Jenna Ortega',
        role: 'Senior Accountant',
        avatar: '/Image/instrutur-foto-2.png'
      },
      rating: { value: 3.5, count: 86 },
      price: 'Rp 300K'
    },
    {
      id: 7,
      image: '/Image/foto-card-3.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      instructor: {
        name: 'Jenna Ortega',
        role: 'Senior Accountant',
        avatar: '/Image/instrutur-foto-3.png'
      },
      rating: { value: 3.5, count: 86 },
      price: 'Rp 300K'
    },
    {
      id: 8,
      image: '/Image/foto-card-4.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      instructor: {
        name: 'Jenna Ortega',
        role: 'Senior Accountant',
        avatar: '/Image/instrutur-foto-4.png'
      },
      rating: { value: 3.5, count: 86 },
      price: 'Rp 300K'
    },
    {
      id: 9,
      image: '/Image/foto-card.jpg',
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      instructor: {
        name: 'Jenna Ortega',
        role: 'Senior Accountant',
        avatar: '/Image/instrutur-foto.png'
      },
      rating: { value: 3.5, count: 86 },
      price: 'Rp 300K'
    }
  ];

  return (
    <>
      <Navigation showAvatar={true} />
      <Hero />
      <main className="main-content">
        <header className="section-header">
          <div>
            <h2>Koleksi Video Pembelajaran Unggulan</h2>
            <p className="section-subtitle">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
          </div>
        </header>

        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </main>
      <CTASection />
      <Footer />
    </>
  );
};

export default HomePage;
