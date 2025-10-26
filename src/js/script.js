const homeSection = document.getElementById("home");
const header = document.querySelector("header");
// Set animations after loading
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader-wrapper").style.display = "none";
    document.getElementById("primary-image").classList.remove("opacity-0");
    document.getElementById("secondary-image").classList.remove("opacity-0");
    homeSection
      .querySelector("h1")
      .classList.remove("translate-y-60", "opacity-0");
    document
      .getElementById("home-line")
      .classList.remove("translate-y-60", "opacity-0");
    homeSection
      .querySelector("span")
      .classList.remove("translate-y-60", "opacity-0");
    homeSection
      .querySelector("p")
      .classList.remove("translate-y-60", "opacity-0");
    homeSection
      .querySelector("ul")
      .classList.remove("translate-y-60", "opacity-0");
    document
      .getElementById("circle-arrow")
      .classList.remove("translate-y-60", "opacity-0");
    document.getElementById("header").classList.remove("opacity-0");
  }, 1500);
};

// Header
window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("border-b-[1px]");
  } else {
    header.classList.remove("border-b-[1px]");
  }
});

// Set active nav link
const aLinks = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");
// on click
function setActiveLink(element) {
  aLinks.forEach((a) => a.classList.remove("active"));
  element.classList.add("active");
}
// on scroll
window.addEventListener("scroll", () => {
  let current = "";
  if (scrollY < 180) current = "home";
  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - section.clientHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  aLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Nav Open Button
const navOpenButton = document.getElementById("nav-open-button");
const navOpenLines = navOpenButton.querySelectorAll("div");
const mobileMenu = document.getElementById("mobile-menu");
const menuContent = document.getElementById("menu-content");

navOpenButton.addEventListener("click", () => {
  navOpenLines[1].classList.toggle("opacity-0");

  navOpenLines[0].classList.toggle("translate-y-[7px]");
  navOpenLines[0].classList.toggle("rotate-45");

  navOpenLines[2].classList.toggle("-translate-y-[7px]");
  navOpenLines[2].classList.toggle("-rotate-45");

  // فتح أو غلق القائمة
  const isOpen = mobileMenu.classList.contains("top-20");

  if (isOpen) {
    // عند الإغلاق
    menuContent.classList.add("opacity-0");
    menuContent.classList.add("-translate-y-5");
    mobileMenu.classList.add("opacity-0");
    setTimeout(() => {
      mobileMenu.classList.add("-top-[60%]");
      mobileMenu.classList.remove("top-20");
    }, 500);
  } else {
    // عند الفتح
    mobileMenu.classList.remove("-top-[60%]");
    mobileMenu.classList.add("top-20");
    mobileMenu.classList.remove("opacity-0");

    // بعد وقت قصير، تظهر العناصر داخلها
    setTimeout(() => {
      menuContent.classList.remove("opacity-0");
      menuContent.classList.remove("-translate-y-5");
    }, 200); // ← بعد 0.2 ثانية
  }
});

document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navOpenButton.click(); // يعيد الزر لوضعه الطبيعي ويغلق القائمة
  });
});

// Set Active menu on Menu section

const aMenu = document.getElementById("menu").querySelectorAll("a");

function setActive(element) {
  aMenu.forEach((a) => {
    a.classList.remove("active");
    a.querySelector("img").classList.add("opacity-0", "-translate-x-5");
  });
  element.classList.add("active");
  element.querySelector("img").classList.remove("opacity-0", "-translate-x-5");
}

aMenu.forEach((a) => {
  a.addEventListener("mouseenter", () => {
    a.querySelector("img").classList.remove("opacity-0", "-translate-x-5");
  });
  a.addEventListener("mouseleave", () => {
    if (!a.classList.contains("active")) {
      a.querySelector("img").classList.add("opacity-0", "-translate-x-5");
    }
  });
});
