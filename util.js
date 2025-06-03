import { languages, countries, categories } from './localeConstants.js'

const countriesSect = document.getElementById('countries');
const languageSect = document.getElementById('languages');
const categorySect = document.getElementById('category');

(() => {
    buildSections();
})()

export function buildArticle(data) {
    const fragment = document.createDocumentFragment();
    const hr = document.createElement('hr');
    const title = document.createElement('h3');
    const date = document.createElement('p');
    const img = document.createElement('img');
    const description = document.createElement('h5');
    const content = document.createElement('p');

    title.textContent = data.title;
    date.textContent = data.publishedAt.substring(0, 10);
    img.src = data.image;
    img.style.height = '20vh';
    description.textContent = data.description;
    content.textContent = removeChars(data.content);

    fragment.append(hr, title, date, img, description, content);

    return fragment;
}

function removeChars(content) {
    const end = content.indexOf('[');

    if (end !== -1) {
        content = content.substring(0, end);
    }

    return content;
}

export function setPaginationState(start, end, articleLength) {
    const next = document.getElementById('page-end');
    const prev = document.getElementById('page-start');

    if (start === 0) {
        prev.classList.add('disabled');
        next.classList.remove('disabled');
    }
    if (end === articleLength) {

        next.classList.add('disabled')
        prev.classList.remove('disabled');
    }
    if (start > 0 && end < articleLength) {
        next.classList.remove('disabled');
        prev.classList.remove('disabled');
    }
}

export function buildSections() {
    const langFrag = document.createDocumentFragment();
    const countryFrag = document.createDocumentFragment();
    const categoryFrag = document.createDocumentFragment();

    Object.entries(languages).forEach(language => {
        const option = document.createElement('option');
        option.textContent = language[0];
        option.value = language[1];
        langFrag.appendChild(option);
    });

    Object.entries(countries).forEach(country => {
        const option = document.createElement('option');
        option.textContent = country[0];
        option.value = country[1];
        countryFrag.appendChild(option);
    })

    categories.forEach(category => {
        const option = document.createElement('option');
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        option.value = category;
        categoryFrag.appendChild(option);
    })

    languageSect.appendChild(langFrag);
    countriesSect.appendChild(countryFrag);
    categorySect.appendChild(categoryFrag);
}
