const posts = [
    {
        id: 1,
        title: "Example Post Title 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "2022-09-12",
        authorId: 1
    },
    {
        id: 2,
        title: "Example Post Title 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "2023-09-12",
        authorId: 2
    },
    {
        id: 3,
        title: "Example Post Title 3",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "2024-09-12",
        authorId: 3
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('id');

    if (newsId) {
        fetchNewsDetails(newsId);
    } else {
        document.getElementById('news-content').innerHTML = '<p>Новость не найдена</p>';
    }
});

function fetchNewsDetails(newsId) {
    // Сюда можно добавить запрос к серверу. 
    const newsItem = posts.find(post => post.id === parseInt(newsId));

    if (newsItem) {
        displayNewsDetails(newsItem);
    } else {
        document.getElementById('news-content').innerHTML = '<p>Новость не найдена</p>';
    }
}

function displayNewsDetails(newsItem) {
    const newsContent = document.getElementById('news-content');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    let registerButtonHtml = '';
    if (!isLoggedIn) {
        registerButtonHtml = `
            <a href="index.html">
                <button class="btn btn-primary id="register-button">Зарегистрироваться</button>
            </a>
        `;
    }

    newsContent.innerHTML = `
        <div class="post-div">
            <h1>${newsItem.title}</h1>
            <p class="main-content">${newsItem.content}</p>
            <p><strong>ID автора:</strong> ${newsItem.authorId || 'Неизвестен'}</p>
            <p><strong>Дата публикации:</strong> ${newsItem.date || 'Не указана'}</p>
            ${registerButtonHtml}
        </div>
    `;
}

