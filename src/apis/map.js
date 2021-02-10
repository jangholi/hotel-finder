/** @API Auth API **/

import HttpClient from "../utils/HttpClient";
const client = new HttpClient('https://places.ls.hereapi.com/');

/**
 * Logout user
 * @returns {Promise<AxiosResponse<*>>}
 */
export const getMarkerData = (params) => client.request('GET', 'places/v1/discover/explore', null, params);





// export function getData(data){
//     return fetch(`https://places.ls.hereapi.com/places/v1/discover/explore?apiKey=${'yJM5qjqhQ1HUFvfPa7ya8ft1eSt5OTDzwjd8dsw04ck'}&in=${data}&cat=${'hotel'}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type':'application/json'
//         }
//     })
//         .then((response) => response.json())
//         .catch((err) => console.log(err));
// }