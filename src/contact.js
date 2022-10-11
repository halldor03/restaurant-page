const createContact = (() => {
  const createMain = () => {
    const header = document.querySelector("header");
    const main = document.createElement("main");
    header.after(main);

    const title = document.createElement("div");
    title.classList.add("title");
    title.innerText = "Don't wait, get in touch!";
    main.appendChild(title);

    const subtitle1 = document.createElement("div");
    subtitle1.classList.add("subtitleContact");
    subtitle1.innerText = "+48 123 456 789";
    main.appendChild(subtitle1);

    const phone = document.createElement("img");
    phone.classList.add("insta");
    phone.src = "../src/img/phone.png";
    subtitle1.before(phone);

    const subtitle2 = document.createElement("div");
    subtitle2.classList.add("subtitleContact");
    subtitle2.innerText = "bestrestaurant@gmail.com";
    main.appendChild(subtitle2);

    const mail = document.createElement("img");
    mail.classList.add("insta");
    mail.src = "../src/img/mail.png";
    subtitle2.before(mail);
  };

  return { createMain };
})();

export { createContact };
