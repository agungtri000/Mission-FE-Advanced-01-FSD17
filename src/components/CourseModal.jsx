import { useState, useEffect } from 'react';
import '../styles/modal.css';

const CourseModal = ({ isOpen, onClose, onSubmit, course = null }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    instructorName: '',
    instructorRole: '',
    category: 'Pemasaran',
    ratingValue: 0,
    ratingCount: 0,
    image: '',
    instructorAvatar: ''
  });

  const [imagePreview, setImagePreview] = useState('');
  const [avatarPreview, setAvatarPreview] = useState('');

  const categories = ['Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'];
  const isEditMode = course !== null;

  // Daftar gambar yang tersedia di folder public
  const availableImages = [
    '/Image/foto-card.jpg',
    '/Image/foto-card-2.jpg',
    '/Image/foto-card-3.jpg',
    '/Image/foto-card-4.jpg'
  ];

  const availableAvatars = [
    '/Image/instrutur-foto.png',
    '/Image/instrutur-foto-2.png',
    '/Image/instrutur-foto-3.png',
    '/Image/instrutur-foto-4.png'
  ];

  useEffect(() => {
    if (course) {
      setFormData({
        title: course.title || '',
        description: course.description || '',
        price: course.price || '',
        instructorName: course.instructor?.name || '',
        instructorRole: course.instructor?.role || '',
        category: course.category || 'Pemasaran',
        ratingValue: course.rating?.value || 0,
        ratingCount: course.rating?.count || 0,
        image: course.image || '',
        instructorAvatar: course.instructor?.avatar || ''
      });
      setImagePreview(course.image || '');
      setAvatarPreview(course.instructor?.avatar || '');
    } else {
      setFormData({
        title: '',
        description: '',
        price: '',
        instructorName: '',
        instructorRole: '',
        category: 'Pemasaran',
        ratingValue: 0,
        ratingCount: 0,
        image: '/Image/foto-card.jpg',
        instructorAvatar: '/Image/instrutur-foto.png'
      });
      setImagePreview('/Image/foto-card.jpg');
      setAvatarPreview('/Image/instrutur-foto.png');
    }
  }, [course, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageSelect = (imagePath) => {
    setFormData(prev => ({ ...prev, image: imagePath }));
    setImagePreview(imagePath);
  };

  const handleAvatarSelect = (avatarPath) => {
    setFormData(prev => ({ ...prev, instructorAvatar: avatarPath }));
    setAvatarPreview(avatarPath);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const courseData = {
      id: course?.id || Date.now(),
      image: formData.image || '/Image/foto-card.jpg',
      title: formData.title,
      description: formData.description,
      instructor: {
        name: formData.instructorName,
        role: formData.instructorRole,
        avatar: formData.instructorAvatar || '/Image/instrutur-foto.png'
      },
      rating: {
        value: parseFloat(formData.ratingValue) || 0,
        count: parseInt(formData.ratingCount) || 0
      },
      price: formData.price,
      category: formData.category
    };

    onSubmit(courseData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{isEditMode ? 'Edit Kelas' : 'Tambah Kelas Baru'}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <form className="modal-form" onSubmit={handleSubmit}>
          {/* Image Selection */}
          <div className="form-group">
            <label>Gambar Kelas</label>
            <div className="image-preview-container">
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="image-preview" />
              )}
            </div>
            <div className="image-selector">
              {availableImages.map((img, index) => (
                <div 
                  key={index}
                  className={`image-option ${formData.image === img ? 'selected' : ''}`}
                  onClick={() => handleImageSelect(img)}
                >
                  <img src={img} alt={`Option ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Judul Kelas</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Masukkan judul kelas"
              required
            />
          </div>

          <div className="form-group">
            <label>Deskripsi</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Masukkan deskripsi kelas"
              rows="3"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Harga</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Rp 300K"
                required
              />
            </div>

            <div className="form-group">
              <label>Kategori</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Instructor Section */}
          <div className="form-group">
            <label>Foto Instruktur</label>
            <div className="avatar-selector">
              {availableAvatars.map((avatar, index) => (
                <div 
                  key={index}
                  className={`avatar-option ${formData.instructorAvatar === avatar ? 'selected' : ''}`}
                  onClick={() => handleAvatarSelect(avatar)}
                >
                  <img src={avatar} alt={`Avatar ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Nama Instruktur</label>
              <input
                type="text"
                name="instructorName"
                value={formData.instructorName}
                onChange={handleChange}
                placeholder="Nama instruktur"
                required
              />
            </div>

            <div className="form-group">
              <label>Jabatan Instruktur</label>
              <input
                type="text"
                name="instructorRole"
                value={formData.instructorRole}
                onChange={handleChange}
                placeholder="Senior Accountant"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Rating</label>
              <input
                type="number"
                name="ratingValue"
                value={formData.ratingValue}
                onChange={handleChange}
                placeholder="3.5"
                step="0.1"
                min="0"
                max="5"
              />
            </div>

            <div className="form-group">
              <label>Jumlah Review</label>
              <input
                type="number"
                name="ratingCount"
                value={formData.ratingCount}
                onChange={handleChange}
                placeholder="86"
                min="0"
              />
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Batal
            </button>
            <button type="submit" className="btn-submit">
              {isEditMode ? 'Simpan Perubahan' : 'Tambah Kelas'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseModal;
