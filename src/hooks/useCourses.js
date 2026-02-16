import { useState, useEffect, useCallback } from 'react';
import { getCourses, createCourse, updateCourse, deleteCourse } from '../services/api/courseApi';

/**
 * Custom hook untuk mengelola state courses dan operasi API
 * @returns {Object} courses state dan fungsi CRUD
 */
const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch courses saat hook pertama kali digunakan
  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCourses();
      setCourses(data);
    } catch (err) {
      setError(err.message || 'Gagal mengambil data courses');
      console.error('Error fetching courses:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto-fetch saat komponen mount
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // CREATE - Tambah course baru
  const addCourse = async (courseData) => {
    try {
      setLoading(true);
      setError(null);
      const newCourse = await createCourse(courseData);
      setCourses(prev => [...prev, newCourse]);
      return newCourse;
    } catch (err) {
      setError(err.message || 'Gagal menambah course');
      console.error('Error creating course:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // UPDATE - Edit course
  const editCourse = async (id, courseData) => {
    try {
      setLoading(true);
      setError(null);
      const updatedCourse = await updateCourse(id, courseData);
      setCourses(prev => prev.map(c => c.id === id ? updatedCourse : c));
      return updatedCourse;
    } catch (err) {
      setError(err.message || 'Gagal mengupdate course');
      console.error('Error updating course:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // DELETE - Hapus course
  const removeCourse = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await deleteCourse(id);
      setCourses(prev => prev.filter(c => c.id !== id));
    } catch (err) {
      setError(err.message || 'Gagal menghapus course');
      console.error('Error deleting course:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Refresh data dari API
  const refreshCourses = () => {
    fetchCourses();
  };

  return {
    courses,
    loading,
    error,
    addCourse,
    editCourse,
    removeCourse,
    refreshCourses,
  };
};

export default useCourses;
