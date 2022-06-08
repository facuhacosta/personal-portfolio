const NavItems = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

function setActiveLink(link) {
  NavItems.forEach((navItem) => {
    navItem.classList.remove("selected");
  });

  link.classList.add("selected");
}
NavItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    setActiveLink(navItem);
  });
});

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset * 0.7 && top < offset * 0.7 + height) {
      const target = document.querySelector(`[href='#${id}']`);
      setActiveLink(target);
    }
  });
};
