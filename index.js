const dateSpan = document.getElementById("js--display--year");
const close = document.getElementById("js--toggle--close");
const menu = document.getElementById("js--toggle--menu");
const nav = document.querySelector("nav>ul");
const card = document.querySelectorAll(".testimonal--section--card");
const container = document.querySelector(
  ".testimonal--section--carousel--container"
);
const nextButton = document.getElementById("js--next--btn");
const prevButton = document.getElementById("js--prev--btn");
const updates = document.getElementById("updates");
const small = document.querySelector("label>small");
const buttons = document.querySelectorAll(".paginate--button");
let current = 0;
let time = 1500;
close.style.display = "none";

buttons.forEach((button, index) => {
  button.addEventListener("click", (e) => displayElements(e, index));
});
nextButton.addEventListener("click", () => {
  card[current].className += " move--out ";
  setTimeout(slideIn, 500);
});
prevButton.addEventListener("click", prevSlide);
updates.addEventListener("blur", checkEmail);
const date = new Date();
function displayElements(e, index) {
  e.target.classList.add("active");
  for (let i = 0; i < buttons.length; i++) {
    if (i !== index && buttons[i].className.includes("active")) {
      buttons[i].classList.remove("active");
      break;
    }
  }
  for (let j = 0; j < card.length; j++) {
    if (j !== index) {
      if (card[j].className.includes("move--in"))
        card[j].classList.remove("move--in");
      container.removeChild(card[j]);
      container.appendChild(card[j]);
    }
    card[index].classList.add("move--in");
  }
}
function checkEmail(e) {
  if (e.target.value.length === 0) {
    small.style.display = "block";
    small.style.color = "#f01";
    return;
  }
  small.style.display = "none";
}
function prevSlide() {
  card[current].className = " testimonal--section--card ";
  container.removeChild(card[current]);
  container.appendChild(card[current]);
  if (current === 0) {
    card[(current + 2) % 4].className += " move--in ";
    current = card.length - 1;
    return;
  }
  card[(current + 2) % 4].className += " move--in ";

  current -= 1;
}
function slideIn() {
  container.removeChild(card[current]);
  container.appendChild(card[current]);
  if (current === card.length - 1) {
    card[(current + 2) % 4].className = " testimonal--section--card ";
    current = 0;
    return;
  }
  card[(current + 2) % 4].className = " testimonal--section--card ";
  current += 1;
}
dateSpan.innerHTML = date.getFullYear();
menu.addEventListener("click", () => {
  nav.style.display = "flex";
  close.style.display = "block";
  menu.style.display = "none";
});
close.addEventListener("click", () => {
  nav.style.display = "none";
  close.style.display = "none";
  menu.style.display = "block";
});
