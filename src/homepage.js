const createHome = (() => {
  const content = document.getElementById("content");
  const createHeader = () => {
    const header = document.createElement("header");
    content.appendChild(header);

    const social = document.createElement("div");
    social.classList.add("social");
    header.appendChild(social);

    const fb = document.createElement("img");
    fb.classList.add("fb");
    fb.src = "../src/img/fb.png";
    social.appendChild(fb);

    const insta = document.createElement("img");
    insta.classList.add("insta");
    insta.src = "../src/img/insta.png";
    social.appendChild(insta);

    const nav = document.createElement("div");
    nav.classList.add("nav");
    header.appendChild(nav);

    const home = document.createElement("button");
    home.classList.add("home");
    home.innerText = "home";
    nav.appendChild(home);

    const menu = document.createElement("button");
    menu.classList.add("menu");
    menu.innerText = "our menu";
    nav.appendChild(menu);

    const openingHours = document.createElement("button");
    openingHours.classList.add("openingHours");
    openingHours.innerText = "opening hours";
    nav.appendChild(openingHours);

    const contact = document.createElement("button");
    contact.classList.add("contact");
    contact.innerText = "contact us";
    nav.appendChild(contact);

    const lang = document.createElement("div");
    lang.classList.add("lang");
    header.appendChild(lang);

    const langPL = document.createElement("img");
    langPL.classList.add("langPL");
    langPL.src = "../src/img/pl.png";
    lang.appendChild(langPL);

    const langEN = document.createElement("img");
    langEN.classList.add("langEN");
    langEN.src = "../src/img/en.png";
    lang.appendChild(langEN);

    const langDE = document.createElement("img");
    langDE.classList.add("langDE");
    langDE.src = "../src/img/de.png";
    lang.appendChild(langDE);
  };

  const createMain = () => {
    const header = document.querySelector("header");
    const main = document.createElement("main");
    header.after(main);

    const title = document.createElement("div");
    title.classList.add("title");
    title.innerText = "Welcome to the best restaurant in the world!";
    main.appendChild(title);

    const subtitle = document.createElement("div");
    subtitle.classList.add("subtitle");
    subtitle.innerText = "~ We have literally everything! ~";
    main.appendChild(subtitle);

    const orderButton = document.createElement("button");
    orderButton.classList.add("orderButton");
    orderButton.innerText = "order online now!";
    main.appendChild(orderButton);

    const orderText = document.createElement("div");
    orderText.classList.add("orderText");
    main.appendChild(orderText);
    orderButton.addEventListener("click", () => {
      orderText.innerText = "(coming soon)";
    });
  };

  const createFooter = () => {
    const footer = document.createElement("footer");
    footer.innerText = "Made by @halldor03 for TheOdinProject";
    content.appendChild(footer);
  };
  return { createHeader, createMain, createFooter };
})();

export { createHome };
