import { getData } from './util/testData.js';
import { buildArticle, setPaginationState, buildPageItem } from './util/util.js';
import { search } from './service/newsApiService.js'

const input = document.getElementById('input-form');
const news = document.getElementById('news');
const pagination = document.getElementById('pagination');
let articles = [];
let articleNum = 3;
let numberOfPages = 0;
let currentPage = 0;

input.addEventListener('submit', async event => {
    event.preventDefault();
    const country = event.target.countries.value;
    const language = event.target.languages.value;
    const category = event.target.category.value;
    const query = event.target.search.value;

    // For testing purpose only
    // const response = await getData();
    const response = await search(country, language, category, query);

    console.log(response);
    articles = response.articles;
    setTimeout(() => buildPagination(articles.length + 1), 1000) ;
    renderArticles(articles);
});

pagination.addEventListener('click', event => {
    if (!event.target.matches('button')) {
        return;
    }
    changePage(event.target.textContent);
    renderArticles(articles);
});

function renderArticles(articles) {
    let start = currentPage * articleNum;
    let end = Math.min(start + articleNum, articles.length);

    setPaginationState(start, end, articles.length);

    news.innerHTML = '';
    for (let i = start; i < end; i++) {
        const article = articles[i];
        news.appendChild(buildArticle(article));
    }
}

function buildPagination(elements) {
    const fragment = document.createDocumentFragment();
    const navButton = ['«', '»'];

    numberOfPages = Math.floor(elements / articleNum);
    if (elements % articleNum !== 0) {
        numberOfPages++;
    }

    navButton.forEach(val => {
        const pageItem = buildPageItem(val);
        fragment.appendChild(pageItem);
    });

    for (let i = 0; i < numberOfPages; i++) {
        const pageItem = buildPageItem(i + 1);
        fragment.insertBefore(pageItem, fragment.lastChild);
    }

    pagination.innerHTML = '';
    pagination.appendChild(fragment);
    pagination.classList.remove('hide');
}

function changePage(nav) {
    if (nav === '»') {
        currentPage++;
    }
    if (nav === '«') {
        currentPage--;
    }

    const page = Number(nav);
    if (page) {
        currentPage = page - 1;
    }
}
