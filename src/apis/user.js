import axios from '../config/axios';

const userApi = {};

userApi.updateUserInfoById = (userId, data) => axios.patch(`/user/info/${userId}`, data)
userApi.uploadSlip = (fileSlip) => axios.patch('/user/upload',fileSlip,{
    headers:{'Content-Type' : 'multipart/form-data'}
})

export default userApi