import axios from '../config/axios';

const userApi = {};

userApi.updateUserInfoById = (userId, data) => axios.patch(`/user/info/${userId}`, data)

export default userApi