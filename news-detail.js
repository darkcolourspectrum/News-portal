const posts = [
    {
        id: 1,
        title: "Example Post Title 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "2024-09-12",
        authorId: 1
    },
    {
        id: 2,
        title: "Example Post Title 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "2024-09-12",
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
    // Здесь вы должны загрузить данные о новости по id
    // Это может быть запрос к серверу или поиск в локальном хранилище
    // Для примера используем фиктивные данные
    const newsItem = posts.find(post => post.id === parseInt(newsId));

    if (newsItem) {
        displayNewsDetails(newsItem);
    } else {
        document.getElementById('news-content').innerHTML = '<p>Новость не найдена</p>';
    }
}

function displayNewsDetails(newsItem) {
    const newsContent = document.getElementById('news-content');
    newsContent.innerHTML = `
        <h1>${newsItem.title}</h1>
        <p>${newsItem.content}</p>
        <p><strong>Автор:</strong> ${newsItem.author || 'Неизвестен'}</p>
        <p><strong>Дата публикации:</strong> ${newsItem.date || 'Не указана'}</p>
    `
    ;
}
