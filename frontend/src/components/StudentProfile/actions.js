import API from '../../framework/api';

export const getStudent = id => API.get(`student/${id}/`);
