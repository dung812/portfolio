/*==================== RENDER LIST PROJECT ====================*/
const mainProjectElement = document.querySelector("#main-project-list")
const cloneProjectElement = document.querySelector("#clone-project-list")
const miniProjectElement = document.querySelector("#mini-project-list")
const apiProjectElement = document.querySelector("#api-project-list")


function renderProjectItem (data) {
	const templateProjectItem = `
	<div class="col l-4 m-6 c-12 card">
		<div class="project--item">
			<div class="project-image">
				<img src="../assets/img/project/${data.image}" alt="">
			</div>
			<div class="card-content project-item--content">
				<h3 class="project-title center">${data.title}</h3>
				<p class="project-desc">${data.description}<br/>Used: ${data.techs}</p>
			<div class="project-button">
				<a href="${data.linkView}" target="_blank"><i class="uil uil-eye"></i> View</a>
				<a href="${data.linkSourceCode}" target="_blank">Code <i class="uil uil-arrow"></i></a>
			</div>
			</div>
		</div>
	</div>`;
	return templateProjectItem;
}


mainProjects.forEach(item => {
	const projectItem = renderProjectItem(item);
	mainProjectElement.insertAdjacentHTML("beforeend", projectItem);
})
cloneProjects.forEach(item => {
	const projectItem = renderProjectItem(item);
	cloneProjectElement.insertAdjacentHTML("beforeend", projectItem);
})
miniProjects.forEach(item => {
	const projectItem = renderProjectItem(item);
	miniProjectElement.insertAdjacentHTML("beforeend", projectItem);
})
apiProjects.forEach(item => {
	const projectItem = renderProjectItem(item);
	apiProjectElement.insertAdjacentHTML("beforeend", projectItem);
})



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
