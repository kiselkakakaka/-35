// Получаем элементы модальных окон
var modal = document.getElementById("modal");
var feedbackModal = document.getElementById("feedbackModal");
var authModal = document.getElementById("authModal");
var loginModal = document.getElementById("loginModal");

// Получаем элементы для закрытия модальных окон
var spanModal = document.querySelector("#modal .close");
var spanFeedback = document.querySelector("#feedbackModal .close");
var spanAuth = document.querySelector("#authModal .close");
var spanLogin = document.querySelector("#loginModal .close");

// Функция для показа первого модального окна
function showModal() {
    modal.style.display = "block";
}

// Закрываем модальные окна при клике на <span> (x)
spanFeedback.onclick = function () {
    feedbackModal.style.display = "none";
}

spanAuth.onclick = function () {
    authModal.style.display = "none";
}

spanLogin.onclick = function () {
    loginModal.style.display = "none";
}

spanModal.onclick = function () {
    modal.style.display = "none";
}

// Закрываем модальные окна при клике вне них
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == feedbackModal) {
        feedbackModal.style.display = "none";
    }
    if (event.target == authModal) {
        authModal.style.display = "none";
    }
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

// Показываем первое модальное окно через 10 секунд после загрузки страницы
setTimeout(showModal, 10000);

// Функция для открытия второго модального окна
function openFeedbackModal() {
    feedbackModal.style.display = "block";
    modal.style.display = "none";
}

// Функции для открытия модальных окон авторизации и регистрации
function openAuthModal() {
    authModal.style.display = "block";
}

function openLoginModal() {
    loginModal.style.display = "block";
    authModal.style.display = "none";
}

function openRegisterModal() {
    authModal.style.display = "block";
    loginModal.style.display = "none";
}

// Функция для обработки авторизации через Google
function openGoogleAuth() {
    // Здесь можно добавить логику для авторизации через Google
    alert("Авторизация через Google");
}

document.addEventListener("DOMContentLoaded", function () {
    const btForms = document.querySelectorAll('.open_modal');
    const modalReturn = document.getElementById('modal_return');
    const closeBtn = document.querySelector('.close');

    btForms.forEach(function (btForm) {
        btForm.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            modalReturn.style.display = 'block'; // Show the modal

            // Automatically close the modal after 3 seconds
            setTimeout(function () {
                modalReturn.style.display = 'none';
            }, 3000);
        });
    });

    closeBtn.addEventListener('click', function () {
        modalReturn.style.display = 'none'; // Hide the modal
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalReturn) {
            modalReturn.style.display = 'none'; // Hide the modal if clicking outside of it
        }
    });
});





