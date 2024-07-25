import axios from "axios";

const APIkey = 'ebc38632-a877-4e09-b870-c2ecfaedce39';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": APIkey,
    }
});

const thenFunction = (response) => response.data;

export const usersAPI = {
    getUsers(selectedPage, pageSize) {
        return instance.get(`users?page=${selectedPage}&count=${pageSize}`)
            .then(thenFunction)
    },
    setFollow(id) {
        return instance.post(`/follow/${id}`)
            .then(thenFunction)
    },
    setUnfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(thenFunction)
    },
};

export const profileAPI = {
    getUserData(newUserId) {
        return instance.get(`profile/${newUserId}`)
            .then(thenFunction)
    },
    getUserFollowed(newUserId) {
        return instance.get(`follow/${newUserId}`)
            .then(thenFunction)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(thenFunction)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status })
            .then(thenFunction)
    },
};

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(thenFunction)
    },
    logIn(data) {
        return instance.post('auth/login', { 
            email: data.login,
            password: data.password,
            rememberMe: data.rememberMe,
            captcha: data.captcha,
         })
            .then(thenFunction)
    },
    logOut() {
        return instance.delete('auth/login')
            .then(thenFunction);
    },
    getCaptcha() {
        return instance.get('/security/get-captcha-url')
            .then(thenFunction)
    }
};