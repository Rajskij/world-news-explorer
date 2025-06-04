const API_KEY = 'bcf1d1f41557400682fdd7699efbeeb6';
const BASE_URL = 'https://gnews.io/api/v4/';
const body = document.querySelector('body');

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use(config => {
    body.style.cursor = 'wait';
    return config;
})

axios.interceptors.response.use(config => {
    body.style.cursor = '';
    return config;
})

export async function search(country, language, category, query) {
    if (!query) {
        return getHeadlines(country, language, category);
    }
    const queryParam = buildQueryParam(country, language, null, query);
    const response = await axios.get(`search?${queryParam}apikey=${API_KEY}`)

    return response.data;
}

async function getHeadlines(country, language, category) {
    const queryParam = buildQueryParam(country, language, category, null);
    const response = await axios.get(`top-headlines?${queryParam}apikey=${API_KEY}`);
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
