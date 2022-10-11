const createMenu = (() => {
  const createMain = () => {
    const header = document.querySelector("header");
    const main = document.createElement("main");
    header.after(main);

    const title = document.createElement("div");
    title.classList.add("title");
    title.innerText = "You don't get it, do you?";
    main.appendChild(title);

    const subtitle1 = document.createElement("div");
    subtitle1.classList.add("subtitleContact");
    subtitle1.innerText = "We really DO have everything you can think of!";
    main.appendChild(subtitle1);

    const subtitle2 = document.createElement("div");
    subtitle2.classList.add("subtitleContact");
    subtitle2.innerHTML =
      "(or at least more than <a href=https://t3t3c.github.io/Restaurant-Page/>the guy with the noodles next door</a>)";
    main.appendChild(subtitle2);
  };

  return { createMain };
})();

export { createMenu };
