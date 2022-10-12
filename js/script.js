// HAMBURGER MENU TOGGLE
function mobileNavFunction() {
    var hamburger = document.getElementById("mobile-menuitems");
    if (hamburger.style.display === "block") {
      hamburger.style.display = "none";
    } else {
      hamburger.style.display = "block";
    }
}

// SLIDER
var slideIndex = 1;
var myTimer;
var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function() {
        plusSlides(1)
    }, 1000);
  
    //Navigational arows are part of pause on hover
    slideshowContainer = document.getElementsByClassName('slider-container')[0];
  
    //Navigational arows not part of pause on hover
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// Next and Previous Controls
function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0){
        showSlides(slideIndex -= 1);
    } else {
    showSlides(slideIndex += 1); 
    }
  
    //Navigational arows not part of pause on hover
    if (n === -1){
        myTimer = setInterval(function() {
            plusSlides(n + 2)
        }, 7000);
    } else {
        myTimer = setInterval(function() {
            plusSlides(n + 1)
        }, 7000);
    }
}

//Controls current slide and resets interval when needed
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function() {
        plusSlides(n + 1)
    }, 4000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-image");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activedot", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " activedot";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function() {
    plusSlides(slideIndex)
    }, 4000);
}

// HIGHLIGHTS ACTIVE MENU ITEM ON SCROLL 

const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll("#desktop-menu ul li");

window.addEventListener("scroll", ()=> {
    let current = "";

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
 
        if(scrollY >= sectionTop) {
            current = section.getAttribute("Id");
        }
    })
    
    menuItems.forEach( li => {
        li.classList.remove("active");

        if (li.classList.contains(current)) {
            li.classList.add("active")
        }
    })
})


// CHANGE HEADER ON SCROLL
window.onscroll = function() {
    changeHeader()
};

let desktopMedia = window.matchMedia('(min-width: 1024px)');

if (desktopMedia.matches) {
    function changeHeader() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          document.getElementById("header").style.backgroundColor = "#000";
          document.getElementById("logo").style.visibility = "hidden";
          document.getElementById("logo2").style.visibility = "visible";
        } 
        
        else {
          document.getElementById("header").style.backgroundColor = "transparent";
          document.getElementById("logo").style.visibility = "visible";
          document.getElementById("logo2").style.visibility = "hidden";
        }
    }
} 


// LEARN MORE BUTTON MOUSEOVER
// Accessibility Button
function morebtnOneOver() {
    document.getElementById("greenicon1").style.color = "#008000";
    document.getElementById("greenicon1").style.fontSize = "3rem";
    document.getElementById("greenicon1").style.transition = "0.3s ease";
    document.getElementById("greenheading1").style.color = "#008000";
    document.getElementById("greenbutton1").style.color = "#008000";
}

function morebtnOneOut() {
    document.getElementById("greenicon1").style.color = "#5fb378";
    document.getElementById("greenicon1").style.fontSize = "2.5rem";
    document.getElementById("greenicon1").style.transition = "0.1s";
    document.getElementById("greenheading1").style.color = "#000";
    document.getElementById("greenbutton1").style.color = "#2b2b2b";
}

// Usability Button
function morebtnTwoOver() {
    document.getElementById("redicon1").style.color = "#f83549";
    document.getElementById("redicon1").style.fontSize = "3rem";
    document.getElementById("redicon1").style.transition = "0.3s ease";
    document.getElementById("redheading1").style.color = "#f83549";
    document.getElementById("redbutton1").style.color = "#f83549";
}

function morebtnTwoOut() {
    document.getElementById("redicon1").style.color = "#ff8590";
    document.getElementById("redicon1").style.fontSize = "2.5rem";
    document.getElementById("redicon1").style.transition = "0.1s";
    document.getElementById("redheading1").style.color = "#000";
    document.getElementById("redbutton1").style.color = "#2b2b2b";
}

// Inclusion Button
function morebtnThreeOver() {
    document.getElementById("greenicon2").style.color = "#008000";
    document.getElementById("greenicon2").style.fontSize = "3rem";
    document.getElementById("greenicon2").style.transition = "0.3s ease";
    document.getElementById("greenheading2").style.color = "#008000";
    document.getElementById("greenbutton2").style.color = "#008000";
}

function morebtnThreeOut() {
    document.getElementById("greenicon2").style.color = "#5fb378";
    document.getElementById("greenicon2").style.fontSize = "2.5rem";
    document.getElementById("greenicon2").style.transition = "0.1s";
    document.getElementById("greenheading2").style.color = "#000";
    document.getElementById("greenbutton2").style.color = "#2b2b2b";
}

