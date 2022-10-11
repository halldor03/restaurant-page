import "./styles.css";
import de_icon from "./img/de.png";
import en_icon from "./img/en.png";
import fb_icon from "./img/fb.png";
import insta_icon from "./img/insta.png";
import mail_icon from "./img/mail.png";
import phone_icon from "./img/phone.png";
import pl_icon from "./img/pl.png";
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
