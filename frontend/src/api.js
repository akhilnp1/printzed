
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
});

export const MEDIA_URL = process.env.REACT_APP_MEDIA_URL || 'http://localhost:8000';

// Services
export const getServices = () => API.get('/services/');
export const addService = (data) => API.post('/services/', data);
export const updateService = (id, data) => API.put(`/services/${id}/`, data);
export const deleteService = (id) => API.delete(`/services/${id}/`);

// Portfolio
export const getPortfolio = () => API.get('/portfolio/');
export const addPortfolio = (data) => API.post('/portfolio/', data);
export const updatePortfolio = (id, data) => API.patch(`/portfolio/${id}/`, data);
export const deletePortfolio = (id) => API.delete(`/portfolio/${id}/`);

// Team
export const getTeam = () => API.get('/team/');
export const addTeamMember = (data) => API.post('/team/', data);
export const updateTeamMember = (id, data) => API.patch(`/team/${id}/`, data);
export const deleteTeamMember = (id) => API.delete(`/team/${id}/`);

// Reviews
export const getReviews = () => API.get('/reviews/');
export const addReview = (data) => API.post('/reviews/', data);
export const updateReview = (id, data) => API.patch(`/reviews/${id}/`, data);
export const deleteReview = (id) => API.delete(`/reviews/${id}/`);

