
//navbar responsiveness
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector(".highlight");
    const homeMenu = document.querySelector("#home-page");
    const aboutMenu = document.querySelector("#about-page");
    const skillsMenu = document.querySelector("#skills-page");
    const projectMenu = document.querySelector("#projects-page");
    const contactMenu = document.querySelector("#contact-page");
    let scrollPos = window.scrollY;
    // console.log(scrollPos);

    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 500) {
        homeMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        skillsMenu.classList.remove("highlight");
        projectMenu.classList.remove("highlight");
        contactMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1200) {
        homeMenu.classList.remove("highlight");
        aboutMenu.classList.add("highlight");
        skillsMenu.classList.remove("highlight");
        projectMenu.classList.remove("highlight");
        contactMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2000) {
        homeMenu.classList.remove("highlight");
        aboutMenu.classList.remove("highlight");
        skillsMenu.classList.add("highlight");
        projectMenu.classList.remove("highlight");
        contactMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3000) {
        homeMenu.classList.remove("highlight");
        aboutMenu.classList.remove("highlight");
        skillsMenu.classList.remove("highlight");
        projectMenu.classList.add("highlight");
        contactMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3900) {
        homeMenu.classList.remove("highlight");
        aboutMenu.classList.remove("highlight");
        skillsMenu.classList.remove("highlight");
        projectMenu.classList.remove("highlight");
        contactMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPos < 5000) {
        homeMenu.classList.remove("highlight");
        aboutMenu.classList.remove("highlight");
        skillsMenu.classList.remove("highlight");
        projectMenu.classList.remove("highlight");
        contactMenu.classList.add("highlight");
        return;
    }


    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove("highlight");
    }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active");
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle("is-active");
        menuLinks.classList.remove("active");
    }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);




//TypeWriter Effect
// SELECT ELEMENTS FROM OUR DOM
document.addEventListener("DOMContentLoaded", init);
// INIT FUNCTION
function init() {
    // GRAP ALL ELEMENT & ATTRIBUTE
    const txtElement = document.querySelector(".type");
    // GET THE ATTRIBUTES OF TXT ELEMENT AND PARSE ITS DATA & REMEMBER JSON DATA SHOULD BE ON "" NOT ''
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    // console.log(txtElement);
    // console.log(words);
    // console.log(wait);
    // INITILIZE TYPE WRITER & WE MAKE IT BY NEW
    new typeWriter(txtElement, words, wait);
}
// TYPE WRITER FUNCTION
const typeWriter = function (txtElement, words, wait = 3000) {
    // TEXT ELEMENT THAT PASSED IN
    this.txtElement = txtElement;
    // WORDS THAT PASSEF IN
    this.words = words;
    // WAIT TIME THAT PASSEF IN
    this.wait = parseInt(wait, 10);
    // TXT YOU WILL SEE AT RELOAD
    this.txt = "";
    // ARRAY OF WORDS
    this.indexOfTheWord = 0;
    // THE MAIN METHOD THAT WILL BE WORK WITH TYPE WRITER
    this.type();
    // REPRESENT THE STATE IF IT DELETING OR NOT
    this.isDeleteing = false;
};
// CREATE OUR TYPE METHOD
typeWriter.prototype.type = function () {
    // GET THE CURRNET INDEX OF THE WORD
    const currnet = this.indexOfTheWord % this.words.length;
    // console.log(currnet);
    // GET THE FULL TEXT OF A CURRNET WIRD
    const fullTxt = this.words[currnet];
    // console.log(fullTxt);
    // CHECK IF DELETING
    if (this.isDeleteing) {
        // REMOVE CHAR
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // ADD CHAR
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    // INSERT TXT INTO TXTELEMENT
    this.txtElement.innerHTML = `<span class="txt"> ${this.txt} </span>`;
    // LETS MAKE THE TYPE SPEED
    let typeSpeed = 100;
    if (this.isDeleteing) {
        typeSpeed /= 2;
    }
    // CHECK IF THE WORD IS COMPELETE GO TO THE OTHER WORD
    if (!this.isDeleteing && this.txt === fullTxt) {
        // MAKE THE COMPELETE WORD PAUSE
        typeSpeed = this.wait;
        // SET ISDELETING VARIABLE TO TRUE
        this.isDeleteing = true;
        // console.log("Pasue");
    }
    if (this.isDeleteing && this.txt === "") {
        this.isDeleteing = false;
        // MOVE TO THE NEXT WORD
        this.indexOfTheWord++;
        // PAUSE BEFORE START TYPING
        typeSpeed = 400;
        // console.log("Delete");
    }
    setTimeout(() => this.type(), typeSpeed);
};

//scroll back to top on click
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


