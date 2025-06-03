import { languages, countries, categories } from './localeConstants.js'
import { DateTime } from 'luxon';

const countriesSect = document.getElementById('countries');
const languageSect = document.getElementById('languages');
const categorySect = document.getElementById('category');

(() => {
    buildDropdownMenus();
})()

export function buildArticle(data) {
    const articleHTML = `
        <hr>
        <a href="${data.url}" target="_blank" class="article-link">
            <img src="${data.image}" alt="${data.title}" class="article-image">
            <div class="article-meta">
                <span>Source: ${data.source.name}</span>
                <span>${DateTime.fromISO(data.publishedAt).toRelative()}</span>
            </div>
            <h3>${data.title}</h3>
            <p class="article-content">${removeChars(data.content)}</p>
        </a>
    `;

    const template = document.createElement('template');
    template.innerHTML = articleHTML.trim();
    return template.content;
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

    if (start === 0 && end === articleLength) {
        next.classList.add('disabled')
        prev.classList.add('disabled');
        return;
    }
    if (start > 0 && end < articleLength) {
        next.classList.remove('disabled');
        prev.classList.remove('disabled');
        return;
    }
    if (start === 0) {
        prev.classList.add('disabled');
        next.classList.remove('disabled');
    }
    if (end === articleLength) {
        next.classList.add('disabled')
        prev.classList.remove('disabled');
    }
}

export function buildDropdownMenus() {
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

export function buildPageItem(text) {
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
