import axios from 'axios';


let config = {
    baseURL: process.env.NODE_ENV === 'production' ? 'https://api.domain.com/' : 'http://api.dev/',

};

const api = axios.create(config);

export function setting(authData) {
    api.defaults.headers.common['Authorization'] = `Bearer ${authData.jwt}`;
}

export const upload = (url, name, files, config = {}) => {
    const data = new FormData();

    files.forEach((file, index) => {
        data.append(`${name}[${index}]`, file);
    });
    return api.post(url, data, config);

}

export default api;