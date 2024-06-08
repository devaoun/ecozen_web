import axios from '../config/axios';

const authApi = {};

authApi.register = (body) => axios.post('/auth/register',body);
authApi.isUser = (email) => axios.get(`/auth/email/${email}`);
authApi.login = (body) => axios.post('/auth/login',body);
authApi.getAuthUser = (headers) => axios.get('/auth/me',{headers});

export default authApi