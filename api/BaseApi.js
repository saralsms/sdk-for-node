import axios from 'axios';
export default class BaseApi {
    constructor(authToken) {
        this.api = axios.create({
            baseURL: 'https://cloudapi.saralsms.com/v1',
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': authToken,
            },
        });
        return this;
    }
    async getCredits() {
        return this.api
            .get('/credits')
            .then((res) => {
            const data = res.data;
            return Promise.resolve(data);
        })
            .catch((e) => {
            const data = e.response.data;
            return Promise.reject(data);
        });
    }
    async getReports(page = 1) {
        return this.api
            .get('/reports', {
            params: {
                page: page,
            },
        })
            .then((res) => {
            const data = res.data;
            return Promise.resolve(data);
        })
            .catch((e) => {
            const data = e.response.data;
            return Promise.reject(data);
        });
    }
    async send(numbers, message) {
        return this.api
            .post('/send', { to: numbers.join(','), text: message })
            .then((res) => {
            const data = res.data;
            return Promise.resolve(data);
        })
            .catch((e) => {
            const data = e.response.data;
            return Promise.reject(data);
        });
    }
}
