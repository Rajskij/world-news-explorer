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

    search(country, language, category, query)

    console.log(data);
    articles = data.articles;

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
    numberOfPages = elements / articleNum;
    if (elements % articleNum !== 0) {
        numberOfPages++;
    }

    for (let i = 0; i < numberOfPages; i++) {
        const pageItem = document.createElement('li');
        const pageLink = document.createElement('button');
        pageItem.classList.add('page-item');
        pageLink.classList.add('page-link');
        pageLink.textContent = i + 1;

        pageItem.appendChild(pageLink);
        fragment.appendChild(pageItem);
    }

    pagination.insertBefore(fragment, pagination.childNodes[2]);
    pagination.classList.remove('hide');
}
// <nav>
//     <ul class="pagination">
//         <li class="page-item">
//             <a class="page-link disabled" href="#" aria-label="Previous">
//                 <span aria-hidden="true">&laquo;</span>
//             </a>
//         </li>
//         <li class="page-item"><a class="page-link" href="#">1</a></li>
//         <li class="page-item"><a class="page-link" href="#">2</a></li>
//         <li class="page-item"><a class="page-link" href="#">3</a></li>
//         <li class="page-item">
//             <a class="page-link" href="#" aria-label="Next">
//                 <span aria-hidden="true">&raquo;</span>
//             </a>
//         </li>
//     </ul>
// </nav>
