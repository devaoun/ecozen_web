import axios from '../config/axios';

const authApi = {};

authApi.register = (body) => axios.post('/auth/register',body);
authApi.isUser = (email) => axios.get(`/auth/${email}`);
authApi.login = (body) => axios.post('auth/login',body)

export default authApi