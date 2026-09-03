document.addEventListener("DOMContentLoaded", function () {
    const flagButton = document.querySelector(".header__country");
    const flagMenu = document.querySelector(".header__flag-menu");
    const closeButton = document.querySelector(".button__close");

    if (!flagButton || !flagMenu) {
        console.log("Елементи не знайдені!");
        return;
    }

    // Открытие/закрытие меню
    flagButton.addEventListener("click", function (event) {
        event.preventDefault(); // чтобы ссылка "#" не прыгала вверх
        event.stopPropagation();

        flagMenu.classList.toggle("active");
        flagButton.classList.toggle("active");

        console.log("Меню стан: ", flagMenu.classList.contains("active"));
    });

    // Закрытие по кнопке
    if (closeButton) {
        closeButton.addEventListener("click", function (event) {
            event.stopPropagation();

            flagMenu.classList.remove("active");
            flagButton.classList.remove("active");
        });
    }

    // Закрытие при клике вне меню
    document.addEventListener("click", function (event) {
        if (!flagButton.contains(event.target) && !flagMenu.contains(event.target)) {
            flagMenu.classList.remove("active");
            flagButton.classList.remove("active");

            console.log("Меню закрито");
        }
    });
});