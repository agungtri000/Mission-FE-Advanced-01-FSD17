import { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import CategoryTabs from '../components/CategoryTabs';
import CourseCard from '../components/CourseCard';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import CourseModal from '../components/CourseModal';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import useCourses from '../hooks/useCourses';
import '../styles/home-page.css';

const HomePage = () => {
  const categories = ['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'];
  const [activeCategory, setActiveCategory] = useState('Semua Kelas');

  // Gunakan custom hook untuk CRUD operations
  const { courses, loading, error, addCourse, editCourse, removeCourse, refreshCourses } = useCourses();

  // State untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [deletingCourse, setDeletingCourse] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mapper dari API format ke UI format
  const mapApiToUi = (apiCourse) => ({
    id: apiCourse.id,
    image: apiCourse.thumbnail || '/Image/foto-card.jpg',
    title: apiCourse.title,
    description: apiCourse.description,
    instructor: {
      name: apiCourse.tutorName,
      role: apiCourse.tutorJob,
      avatar: apiCourse.tutorPhoto || '/Image/instrutur-foto.png'
    },
    rating: { value: 4.5, count: 100 }, // Default rating karena tidak ada di API
    price: apiCourse.price ? `Rp ${parseFloat(apiCourse.price).toLocaleString('id-ID')}` : 'Rp 0',
    category: apiCourse.category || 'Bisnis'
  });

  // Mapper dari UI format ke API format
  const mapUiToApi = (uiCourse) => ({
    title: uiCourse.title,
    description: uiCourse.description,
    tutorName: uiCourse.instructor?.name || uiCourse.instructorName,
    tutorJob: uiCourse.instructor?.role || uiCourse.instructorRole,
    tutorPhoto: uiCourse.instructor?.avatar || uiCourse.instructorAvatar,
    thumbnail: uiCourse.image,
    price: uiCourse.price?.toString().replace(/[^0-9.]/g, '') || '0',
    category: uiCourse.category
  });

  // Transform courses dari API ke format UI
  const transformedCourses = courses.map(mapApiToUi);

  // Filter courses berdasarkan kategori
  const filteredCourses = activeCategory === 'Semua Kelas'
    ? transformedCourses
    : transformedCourses.filter(course => course.category === activeCategory);

  // CREATE - Tambah course baru
  const handleAddCourse = () => {
    setEditingCourse(null);
    setIsModalOpen(true);
  };

  // UPDATE - Edit course (perlu transform ke format UI)
  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setIsModalOpen(true);
  };

  // DELETE - Konfirmasi hapus
  const handleDeleteClick = (course) => {
    setDeletingCourse(course);
    setIsDeleteModalOpen(true);
  };

  // Save course (CREATE atau UPDATE)
  const handleSaveCourse = async (courseData) => {
    setIsSubmitting(true);
    try {
      const apiData = mapUiToApi(courseData);
      
      if (editingCourse) {
        // UPDATE
        await editCourse(editingCourse.id, apiData);
      } else {
        // CREATE
        await addCourse(apiData);
      }
      setIsModalOpen(false);
    } catch (err) {
      console.error('Error saving course:', err);
      alert('Gagal menyimpan data. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // DELETE - Hapus course
  const handleConfirmDelete = async () => {
    if (deletingCourse) {
      setIsSubmitting(true);
      try {
        await removeCourse(deletingCourse.id);
        setDeletingCourse(null);
        setIsDeleteModalOpen(false);
      } catch (err) {
        console.error('Error deleting course:', err);
        alert('Gagal menghapus data. Silakan coba lagi.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

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

        {/* Tombol Tambah Kelas & Refresh */}
        <div className="add-course-section">
          <button className="btn-add-course" onClick={handleAddCourse} disabled={isSubmitting}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Tambah Kelas
          </button>
          <button className="btn-refresh" onClick={refreshCourses} disabled={loading}>
            🔄 Refresh
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Memuat data...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-state">
            <p>⚠️ {error}</p>
            <button onClick={refreshCourses}>Coba Lagi</button>
          </div>
        )}

        {/* Grid Course Cards */}
        {!loading && !error && filteredCourses.length > 0 && (
          <div className="course-grid">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                onEdit={() => handleEditCourse(course)}
                onDelete={() => handleDeleteClick(course)}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredCourses.length === 0 && (
          <div className="empty-state">
            <p>Tidak ada kelas dalam kategori ini.</p>
            <button className="btn-add-course" onClick={handleAddCourse}>
              Tambah Kelas Baru
            </button>
          </div>
        )}
      </main>
      <CTASection />
      <Footer />

      {/* Modal Add/Edit Course */}
      <CourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSaveCourse}
        course={editingCourse}
        isSubmitting={isSubmitting}
      />

      {/* Modal Delete Confirmation */}
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        courseName={deletingCourse?.title || ''}
        isSubmitting={isSubmitting}
      />
    </>
  );
};

export default HomePage;
