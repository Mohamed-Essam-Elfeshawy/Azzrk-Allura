const displayCard = document.querySelector(".allCard .displayCard");
const displayCardSeller = document.querySelector(
  ".allCardSeller .displayCardSeller"
);
const leftDiv = document.querySelector(".grid > div:nth-child(1) img");
const rightDiv = document.querySelector(".grid > div:nth-child(3) img");
let content = "";
let seller = "";

// console.log(displayCardSeller);

/* slider header */

const images = [
  "./images/header/banner1 (1).webp",
  "./images/header/banner1 (2).webp",
];

let current = 0;

function updateSlider() {
  leftDiv.src = images[current];
  rightDiv.src = images[1 - current];
}

updateSlider();

setInterval(() => {
  current = 1 - current;
  updateSlider();
}, 3000);


const categories = [
  {
    id: 1,
    title: "العناية بالجسم",
    count: 55,
    image: "../../src/images/categories/body.png",
  },
  {
    id: 2,
    title: "العناية بالشعر",
    count: 55,
    image: "../../src/images/categories/haire.png",
  },
  {
    id: 3,
    title: "العناية بالبشرة",
    count: 55,
    image: "../../src/images/categories/face.png",
  },
  {
    id: 4,
    title: "اليدين والقدمين",
    count: 55,
    image: "../../src/images/categories/hands.png",
  },
  {
    id: 5,
    title: "المكياج",
    count: 55,
    image: "../../src/images/categories/mkyage.png",
  },
  {
    id: 6,
    title: "العطور",
    count: 55,
    image: "../../src/images/categories/perfoum.png",
  },
];

/* categories */
categories.forEach((item) => {
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
                    src="../../src/images/categories/serium.png"
                    alt="serium Image"
                    class="w-full object-contain"
                  />
                  <div class="flex mt-2 gap-1">
                    <img
                      src="../../src/images/categories/Vector.png"
                      alt="stars Image"
                      class="object-contain w-4 h-4"
                    />
                    <img
                      src="../../src/images/categories/Vector.png"
                      alt="stars Image"
                      class="object-contain w-4 h-4"
                    />
                    <img
                      src="../../src/images/categories/Vector.png"
                      alt="stars Image"
                      class="object-contain w-4 h-4"
                    />
                    <img
                      src="../../src/images/categories/Vector.png"
                      alt="stars Image"
                      class="object-contain w-4 h-4"
                    />
                    <img
                      src="../../src/images/categories/Vector.png"
                      alt="stars Image"
                      class="object-contain w-4 h-4"
                    />
                  </div>
                  <p class="text-mainColor">العناية</p>
                  <p class="text-center text-[16px] font-[500]">
                    سيروم عناية بالبشرة
                  </p>

                  <div class="flex flex-row">
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
                    class="bg-[#597445] p-2 mt-4 text-white w-full text-center flex justify-center"
                  >
                    <img
                      src="../src/images/categories/cart.png"
                      class="object-contain size-6"
                      alt="cart"
                    />
                    <p class="mr-2">أضف للسلة</p>
                  </button>
                </div>

  `;
  });

displayCardSeller.innerHTML = seller;

