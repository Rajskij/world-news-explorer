import { getData } from './testData.js';

const API_KEY = 'bcf1d1f41557400682fdd7699efbeeb6';
const BASE_URL = 'https://gnews.io/api/v4/';

axios.defaults.baseURL = BASE_URL;

export async function search(country, language, category, query) {
    if (!query) {
        return getHeadlines(country, language, category);
    }
    const queryParam = buildQueryParam(country, language, null, query);
    console.log(`${BASE_URL}search?${queryParam}apikey=${API_KEY}`);
    const response = await axios.get(`search?${queryParam}apikey=${API_KEY}`)
    // return getData();
    return response.data;
}

async function getHeadlines(country, language, category) {
    const response = await axios.get('https://newsapi.org/v2/top-headlines/?country=ru&apiKey=2c3b7146de7a4cde937cdee0cdd961f5');
    // console.log(response);
    const queryParam = buildQueryParam(country, language, category, null);
    console.log(`${BASE_URL}top-headlines?${queryParam}apikey=${API_KEY}`);
    // const response = await axios.get(`top-headlines?${queryParam}apikey=${API_KEY}`);
    return response.data;
}

function buildQueryParam(country, language, category, query) {
    const params = new URLSearchParams();
    
    if (category) params.append('category', category);
    if (query) params.append('q', query);
    if (language !== 'any') params.append('lang', language);
    if (country !== 'world-wide') params.append('country', country);
    
    return params.toString() + (params.toString() ? '&' : '');
}
