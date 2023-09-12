// Tabs

const tabsBtns = document.querySelectorAll(".tabs-nav button");
// console.log(tabsBtns);
const tabsItems = document.querySelectorAll(".tabs-item");
// console.log(tabsItems);

// Функция скрывает табы и убирает active у кнопок

function hideTabs() {
  tabsItems.forEach((tab) => tab.classList.add("hide"));
  tabsBtns.forEach((btn) => btn.classList.remove("active"));
}

/* Функция показывает переданный номер таба
и делает соответствующую ему кнопку активной */

function showTab(index) {
tabsItems[index].classList.remove("hide");
tabsBtns[index].classList.add("active");
}


hideTabs();
showTab(2);

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
hideTabs();
showTab(index);
}));

// Якори
const anchors = document.querySelectorAll(".header-nav-link");
// console.log(anchors);

anchors.forEach(anch => {
    anch.addEventListener("click", function(event) {
        event.preventDefault();

        const id = anch.getAttribute("href");

// console.log(id);

const element = document.querySelector(id);

// console.log(element.offsetTop);

window.scroll({
top: element.offsetTop - 95,
behavior: 'smooth'
});
});
});