let homeSection = document.getElementById("home");
let mainAboutSection = document.getElementById("aboutSection");
let contactSection = document.getElementById("contactUs");
let aboutSection = document.querySelector(".aboutContainer");
let textContainer = document.querySelector(".textContainer");
let imageContainer = document.querySelector("#aboutSection .imageContainer");
let aboutSkills = document.querySelector(".aboutSkills");
let aboutSkillsTextContainer = aboutSkills.querySelector(".aboutSkills .aboutSkillsTextContainer");
let skillNames = aboutSkills.querySelectorAll(".skill");
let certifiactesContainer = document.querySelector(".aboutCertifications");
let certificates = certifiactesContainer.querySelectorAll(".certificates");
let certificateImg = document.querySelectorAll(".certificates img");
let contactFrom = document.querySelector("form");
let fName = document.getElementById("name");
let eMail = document.getElementById("email");
let message = document.getElementById("message");
let submit = document.getElementById("submit");
let goToTop = document.querySelector(".goToTop");
window.onscroll = function () {
    if (document.documentElement.scrollTop >= 50) {
        goToTop.classList.add("slideRight", "fadeIn");
    }
    else {
        goToTop.classList.remove("slideRight", "fadeIn");
    }

    if (certifiactesContainer.style.height > 800 + 'px') {
        if (document.documentElement.scrollTop >= 1850) {
            certifiactesContainer.classList.add("fullWidth");
            certifiactesContainer.style.padding = "12px 23px";
            for (i = 0; i < certificates.length; i++) {
                certificates[i].classList.add("width90");
                certificates[i].style.animationDelay = 1 + (i / 3) + 's';
            }
            for (i = 0; i < certificates.length; i++) {
                certificateImg[i].classList.add("fadeIn");
                certificateImg[i].style.animationDelay = 1 + (i / 3) + 's';
            }
        }

    }

    if (document.documentElement.scrollTop >= 450) {
        aboutSection.classList.add("fullWidth");
        aboutSection.style.opacity = 1;
        textContainer.classList.add("slideUp");
        textContainer.style.animationDelay = 0.5 + 's';
        imageContainer.classList.add("slideUp");
        imageContainer.style.animationDelay = 0.5 + 's';
        setTimeout(() => {
            imageContainer.style.opacity = 1;
        }, 1000);
    }

    if (document.documentElement.scrollTop >= 900) {
        aboutSkills.classList.add("fullWidth");
        aboutSkills.style.opacity = 1;
        aboutSkillsTextContainer.classList.add("slideUp");
        aboutSkillsTextContainer.style.animationDelay = 0.8 + 's';
        for (i = 0; i < skillNames.length; i++) {
            skillNames[i].classList.add("fadeIn");
            skillNames[i].style.animationDelay = 1 + (i / 3) + 's';
        }
    }

    if (document.documentElement.scrollTop >= 1550) {
        certifiactesContainer.classList.add("fullWidth");
        certifiactesContainer.style.padding = "12px 23px";
        for (i = 0; i < certificates.length; i++) {
            certificates[i].classList.add("width90");
            certificates[i].style.animationDelay = 1 + (i / 3) + 's';
        }
        for (i = 0; i < certificates.length; i++) {
            certificateImg[i].classList.add("fadeIn");
            certificateImg[i].style.animationDelay = 1 + (i / 3) + 's';
        }
    }

    if (document.documentElement.scrollTop >= 2350) {
        contactFrom.classList.add("fullWidth");
        contactFrom.style.padding = "12px 23px";
        fName.classList.add("fadeIn", "slideLeft");
        fName.style.animationDelay = 1 + 's';

        eMail.classList.add("slideRight", "fadeIn");
        eMail.style.animationDelay = 1.3 + 's';

        message.classList.add("slideLeft", "fadeIn");
        message.style.animationDelay = 1.6 + 's';

        submit.classList.add("slideRight", "fadeIn");
        submit.style.animationDelay = 1.9 + 's';
    }
}

let hambuger = document.querySelector(".hanburger");
let hamburgerNav = document.querySelector(".hamburgeNav");
let hamburgerNavItems = document.querySelectorAll(".hamburgeNav ul li a");
let body = document.querySelector("body");
hambuger.addEventListener("click", () => {
    hambuger.classList.toggle("navActive");
    hamburgerNav.classList.toggle("activeHamburderNav");
});

goToTop.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});

// certificates.foreach(element => addEventListener('click', ()=>{
//     console.log('asdf');
// }));

// IMage previewer

let mainImageContainer = document.getElementsByClassName('imagePreviewerContainer');
let cerImageContainer = document.getElementById("imagePreviewer");

let srcs = new Array();

for (i = 0; i < certificateImg.length; i++)
    srcs[i] = certificateImg[i].getAttribute('src');

console.log(srcs);

certificates.forEach(element => {
    element.addEventListener('click', (e) => {
        let certificateImg = element.getElementsByTagName('img');
        cerImageContainer.setAttribute('src', certificateImg[0].getAttribute('src'));
        mainImageContainer[0].style.opacity = '1';
        mainImageContainer[0].style.top = 50 + '%';
    });
});

document.getElementById('delete').addEventListener('click', () => {
    mainImageContainer[0].style.opacity = '0';
    mainImageContainer[0].style.top = -100 + '%';
});


document.getElementById('next').addEventListener('click', () => {
    let index = srcs.indexOf(cerImageContainer.getAttribute('src'));
    if (index == srcs.length - 1) {
        index = 0;
        cerImageContainer.setAttribute('src', srcs[index]);
    } else {
        cerImageContainer.setAttribute('src', srcs[index + 1]);
    }
});



document.getElementById('previous').addEventListener('click', () => {
    let index = srcs.indexOf(cerImageContainer.getAttribute('src'));
    if (index == 0) {
        index = srcs.length - 1
        cerImageContainer.setAttribute('src', srcs[index]);
    } else {
        cerImageContainer.setAttribute('src', srcs[index - 1]);
    }
});

// Animate on mouse move

let background = document.querySelectorAll('.backgroundImage');
window.addEventListener('mousemove', (event) => {
    var x = event.clientX;
    var y = event.clientY;
    background[0].style.left = x * 0.02 + 'px';
    background[0].style.top = y * 0.02 + 'px';
});
