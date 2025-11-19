const displayCard = document.querySelector(".allCard .displayCard");
const displayCardSeller = document.querySelector(
  ".allCardSeller .displayCardSeller"
);
const leftDiv = document.querySelector(".firstImg");
const rightDiv = document.querySelector(".thiredImg");
const btnMenu = document.querySelector("#btn-menu");
const showMenu = document.querySelector("#show-menu");
const closeMenu = document.querySelector("#close-menu");
const navLinks = document.querySelector(".all-section-title");
const productsCard = document.querySelector(".products-card");
let content = "";
let seller = "";

/* ------------------------------------menu header--------------------------------------- */
const allSection = [
  {
    title: "جميع الأقسام",
    arrow: true,
    activ: true,
  },
  {
    title: "المكياج",
    arrow: true,
    activ: false,
  },
  {
    title: "العناية",
    arrow: true,
    activ: false,
  },
  {
    title: "العطور",
    arrow: true,
    activ: false,
  },
  {
    title: "تخفيضات",
    arrow: true,
    activ: false,
  },
  {
    title: "الماركات",
    arrow: true,
    activ: false,
  },
];

let containerAllSection = "";

allSection.forEach((sec, index) => {
  containerAllSection += `
          <li>
            <a
              class="w-[200px] h-[22px] font-harmattan font-semibold text-[18px] leading-[22px] tracking-normal text-right"
              href="#"
            >
              <div class="flex justify-between px-6 py-3 items-baseline">
                ${sec.title}
                ${sec.arrow
      ? `<img src="./images/header/down-arrow 1.svg" class="size-4" alt="arrow" />`
      : ""
    }
              </div>
            </a>
          </li>
          <li>
            <hr />
          </li>
          `;
});

navLinks.innerHTML = containerAllSection;

btnMenu.addEventListener(`click`, function (e) {
  e.preventDefault();
  showMenu.classList.add("menu-open");
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener(`click`, function (e) {
  e.preventDefault();
  showMenu.classList.remove("menu-open");
  document.body.style.overflow = "";
});

// Close menu when clicking outside the panel
showMenu.addEventListener("click", function (e) {
  e.stopPropagation();
});

document.addEventListener("click", function (e) {
  const clickedOnToggle = e.target.closest("#btn-menu");
  const clickedInsideMenu = showMenu.contains(e.target);
  if (
    showMenu.classList.contains("menu-open") &&
    !clickedInsideMenu &&
    !clickedOnToggle
  ) {
    showMenu.classList.remove("menu-open");
    document.body.style.overflow = "";
  }
});

// Close on Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && showMenu.classList.contains("menu-open")) {
    showMenu.classList.remove("menu-open");
    document.body.style.overflow = "";
  }
});

/* ----------------------------------- slider header--------------------------------------- */

const images = [
  "./images/header/banner1 (1).webp",
  "./images/header/banner1 (2).webp",
];

let current = 0;
const dots = document.querySelectorAll(".hero-dots .dot");
let sliderTimer;

function updateSlider() {
  const isEven = current % 2 === 0;
  leftDiv.src = images[isEven ? 0 : 1];
  rightDiv.src = images[isEven ? 1 : 0];
  updateDots();
}

function updateDots() {
  const activeIndex = current % dots.length;
  dots.forEach((dot, i) => {
    if (i === activeIndex) {
      dot.classList.remove("opacity-30");
    } else {
      if (!dot.classList.contains("opacity-30"))
        dot.classList.add("opacity-30");
    }
  });
}

updateSlider();

function startAutoSlide() {
  sliderTimer = setInterval(() => {
    current = (current + 1) % dots.length;
    updateSlider();
  }, 3000);
}

function resetAutoSlide() {
  clearInterval(sliderTimer);
  startAutoSlide();
}

startAutoSlide();

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    current = i;
    updateSlider();
    resetAutoSlide();
  });
});

