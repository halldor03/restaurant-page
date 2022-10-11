const createOpeningHours = (() => {
  const createMain = () => {
    const header = document.querySelector("header");
    const main = document.createElement("main");
    header.after(main);

    const title = document.createElement("div");
    title.classList.add("title");
    title.innerText = "Come visit us!";
    main.appendChild(title);

    const date = new Date();
    let hour = date.getHours();
    // console.log(hour);
    let day = date.getDay();
    // console.log(day);

    const subtitle1 = document.createElement("div");
    subtitle1.classList.add("subtitleContact");
    if (day <= 5 && hour >= 13 && hour <= 21) {
      subtitle1.innerHTML = "We are currently open!";
    } else if (day > 5 && hour >= 13 && hour <= 23) {
      subtitle1.innerHTML = "We are currently open!";
    } else subtitle1.innerHTML = "Sorry, we are currently closed";
    main.appendChild(subtitle1);

    const list = document.createElement("ul");
    list.classList.add("subtitleContact");
    main.appendChild(list);

    const monday = document.createElement("li");
    monday.classList.add("subtitleContact");
    monday.innerText = "Monday: 13-21";
    list.appendChild(monday);

    const tuesday = document.createElement("li");
    tuesday.classList.add("subtitleContact");
    tuesday.innerText = "Tuesday: 13-21";
    list.appendChild(tuesday);

    const wednesday = document.createElement("li");
    wednesday.classList.add("subtitleContact");
    wednesday.innerText = "Wednesday: 13-21";
    list.appendChild(wednesday);

    const thursday = document.createElement("li");
    thursday.classList.add("subtitleContact");
    thursday.innerText = "Thursday: 13-21";
    list.appendChild(thursday);

    const friday = document.createElement("li");
    friday.classList.add("subtitleContact");
    friday.innerText = "Friday: 13-23";
    list.appendChild(friday);

    const saturday = document.createElement("li");
    saturday.classList.add("subtitleContact");
    saturday.innerText = "Saturday: 13-23";
    list.appendChild(saturday);

    const sunday = document.createElement("li");
    sunday.classList.add("subtitleContact");
    sunday.innerText = "Sunday: 13-23";
    list.appendChild(sunday);
  };

  return { createMain };
})();

export { createOpeningHours };
