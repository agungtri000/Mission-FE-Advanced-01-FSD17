import axiosInstance from './axiosInstance';

/**
 * Course API Service
 * Menyediakan fungsi untuk operasi CRUD pada courses
 */

// GET - Mengambil semua courses
export const getCourses = async () => {
  const response = await axiosInstance.get('/courses');
  return response.data;
};

// GET - Mengambil satu course berdasarkan ID
export const getCourseById = async (id) => {
  const response = await axiosInstance.get(`/courses/${id}`);
  return response.data;
};

// POST - Membuat course baru
export const createCourse = async (courseData) => {
  const response = await axiosInstance.post('/courses', courseData);
  return response.data;
};

// PUT - Mengupdate course berdasarkan ID
export const updateCourse = async (id, courseData) => {
  const response = await axiosInstance.put(`/courses/${id}`, courseData);
  return response.data;
};

// DELETE - Menghapus course berdasarkan ID
export const deleteCourse = async (id) => {
  const response = await axiosInstance.delete(`/courses/${id}`);
  return response.data;
};

// Export semua fungsi sebagai object
export default {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
