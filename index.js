const burgerIcon = document.getElementById("hamburger");
const tabsComponent = document.querySelector("tabs-component");

burgerIcon.addEventListener("click", () => {
  const opened = burgerIcon.classList.contains("opened");
  if (opened) {
    tabsComponent.setAttribute("show", "");
    burgerIcon.classList.remove("opened");
  } else {
    tabsComponent.setAttribute("show", "true");
    burgerIcon.classList.add("opened");
  }
});