/* ---------------------------------------categories------------------------------------------- */
const active = [
  {
    id: 1,
    title: "العناية بالجسم",
    count: 55,
    image: "./images/categories/body.png",
  },
  {
    id: 2,
    title: "العناية بالشعر",
    count: 55,
    image: "./images/categories/haire.png",
  },
  {
    id: 3,
    title: "العناية بالبشرة",
    count: 55,
    image: "./images/categories/face.png",
  },
  {
    id: 4,
    title: "اليدين والقدمين",
    count: 55,
    image: "./images/categories/hands.png",
  },
  {
    id: 5,
    title: "المكياج",
    count: 55,
    image: "./images/categories/mkyage.png",
  },
  {
    id: 6,
    title: "العطور",
    count: 55,
    image: "./images/categories/perfoum.png",
  },
];

/* categories */
active.forEach((item) => {
  content += `            <div
                  class="group bg-thirdColor pb-3 px-4  md:hover:[scale:0.8] transition-all [transition-duration:500ms] shadow rounded flex flex-col items-center">
                  <img src=${item.image}  alt="Card Image"
                    class="w-[170px]  h-[141px] object-fit mt-[-40px] opacity-100 transition-all [transition-duration:500ms] md:group-hover:[scale:1.2]">
                  <p class="text-center  font-medium text-[20.67px] leading-[1.2] mt-2 whitespace-nowrap">
                     ${item.title}
                  </p>
                  <p class="text-[12px] md:text-[16px] mb-1 text-[#202020] font-normal text-center opacity-60">
                    ${item.count}
                  </p>
                </div>
`;
});
displayCard.innerHTML = content;

Array(6)
  .fill("")
  .forEach(() => {
    seller += `
         <div
                  class="group bg-white pb-3 px-1 relative p-[10px] shadow-[0_0_7.89px_0_#0000000F] rounded flex flex-col items-center"
                >
                  <div class="me-auto px-1 text-white bg-[#BD1C1C]">10%-</div>
                  <img
                    src="./images/categories/serium.png"
                    alt="serium Image"
                    class="w-full object-contain"
                  />
                  <div class="flex mt-2 gap-1">
                    <img
                      src="./images/categories/Vector.png"
                      alt="stars Image"
                      class="object-contain w-4 h-4"
                    />
                    <img
                      src="./images/categories/Vector.png"
                      alt="stars Image"
                      class="object-contain w-4 h-4"
                    />
                    <img
                      src="./images/categories/Vector.png"
                      alt="stars Image"
                      class="object-contain w-4 h-4"
                    />
                    <img
                      src="./images/categories/Vector.png"
                      alt="stars Image"
                      class="object-contain w-4 h-4"
                    />
                    <img
                      src="./images/categories/Vector.png"
                      alt="stars Image"
                      class="object-contain w-4 h-4"
                    />
                  </div>
                  <p class="text-mainColor">العناية</p>
                  <p class="text-center text-[16px] font-[500]">
                    سيروم عناية بالبشرة
                  </p>

                  <div class="flex flex-row gap-2">
                    <p
                      class="text-center text-[14px] font-[500] text-mainColor"
                    >
                      140 ر.س
                    </p>
                    <p
                      class="text-center text-[14px] font-[400] text-[#1E251996] relative inline-block"
                    >
                      <span class="relative z-10">180 ر.س</span>
                      <span
                        class="absolute inset-0 top-1/2 border-t border-[#1E251996]"
                      ></span>
                    </p>
                  </div>
                  <button
                    class="bg-[#597445] p-2 mt-4 text-white w-full text-center flex justify-center items-center"
                  >
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16035 9.96924C3.40838 9.96924 2.79883 10.5788 2.79883 11.3308C2.79883 12.0827 3.40841 12.6923 4.16035 12.6923C4.91231 12.6923 5.52187 12.0827 5.52187 11.3308C5.5219 10.5788 4.91231 9.96924 4.16035 9.96924ZM4.16035 12.0872C3.7426 12.0872 3.40395 11.7485 3.40395 11.3308C3.40395 10.913 3.7426 10.5744 4.16035 10.5744C4.5781 10.5744 4.91674 10.913 4.91674 11.3308C4.91677 11.7485 4.5781 12.0872 4.16035 12.0872Z" fill="white"/>
<path d="M9.90937 9.96924C9.15741 9.96924 8.54785 10.5788 8.54785 11.3308C8.54785 12.0827 9.15744 12.6923 9.90937 12.6923C10.6613 12.6923 11.2709 12.0827 11.2709 11.3308C11.2709 10.5788 10.6613 9.96924 9.90937 9.96924ZM9.90937 12.0872C9.49162 12.0872 9.15298 11.7485 9.15298 11.3308C9.15298 10.913 9.49162 10.5744 9.90937 10.5744C10.3271 10.5744 10.6658 10.913 10.6658 11.3308C10.6658 11.7485 10.3271 12.0872 9.90937 12.0872Z" fill="white"/>
<path d="M12.9799 2.02719C12.9169 1.95836 12.8307 1.91528 12.7379 1.90616L2.88948 1.77L2.61718 0.937949C2.42534 0.381729 1.90448 0.00622558 1.31615 0H0.302563C0.135457 0 0 0.135457 0 0.302563C0 0.469669 0.135457 0.605126 0.302563 0.605126H1.31615C1.64512 0.612394 1.93479 0.82363 2.04231 1.13462L3.96358 6.92869L3.81231 7.27663C3.64359 7.71173 3.69426 8.20143 3.94847 8.59277C4.20024 8.97714 4.62381 9.21435 5.08308 9.22816H10.9679C11.135 9.22816 11.2705 9.0927 11.2705 8.9256C11.2705 8.75849 11.135 8.62304 10.9679 8.62304H5.08306C4.82369 8.61655 4.58495 8.48011 4.44767 8.25995C4.31192 8.04249 4.28404 7.77459 4.37204 7.53379L4.49307 7.26149L10.862 6.59584C11.5616 6.51879 12.1371 6.00997 12.2992 5.32507L13.0254 2.28432C13.0581 2.19676 13.0407 2.09828 12.9799 2.02719ZM11.7092 5.18895C11.611 5.62983 11.2366 5.95504 10.7864 5.99074L4.49307 6.64124L3.08615 2.37513L12.3597 2.51128L11.7092 5.18895Z" fill="white"/>
</svg>

                    <p class="mr-2">أضف للسلة</p>
                  </button>
                </div>

  `;
  });

