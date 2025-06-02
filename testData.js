const jsonString = `{
    "totalArticles": 11022,
    "articles": [
        {
            "title": "Market Basket boardroom battle is a real-life 'Succession' saga",
            "description": "Arthur T. Demoulas's ouster, like the hit HBO boardroom drama, is an example of the kind of ugly maneuvering that can happen when the relationships underpinning a family business go sour.",
            "content": "When the supermarket placed longtime CEO Arthur T. Demoulas on paid leave Wednesday, it reopened a seemingly never-ending power struggle with all of the trappings of a scripted drama. Demoulas said he, along with his two children, had been ousted fro... [5611 chars]",
            "url": "https://www.bostonglobe.com/2025/06/02/business/market-basket-board-succession-arthur-demoulas-ceo/",
            "image": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/v2/4AL6XPH2KP52UHMUAUH64GFEV4.jpg?auth=a0efdf971001de6aa7b8ae1bf285a53164a0f55d534539d344961b9efe1a5681&width=1440",
            "publishedAt": "2025-06-02T04:00:00Z",
            "source": {
                "name": "The Boston Globe",
                "url": "https://www.bostonglobe.com"
            }
        },
        {
            "title": "As good as flip phones get",
            "description": "The Motorola Razr Ultra is easily the best example of a flip phone foldable, but a high price makes it a niche within a niche.",
            "content": "One of the biggest problems around flip phones has long been the compromise that comes in its form factor. Lesser cameras, smaller batteries, worse performance, and so many more are par for the course for these devices. But with the new Motorola Razr... [13340 chars]",
            "url": "https://9to5google.com/2025/05/30/motorola-razr-ultra-review/",
            "image": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2025/05/motorola-razr-ultra-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2025-05-30T18:00:00Z",
            "source": {
                "name": "9to5Google",
                "url": "https://9to5google.com"
            }
        },
        {
            "title": "Moonwalk movie review: This tribute to Michael Jackson is yet another example of why Malayalam cinema soars while Bollywood struggles",
            "description": "Moonwalk movie review: Vinod AK's dance drama serves as a reminder to prioritise theme, concept, story and script over the male lead's (almost nonexistent) star value.",
            "content": "Moonwalk movie review: Just imagine how cool it would have been if Varun Dhawan's character had appeared on screen carrying a ripe, juicy jackfruit on his head, heading home after burning up the dance floor in the climax of director Remo D'Souza's AB... [8201 chars]",
            "url": "https://indianexpress.com/article/entertainment/movie-review/moonwalk-review-the-film-is-yet-another-example-of-why-malayalam-cinema-soars-while-bollywood-struggles-10037674/",
            "image": "https://images.indianexpress.com/2025/05/Moonwalk-movie-review-300052025.jpg",
            "publishedAt": "2025-05-30T11:40:08Z",
            "source": {
                "name": "The Indian Express",
                "url": "https://indianexpress.com"
            }
        },
        {
            "title": "France banning outdoor smoking is a stunning example of how politicans fail to understand real people",
            "description": "Only this morning, Bernie Sanders, the man I say was robbed of the US presidency (by H.Clinton), was on the radio – BBC4 – talking about what matters in politics. And the secret? It is those arcane elements: being paid enough to feed a family, job security, having a job, decent healthcare.",
            "content": "Remember the time when we were only allowed to venture outdoors for an hour every day and if we did more, the police came and stopped us? This was in defiance of the plain fact that we were safer outdoors than indoors and it was difficult to catch Co... [300 chars]",
            "url": "https://www.standard.co.uk/comment/france-outdoor-smoking-ban-politics-b1230452.html",
            "image": "https://static.standard.co.uk/homesandproperty/s3fs-public/thumbnails/image/2019/08/19/16/AbroadParisshutterstock-1163844214.jpg?width=1200&auto=webp&quality=75",
            "publishedAt": "2025-05-30T11:05:16Z",
            "source": {
                "name": "Evening Standard",
                "url": "https://www.standard.co.uk"
            }
        },
        {
            "title": "Taste test: how does imported Dubai chocolate compare to Perth's OG bar?",
            "description": "Dubai chocolate is popping up all over the Perth with cookie shops and ice cream parlours offering their own takes on the viral foodie trend. We put one example to the taste test.",
            "content": "Dubai chocolate is suddenly popping up all over the Perth with cookie shops and ice cream parlours offering their own takes on the viral foodie trend.\nEven supermarkets have started offering imported bars for upwards of $15.\nCamera Icon FEA Milla Mun... [1805 chars]",
            "url": "https://www.perthnow.com.au/lifestyle/food/taste-test-how-does-imported-dubai-chocolate-compare-to-perths-og-bar-c-18865135",
            "image": "https://images.perthnow.com.au/publication/C-18865135/8e5984bdcdd398dbfd0f10eecf7305eac97570a2-16x9-x0y209w4000h2250.jpg?imwidth=1200",
            "publishedAt": "2025-05-30T02:18:20Z",
            "source": {
                "name": "PerthNow",
                "url": "https://www.perthnow.com.au"
            }
        }
    ]
}`;

const cleanJsonString = jsonString.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
const response = JSON.parse(cleanJsonString);

export function getData() {
    return new Promise((resolve, reject) => {
        return resolve(response);
    })
}
