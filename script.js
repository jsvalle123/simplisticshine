/* Commence scroll */
gsap.registerPlugin(ScrollTrigger);
const scroller = new LocomotiveScroll({
    el:document.querySelector(".container"),
    smooth:true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".container", {
    scrollTop(value) {
        return arguements.length
        ? scroller.scrollTo(value, 0, 0)
        : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
});

ScrollTrigger.addEventListener("refresh", () => scroller.update());

ScrollTrigger.refresh();

/* To Change Color of Background */
window.addEventListener("load", function () {
    const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
    scrollColorElems.forEach((colorSection, i) => {
        const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
        const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

        ScrollTrigger.create({
            trigger: colorSection,
            scroller: ".container",
            start:"top 50%",
            onEnter: () =>
            gsap.to("body", {
                backgroundColor: colorSection.dataset.bgcolor,
                color: colorSection.dataset.textcolor,
                overwrite: "auto"
            }),
            onLeaveBack: () =>
            gsap.to("body", {
                backgroundColor: prevBg,
                color: prevText,
                overwrite: "auto"
            })
        
        });
    });
});

//Contact Form

document.addEventListener("DomContentLoaded", function() {
    fields.fullName = document.getElementById('fullnName');
    fields.email = document.getElementById('email');
    fields.question = document.getElementById('question');

})

function isNotEmpty(value) {
    if (value == null || typeof valle == 'undefined') return false;
    return (value.length > 0);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }
    return isFieldValid;
}

function isValid() {
    var valid = true;

    valid &= fieldValidation(fields.fullName, isNotEmpty);
    valid &= fieldValidation(fields.email, isNotEmpty);
    valid &= fieldValidation(fields.question, isNotEmpty);
}

class User {
    constructor(fullName, email, question) {
        this.fullName = fullName;
        this.email = email;
        this.question = question;
    }
}

function sendContact() {
    if(isValid()) {
        let usr = new User(fullName.value, email.value);
        alert(`${usr.fullName} we'll talk soon!`)
    } else {
        alert("There was an error")
    }
}