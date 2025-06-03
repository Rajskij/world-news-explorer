import { getData } from './testData.js';
import { buildArticle, setPaginationState, buildSections } from './util.js';
import { search } from './newsApiService.js'

const input = document.getElementById('input-form');
const news = document.getElementById('news');
const pagination = document.getElementById('pagination');
let articles = [];
let articleNum = 3;
let numberOfPages = 0;
let currentPage = 0;

input.addEventListener('submit', async event => {
    event.preventDefault();
    const data = await getData();
    const country = event.target.countries.value;
    const language = event.target.languages.value;
    const category = event.target.category.value;
    const query = event.target.search.value;
    console.log(event.target.countries.value)
    console.log(event.target.languages.value)
    console.log(event.target.search.value)
    console.log(category);

    // const response = await search(country, language, category, query)
    const response = await getData();

    console.log(response);
    articles = response.articles;
    console.log(articles);

    buildPagination(articles.length + 1);
    renderArticles(articles);
});

pagination.addEventListener('click', event => {
    if (!event.target.matches('button')) {
        return;
    }
    changePage(event.target.textContent);
    renderArticles(articles);
});

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

    // pagination.insertBefore(fragment, pagination.childNodes[2]);
    pagination.innerHTML = '';
    pagination.appendChild(fragment);
    pagination.classList.remove('hide');
}

function buildPageItem(text) {
    const pageItem = document.createElement('li');
    const pageButton = document.createElement('button');
    pageItem.classList.add('page-item');
    pageButton.classList.add('page-link');
    pageButton.innerText = text;
    if (text === '«') pageButton.id = 'page-start';
    if (text === '»') pageButton.id = 'page-end';    
    pageItem.appendChild(pageButton);

    return pageItem;
}