// Responsive Button
function morebtnFourOver() {
    document.getElementById("redicon2").style.color = "#f83549";
    document.getElementById("redicon2").style.fontSize = "3rem";
    document.getElementById("redicon2").style.transition = "0.3s ease";
    document.getElementById("redheading2").style.color = "#f83549";
    document.getElementById("redbutton2").style.color = "#f83549";
}

function morebtnFourOut() {
    document.getElementById("redicon2").style.color = "#ff8590";
    document.getElementById("redicon2").style.fontSize = "2.5rem";
    document.getElementById("redicon2").style.transition = "0.1s";
    document.getElementById("redheading2").style.color = "#000";
    document.getElementById("redbutton2").style.color = "#2b2b2b";
}

// User Experience Button
function morebtnFiveOver() {
    document.getElementById("greenicon3").style.color = "#008000";
    document.getElementById("greenicon3").style.fontSize = "3rem";
    document.getElementById("greenicon3").style.transition = "0.3s ease";
    document.getElementById("greenheading3").style.color = "#008000";
    document.getElementById("greenbutton3").style.color = "#008000";
}

function morebtnFiveOut() {
    document.getElementById("greenicon3").style.color = "#5fb378";
    document.getElementById("greenicon3").style.fontSize = "2.5rem";
    document.getElementById("greenicon3").style.transition = "0.1s";
    document.getElementById("greenheading3").style.color = "#000";
    document.getElementById("greenbutton3").style.color = "#2b2b2b";
}

// User-Centred Button
function morebtnSixOver() {
    document.getElementById("redicon3").style.color = "#f83549";
    document.getElementById("redicon3").style.fontSize = "3rem";
    document.getElementById("redicon3").style.transition = "0.3s ease";
    document.getElementById("redheading3").style.color = "#f83549";
    document.getElementById("redbutton3").style.color = "#f83549";
}

function morebtnSixOut() {
    document.getElementById("redicon3").style.color = "#ff8590";
    document.getElementById("redicon3").style.fontSize = "2.5rem";
    document.getElementById("redicon3").style.transition = "0.1s";
    document.getElementById("redheading3").style.color = "#000";
    document.getElementById("redbutton3").style.color = "#2b2b2b";
}

// Products Read More

// Heuristic Design
function morebtnSevenOver() {
    document.getElementById("circle1").style.height = "95px";
    document.getElementById("circle1").style.width = "95px";
    document.getElementById("circle1").style.transition = "0.3s ease";
    document.getElementById("circle1").style.fontSize = "2.5rem";
    document.getElementById("circle1").style.color = "#f83549";
}

function morebtnSevenOut() {
    document.getElementById("circle1").style.height = "85px";
    document.getElementById("circle1").style.width = "85px";
    document.getElementById("circle1").style.transition = "0.1s ease";
    document.getElementById("circle1").style.fontSize = "2rem";
    document.getElementById("circle1").style.color = "#2b2b2b";
}

// Bespoke
function morebtnEightOver() {
    document.getElementById("circle2").style.height = "95px";
    document.getElementById("circle2").style.width = "95px";
    document.getElementById("circle2").style.transition = "0.3s ease";
    document.getElementById("circle2").style.fontSize = "2.5rem";
    document.getElementById("circle2").style.color = "#f83549";
}

function morebtnEightOut() {
    document.getElementById("circle2").style.height = "85px";
    document.getElementById("circle2").style.width = "85px";
    document.getElementById("circle2").style.transition = "0.1s ease";
    document.getElementById("circle2").style.fontSize = "2rem";
    document.getElementById("circle2").style.color = "#2b2b2b";
}

// CMS Bespoke
function morebtnNineOver() {
    document.getElementById("circle3").style.height = "95px";
    document.getElementById("circle3").style.width = "95px";
    document.getElementById("circle3").style.transition = "0.3s ease";
    document.getElementById("circle3").style.fontSize = "2.5rem";
    document.getElementById("circle3").style.color = "#f83549";
}

function morebtnNineOut() {
    document.getElementById("circle3").style.height = "85px";
    document.getElementById("circle3").style.width = "85px";
    document.getElementById("circle3").style.transition = "0.1s ease";
    document.getElementById("circle3").style.fontSize = "2rem";
    document.getElementById("circle3").style.color = "#2b2b2b";
}

