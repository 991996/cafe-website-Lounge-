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

function setActive(element) {
  const aLink = document.querySelectorAll(".link");
  aLink.forEach((a) => a.classList.remove("active"));
  element.classList.add("active");
}

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

// Set Active menu

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

function buildSlideHtml(client) {
  return ` <!-- client container -->
         <div class="flex flex-col gap-10 justify-center items-center md:items-start">
          <!-- image and text -->
           <div class="flex items-center gap-2">
            <!-- image circle -->
              <div class="w-[70px] sm:w-[80px] aspect-square bg-light-black rounded-full flex justify-center items-center">
                <img src="./src/img/${client.image}" class="w-[80%] rounded-full object-cover"/>
              </div>
           <!-- name and address -->
            <div class="flex flex-col gap-[0.5]">
              <p class="font-[400] text-[15px] sm:text-base text-light-gray">${client.name}</p>
              <p class="text-sm sm:text-[15px] text-dark-gray">${client.address}</p>
            </div>

           </div>
           <p class="text-light-gray text-lg sm:text-[20px]/9 text-center md:text-left">
           ${client.text}
           </p>
         </div>`;
}

// Display Clients
fetch("./src/clients.json")
  .then((res) => res.json())
  .then((clients) => {
    console.log(clients);
    const container = document.getElementById("clients-div");
    clients.forEach((client) => {
      const clientDiv = document.createElement("div");
      clientDiv.classList.add("swiper-slide");
      clientDiv.innerHTML = buildSlideHtml(client);
      container.appendChild(clientDiv);
    });
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        801: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  });

// Display Menu
setMenuItems(0);
function setMenuItems(id) {
  fetch("./src/menu.json")
    .then((res) => res.json())
    .then((categories) => {
      const menuDiv = document.getElementById("menu-div"); //div for all items and category title
      menuDiv.classList.remove(
        "ease-in-out",
        "transition-all",
        "duration-1200"
      );
      menuDiv.classList.add("translate-y-60", "opacity-0");
      const categoryItems = document.getElementById("category-items");
      categoryItems.innerHTML = "";
      const cat = categories[id];
      const title = menuDiv.querySelector("h1"); // category title
      title.textContent = cat.category;
      let bool = 2;
      cat.items.forEach((item) => {
        const menuItem = document.createElement("div"); // div for content for every item
        menuItem.classList.add("flex", "justify-between", "p-6", "lg:p-8");
        if (bool % 2 == 0) menuItem.classList.add("bg-[#131414]", "rounded-md");
        const menuItemDiv = document.createElement("div"); // div for item's name and desc
        menuItemDiv.classList.add("flex", "flex-col", "gap-2");
        const itemName = document.createElement("h2");
        itemName.classList.add(
          "text-primary-white",
          "text-xl",
          "sm:text-[21px]",
          "md:text-[22px]",
          "lg:text-[24px]",
          "xl:text-[26px]"
        );
        itemName.textContent = item.name;
        const itemDescription = document.createElement("p");
        itemDescription.classList.add(
          "text-sm",
          "text-dark-gray",
          "md:text-[16px]",
          "xl:text-[17px]"
        );

        itemDescription.textContent = item.description;
        const itemPrice = document.createElement("span");
        itemPrice.classList.add(
          "ml-auto",
          "mr-0",
          "font-[500]",
          "text-lg",
          "md:text-[18px]",
          "xl:text-[20px]"
        );
        itemPrice.textContent = "$" + item.price;

        menuItemDiv.appendChild(itemName);
        menuItemDiv.appendChild(itemDescription);
        menuItem.appendChild(menuItemDiv);
        menuItem.appendChild(itemPrice);
        categoryItems.appendChild(menuItem);
        bool++;
      });
      setTimeout(() => {
        menuDiv.classList.add("ease-in-out", "transition-all", "duration-1200");
        menuDiv.classList.remove("translate-y-60", "opacity-0");
      }, 50);
    });
}

// Gallery
const images = [
  "./src/img/gallery-01@2x.jpg",
  "./src/img/gallery-02@2x.jpg",
  "./src/img/gallery-03@2x.jpg",
  "./src/img/gallery-04@2x.jpg",
  "./src/img/gallery-05@2x.jpg",
  "./src/img/gallery-06@2x.jpg",
  "./src/img/gallery-07@2x.jpg",
  "./src/img/gallery-08@2x.jpg",
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = images[currentIndex];

  // إظهار اللايت بوكس أولاً
  lightbox.classList.replace("hidden", "flex");

  // تفعيل الأنيميشن بعد لحظة صغيرة (للسماح بالانتقال)
  setTimeout(() => {
    lightbox.classList.add("opacity-100");
    lightboxImg.classList.add("opacity-100", "scale-100");
  }, 10);

  // إغلاق عند النقر خارج الصورة
  lightbox.addEventListener("click", closeOnBackgroundClick);
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  // تشغيل أنيميشن الخروج
  lightbox.classList.remove("opacity-100");
  lightboxImg.classList.remove("opacity-100", "scale-100");

  // بعد انتهاء الأنيميشن (نصف ثانية) نخفي العنصر فعليًا
  setTimeout(() => {
    lightbox.classList.add("hidden");
  }, 500);

  lightbox.removeEventListener("click", closeOnBackgroundClick);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeOnBackgroundClick(e) {
  const lightboxImg = document.getElementById("lightbox-img");

  // إذا كان النقر على الصورة نفسها → لا تغلق
  if (lightboxImg.contains(e.target)) return;

  // إذا كان النقر على زر أو على أيقونة داخل الزر → لا تغلق
  if (e.target.closest("button")) return;

  // غير ذلك → أغلق اللايتبوكس
  closeLightbox();
}

// swip with hand
let startX = 0;
let endX = 0;

const lightbox = document.getElementById("lightbox");

lightbox.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

lightbox.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diff = startX - endX;
  const swipeThreshold = 50; // الحد الأدنى للحركة لتُعتبر "سحب"

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // سحب لليسار → الصورة التالية
      nextImage();
    } else {
      // سحب لليمين → الصورة السابقة
      prevImage();
    }
  }
}
