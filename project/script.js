/*==================== BUTTON MENU NAVIGATION RESPONVE ====================*/ 
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector(".navigation__menu");
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    menu.classList.toggle("is-show");
    overlay.classList.toggle("is-show");
});

/*==================== ACTIVE NAVIGATION ITEM WHEN SCROLL ====================*/
const listNavItem = document.querySelectorAll(".nav-link");
const buttonMore = document.querySelector(".button-more");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", function() {

    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    listNavItem.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
});

/*==================== CLOSE NAVIGATION MENU WHEN CLICK ITEM ====================*/
[...listNavItem].forEach(item => item.addEventListener("click",function(e){
    menu.classList.remove("is-show");
    menuBtn.classList.remove('open');
    overlay.classList.remove("is-show");
}));

/*==================== CLOSE NAVIGATION MENU WHEN CLICK OUTSIDE NAVIGATION MENU ====================*/
document.addEventListener("click",function(e){
    if(!menu.contains(e.target) && !e.target.classList.contains("menu-btn") && !e.target.classList.contains("menu-btn__burger")){ // 
        menu.classList.remove("is-show");
        menuBtn.classList.remove('open');
        overlay.classList.remove("is-show");
    }
});
