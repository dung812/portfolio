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

/*==================== TAB SKILLS ====================*/
const tabsElement = document.querySelectorAll('.tab-item');
const panesElement = document.querySelectorAll('.tab-pane');
const line = document.querySelector('.line');

if(line) {
    line.style.left = tabsElement[0].offsetLeft +'px';
    line.style.width = tabsElement[0].offsetWidth +'px';
}

tabsElement.forEach(function(element,index){
    var pane = panesElement[index];
    element.onclick = function(){
        document.querySelector('.tab-item.active').classList.remove('active');
        document.querySelector('.tab-pane.active').classList.remove('active');

        line.style.left = element.offsetLeft +'px';
        line.style.width = element.offsetWidth +'px';

        element.classList.add('active');
        pane.classList.add('active')
    }
});


/*==================== TYPE WRITER HOME SECTION ====================*/
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 300;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
}

  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const myJob = document.querySelector('.my-job');
    const words = JSON.parse(myJob.getAttribute('data-words'));
    const wait = myJob.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(myJob, words, wait);
}

/*==================== COUNTER UP NUMBER ABOUT SECTION ====================*/
const experience = document.querySelector(".experience");
const project = document.querySelector(".project");
const company = document.querySelector(".company");
function counterUp(el, to) {
	let speed = 200
	let from = 0
	let step = to / speed
	const counter = setInterval(function () {
		from += step
		if (from > to) {
			clearInterval(counter)
			el.innerText = to
		} else {
			el.innerText = Math.ceil(from)
		}
	}, 1)
}

function activeNumberCounter() {
    counterUp(experience, 30);
    counterUp(project, 50);
    counterUp(company, 25);
}

document.addEventListener("scroll",function(){
    const aboutsection = document.querySelector(".about");
    setTimeout(function(){
        if (pageYOffset > aboutsection.offsetTop - (aboutsection.clientHeight / 2)) {
            activeNumberCounter();
        }
    },1200);
}, {once:true});


/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: false,
    keyboard: true,
});

/*==================== LIGHT BOX IMAGE WORK ====================*/ 
const images = document.querySelectorAll(".portfolio__img");
images.forEach((item) => item.addEventListener("click", handleZoomImage));
function handleZoomImage(event) {
    const image = event.target.getAttribute("src");
    const template = 
    `    <div class="lightbox">
            <div class="lightbox-content">
                <img src= ${image} 
                    alt="" 
                    class="lightbox-image"
                />

            </div>
        </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
}

document.addEventListener("click", function (e) {
    const lightImage = document.querySelector(".lightbox-image");
    if (!lightImage) return;
    if (e.target.matches(".lightbox")) {
        e.target.parentNode.removeChild(e.target);
    }
});


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    // reset: true
});
/* SCROLL HOME */
sr.reveal('.header-name',{}); 
sr.reveal('.title-home',{interval: 400}); 
sr.reveal('.subtitle-home',{interval: 400}); 
sr.reveal('.button-more',{ interval: 200}); 
/* SCROLL ABOUT */
sr.reveal('.about__image',{}); 
sr.reveal('.about__subtitle',{interval: 400}); 
sr.reveal('.about__desc',{interval: 400}); 
sr.reveal('.about__number',{interval: 400}); 
sr.reveal('.about__button',{interval: 400}); 
/* SCROLL SKILLS */
sr.reveal('.skills-slogan__box',{interval: 100}); 
sr.reveal('.skills-slogan__subtitle',{interval: 200}); 
sr.reveal('.tabs',{delay: 400});
sr.reveal('.tab-pane.active',{delay: 400});
/* SCROLL WORK */
sr.reveal('.portfolio',{interval: 100});
sr.reveal('.work-more',{interval: 100});
// /* SCROLL CONTACT */
sr.reveal('.form-group',{interval: 100});
sr.reveal('.contact-info',{interval: 400});


/*==================== UX MOBILE ====================*/
// Check device is mobile
const checkMoblie = window.mobileCheck = function () {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

// Hàm giảm thực thi scroll
function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
        let context = this,
        args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

if (checkMoblie()) {
    window.addEventListener("scroll",debounceFn(function(e){
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
                if (current === "about") {
                    activeNumberCounter();
                }
            }
        })
    },200));
}