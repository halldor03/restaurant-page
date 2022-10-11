import "./styles.css";
import "./img/de.png";
import "./img/en.png";
import "./img/fb.png";
import "./img/insta.png";
import "./img/mail.png";
import "./img/phone.png";
import "./img/pl.png";
import { createHome } from "./homepage.js";
import { createMenu } from "./menu.js";
import { createOpeningHours } from "./openingHours.js";
import { createContact } from "./contact.js";

createHome.createHeader();
createHome.createMain();
createHome.createFooter();

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const openingHoursButton = document.querySelector(".openingHours");
const contactButton = document.querySelector(".contact");

const resetDOM = () => {
  const mainContent = document.querySelector("main");
  mainContent.remove();
};

const homePage = homeButton.addEventListener("click", () => {
  resetDOM();
  createHome.createMain();
});

const menuPage = menuButton.addEventListener("click", () => {
  resetDOM();
  createMenu.createMain();
});

const openingHoursPage = openingHoursButton.addEventListener("click", () => {
  resetDOM();
  createOpeningHours.createMain();
});

const contactPage = contactButton.addEventListener("click", () => {
  resetDOM();
  createContact.createMain();
});
