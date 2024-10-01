const users = [
    {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123"
    },

    {
    id: 2,
    name: "Kate Red",
    email: "kate.red@example.com",
    password: "pass12345678"
    },

    {
    id: 3,
    name: "test",
    email: "t@t.com",
    password: "t"
    },

];

document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');
    
    if (isLoggedIn && username) {
        updateUIForLoggedInUser(username);
    } else {
        updateUIForLoggedOutUser();
    }

    // Обработка формы входа
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const email = document.getElementById('exampleInputEmail1').value;
            const password = document.getElementById('exampleInputPassword1').value;

            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                localStorage.setItem('username', user.name);
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'list-of-posts.html';
            } else {
                alert('Неверный email или пароль');
            }
        });
    }

    // Обработчик для кнопки выхода
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }
});

function updateUIForLoggedInUser(username) {
    const dropdown = document.getElementById('userDropdown');
    if (!dropdown) {
        console.error('Dropdown element not found');
        return;
    }

    // Очищаем весь dropdown
    dropdown.innerHTML = '';

    // Создаем приветствие
    const greeting = document.createElement('li');
    const greetingLink = document.createElement('a');
    greetingLink.className = 'dropdown-item';
    greetingLink.textContent = `Привет, ${username}!`;
    greeting.appendChild(greetingLink);
    dropdown.appendChild(greeting);

    // Создаем разделитель
    const newDivider = document.createElement('li');
    const hr = document.createElement('hr');
    hr.className = 'dropdown-divider';
    newDivider.appendChild(hr);
    dropdown.appendChild(newDivider);

    // Создаем кнопку выхода
    const logoutItem = document.createElement('li');
    const logoutLink = document.createElement('a');
    logoutLink.className = 'dropdown-item';
    logoutLink.href = '#';
    logoutLink.textContent = 'Выйти';
    logoutItem.appendChild(logoutLink);
    dropdown.appendChild(logoutItem);

    // Добавляем обработчик события для выхода
    logoutLink.addEventListener('click', logout);

    console.log('UI updated for logged in user:', username);
}

function updateUIForLoggedOutUser() {
    const dropdown = document.getElementById('userDropdown');
    if (!dropdown) {
        console.error('Dropdown element not found');
        return;
    }

    // Очищаем весь dropdown
    dropdown.innerHTML = '';

    // Добавляем ссылки для входа и регистрации
    const loginItem = document.createElement('li');
    const loginLink = document.createElement('a');
    loginLink.className = 'dropdown-item';
    loginLink.href = 'login.html';
    loginLink.textContent = 'Войти';
    loginItem.appendChild(loginLink);
    dropdown.appendChild(loginItem);

    const registerItem = document.createElement('li');
    const registerLink = document.createElement('a');
    registerLink.className = 'dropdown-item';
    registerLink.href = 'register.html';
    registerLink.textContent = 'Зарегистрироваться';
    registerItem.appendChild(registerLink);
    dropdown.appendChild(registerItem);
}

function logout(e) {
    if (e) e.preventDefault();
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn');
    updateUIForLoggedOutUser();
    window.location.href = 'index.html';
}