displayCardSeller.innerHTML = seller;

/* ---------------------------------------slider ------------------------------------------- */

const taps = document.querySelectorAll(".operations__tab");
const tabsContainar = document.querySelector(".operations__tab-container");
const tapContant = document.querySelectorAll(".operations__content");

tabsContainar.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;
  //Active tab
  taps.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");
  //Active Content
  tapContant.forEach((tc) =>
    tc.classList.remove("operations__content--active")
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
// ---------------------------
// 1) DATA OBJECT
// ---------------------------
const categories = {
  1: [
    {
      img: "./images/slider/productOne/photo.png",
      title: "ماسكرا الورماسكرا الورا مضادة للمياه",
      price: 140,
      old: 110,
    },
    {
      img: "./images/slider/productOne/maskara2.png",
      title: "ماسكرا مايبيلين سكاي هاي",
      price: 130,
      old: 120,
    },
    {
      img: "./images/slider/productOne/maskara3.png",
      title: "ماسكرا مايبيلين سكاي هاي",
      price: 150,
      old: 135,
    },
  ],

  2: [
    {
      img: "./images/slider/productTwo/photo2 (3).png",
      title: "كريم اساس الورا عالي التغطية",
      price: 140,
      old: 110,
    },
    {
      img: "./images/slider/productTwo/cremeasas2.png",
      title: "كريم اساس شارلوت تيلبري",
      price: 130,
      old: 120,
    },
    {
      img: "./images/slider/productTwo/ceremasam3.png",
      title: "كريم اساس كاترس",
      price: 150,
      old: 135,
    },
  ],

  3: [
    {
      img: "./images/slider/productThere/photo2 (2).png",
      title: " حمرة شفاه ديور ",
      price: 140,
      old: 110,
    },
    {
      img: "./images/slider/productThere/dior-2.png",
      title: " حمرة شفاة الورا",
      price: 130,
      old: 120,
    },
    {
      img: "./images/slider/productThere/dior-3.png",
      title: "حمرة شفاة ماك  ",
      price: 150,
      old: 135,
    },
  ],

  4: [
    {
      img: "./images/slider/productFour/phto4.png",
      title: " حمرة شفاه ديور ",
      price: 140,
      old: 110,
    },
    {
      img: "./images/slider/productFour/mekiage-2.jpg",
      title: " حمرة خدود شي جلام ",
      price: 130,
      old: 120,
    },
    {
      img: "./images/slider/productFour/mekiage-3.png",
      title: " حمرة خدود نوت ",
      price: 150,
      old: 135,
    },
  ],

  5: [
    {
      img: "./images/slider/productFive/photo2 (1).png",
      title: "ايشاود الورا  ",
      price: 140,
      old: 110,
    },
    {
      img: "./images/slider/productFive/shadow-2.png",
      title: " ايشادو نارس ",
      price: 130,
      old: 120,
    },
    {
      img: "./images/slider/productFive/shaow-3.png",
      title: "  ايشادو رفلوشن",
      price: 150,
      old: 135,
    },
  ],
};

// ---------------------------
// 2) CREATE SLIDER FUNCTION
// ---------------------------
function createSlider(products, container) {
  container.innerHTML = `
    <div class="swiper-wrapper">
    
      ${products
      .map(
        (p) => `
        <div class="swiper-slide">
       
          <div class="flex flex-col gap-4">
          
          <div class="md:h-[460px] h-[250px] md:px-20 xl:px-22 relative ">
                <img src="${p.img}" class="w-full h-full object-cover rounded-lg" />
                <div class="absolute top-40 md:right-28 right-10">
                  <div class=" w-10 h-10 rounded-full border-2 border-black "></div>
                </div>
                <div class="absolute top-[180px] -right-7">
                  <div class=" md:w-[160px] w-[80px] h-[2px]  bg-black "></div>
                </div>
                <div class="absolute top-36 md:right-0 -right-2">
                 <p class="md:text-xl text-[12px] font-light text-black" >مضاده للمياه</p>
                </div>
                 <div class="absolute bottom-40 md:left-24 left-14">
                  <div class=" w-10 h-10 rounded-full border-2 border-black "></div>
                </div>
                <div class="absolute bottom-[180px] md:left-6 left-0">
                  <div class=" md:w-[100px] w-[80px] h-[2px]  bg-black "></div>
                </div>
                <div class="absolute bottom-48 md:left-3 left-2">
                 <p class="md:text-xl text-[12px] font-light text-black" > سواد فحمي</p>
                </div>
              </div>
            <div class="text-center">
              <p class="text-lg text-[#597445]">المكياج</p>
              <p class="text-xl text-secondColor">${p.title}</p>
              <p class="text-red-500 text-xl">${p.price} ر.س 
                <span class="line-through text-gray-500">${p.old} ر.س</span>
              </p>
            </div>
          </div>
        </div>
      `
      )
      .join("")}
    </div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-pagination"></div>  `;

  new Swiper(container, {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: container.querySelector(".swiper-button-next"),
      prevEl: container.querySelector(".swiper-button-prev"),
    },
  });
}

// 3) Tab Switch Logic

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const contents = document.querySelectorAll(".operations__content");

// Load first slider by default
createSlider(
  categories[1],
  document.querySelector(".operations__content--1 .slider-container")
);

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;

  // Activate Tab
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  // Activate Content
  contents.forEach((c) => c.classList.remove("operations__content--active"));
  const activeContent = document.querySelector(
    `.operations__content--${clicked.dataset.tab}`
  );
  activeContent.classList.add("operations__content--active");

  // Create Slider
  const container = activeContent.querySelector(".slider-container");
  createSlider(categories[clicked.dataset.tab], container);
});
