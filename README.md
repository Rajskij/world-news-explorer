# World News Explorer
Live Demo: [World News Explorer](https://world-news-explorer.netlify.app/)

## Overview
A lightweight web application that fetches and displays news articles from the GNews API. Users can search for news by country, language, category, or keywords, with pagination support for browsing results.

## Features
- Search news by keywords, country, language, or category
- View top headlines when no search query is provided
- Paginated results (3 articles per page)
- Responsive design

## API Usage
This project uses the GNews API (v4) with the following endpoints:
- `top-headlines` - For default news display
- `search` - For keyword searches

## Technical Details
- Built with vanilla JavaScript
- Uses Axios for API requests
- Implements custom pagination logic
- Modular code structure with separate service and utility files

## Usage
1. Select filters (country, language, category) from dropdowns
2. Enter optional search terms
3. Click "Search" to fetch news
4. Use pagination controls to navigate results

## Note
The current implementation includes a test mode using mock data (`getData()`). To use the real API
