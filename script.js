const lists = document.querySelector(".lists");
const menuBtn_open = document.querySelector("#menu-btn_open");
const menuBtn_close = document.querySelector("#menu-btn_close");

menuBtn_open.onclick = () => {
    lists.classList.toggle("active");
    menuBtn_open.classList.toggle("close");
    menuBtn_close.classList.toggle("open");
};

menuBtn_close.onclick = () => {
    lists.classList.toggle("active");
    menuBtn_open.classList.toggle("close");
    menuBtn_close.classList.toggle("open");
};