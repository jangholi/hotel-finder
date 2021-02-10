import Axios from 'axios';

/**
 * HTTP Client
 */
export class HttpClient {
    /**
     * set base url
     * @param baseURL {string} base url
     */
    constructor(baseURL = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_PATH) {
        this._baseURL = baseURL;
    }

    // TODO: Check token before send
    // TODO: Check auth before send
    /**
     * make a request by axios
     * @param method {string} ['POST'|'GET'|'PUT'|'PATCH'|'DELETE']
     * @param url {string}
     * @param data {object}
     * @param params {object}
     * @param auth {object}
     * @returns {Promise<AxiosResponse<any>>}
     */
    request(method, url, data, params) {

        console.log('baseURL', this._baseURL)
        return Axios.request({
            baseURL: this._baseURL,
            method,
            url,
            data,
            params,
            headers: {
                'Content-Type':'application/json'
            }
        });

    }
}

export default HttpClient;