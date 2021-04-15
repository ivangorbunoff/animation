'use strict'

const headers = document.querySelectorAll("[data-name='spoiler-title']");
const height = document.querySelectorAll(".list-content");
console.log(height[0].scrollHeight);
console.log(height[1].scrollHeight);
console.log(height[2].scrollHeight);

headers.forEach(function (item) {
    item.addEventListener("click", () => item.nextElementSibling.classList.toggle("spoiler-body"))
});


function populate() {
    // нижняя граница документа
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

    // если пользователь прокрутил достаточно далеко (< 100px до конца)
    if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
        // добавим больше данных
        document.body.insertAdjacentHTML("beforeend", `<p>Дата: ${new Date()}</p>`);
    }
}

window.addEventListener('scroll', populate);


