// Menu links

const link1 = document.querySelector("#link_1");
const link2 = document.querySelector("#link_2");
const link3 = document.querySelector("#link_3");
const link4 = document.querySelector("#link_4");

const links = [link1, link2, link3, link4];

// setLinkActive based on document scroll position

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition < 500) {
    setLinkActive(link1);
  } else if (scrollPosition < 1200) {
    setLinkActive(link2);
  } else if (scrollPosition < 4000) {
    setLinkActive(link3);
  } else {
    setLinkActive(link4);
  }
});

// Scroll to section on link click !!! Function disabled for now !!!

const setLinkActive = (activeLink) => {
  links.forEach((link) => {
    if (link === activeLink) {
      link.classList.add("link__selected");
    } else {
      link.classList.remove("link__selected");
    }
  });
};

// Cards
const card1 = document.querySelector("#card_1");
const card2 = document.querySelector("#card_2");
const card3 = document.querySelector("#card_3");
const card4 = document.querySelector("#card_4");
const card5 = document.querySelector("#card_5");

const cardList = [card1, card2, card3, card4, card5];

// Show card on click

const showCard = (card) => {
  if (card.classList.contains("card__show")) {
    card.classList.remove("card__show");
  } else {
    card.classList.add("card__show");
  }
};

// Intersection observer

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Image slider

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";

  setTimeout(carousel, 3000);
}
