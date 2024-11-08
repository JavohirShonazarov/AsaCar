// Sahifadagi ma'lumotlar
const itemsPerPage = 6;  // Har bir sahifa uchun 3 ta blok ko'rsatamiz
let currentPage = 1;

// Har bir elementda maxsus HTML tuzilgan
const items = [
    {
        imgSrc: "img/new/1725175029.jpg",
        title: "O`zbekiston Respublikasi Mustaqillik kuni muborak bo`lsin!",
        description: "O`zbekiston Respublikasi Mustaqillik kuni muborak bo`lsin!",
        link: "batafsil.html"
    },
    // Keyingi itemlar...
    {
        imgSrc: "img/new/1721020596.jpg",
        title: "ONIX avtomobil uchun qulay to'lov rejasi",
        description: "ONIX avtomobil uchun qulay to'lov rejasi",
        link: "batafsil.html"
    },
    {
        imgSrc: "img/new/1721020265.jpg",
        title: "Tracker-2 avtomobil uchun qulay to'lov rejasi!",
        description: "UTracker-2 avtomobil uchun qulay to'lov rejasi!",
        link: "batafsil.html"
    },
    {
        imgSrc: "img/new/1718515401.jpg",
        title: "ASACAR autocenter jamoasi sizlarni muqaddas Qurbon Hayit bayrami bilan tabriklaydi!",
        description: "ASACAR autocenter jamoasi sizlarni muqaddas Qurbon Hayit bayrami bilan tabriklaydi!",
        link: "batafsil.html"
    },
    {
        imgSrc: "img/new/1715250941.jpg",
        title: "ASACAR Autocenter jamoasi barcha Oʻzbekiston aholisini Xotira va Qadrlash kuni bilan tabriklaydi!",
        description: "ASACAR Autocenter jamoasi barcha Oʻzbekiston aholisini Xotira va Qadrlash kuni bilan tabriklaydi!",
        link: "batafsil.html"
    },
    {
        imgSrc: "img/new/1712669028.jpg",
        title: "",
        description: "",
        link: "batafsil.html"
    },

    // ===========
    {
      imgSrc: "img/new/1715250941.jpg",
      title: "ASACAR Autocenter jamoasi barcha Oʻzbekiston aholisini Xotira va Qadrlash kuni bilan tabriklaydi!",
      description: "ASACAR Autocenter jamoasi barcha Oʻzbekiston aholisini Xotira va Qadrlash kuni bilan tabriklaydi!",
      link: "batafsil.html"
  },
  {
    imgSrc: "img/new/1712669028.jpg",
    title: "",
    description: "",
    link: "batafsil.html"
},
{
  imgSrc: "img/new/1721020265.jpg",
  title: "Tracker-2 avtomobil uchun qulay to'lov rejasi!",
  description: "UTracker-2 avtomobil uchun qulay to'lov rejasi!",
  link: "batafsil.html"
},
{
  imgSrc: "img/new/1718515401.jpg",
  title: "ASACAR autocenter jamoasi sizlarni muqaddas Qurbon Hayit bayrami bilan tabriklaydi!",
  description: "ASACAR autocenter jamoasi sizlarni muqaddas Qurbon Hayit bayrami bilan tabriklaydi!",
  link: "batafsil.html"
},
{
  imgSrc: "img/new/1725175029.jpg",
  title: "O`zbekiston Respublikasi Mustaqillik kuni muborak bo`lsin!",
  description: "O`zbekiston Respublikasi Mustaqillik kuni muborak bo`lsin!",
  link: "batafsil.html"
},
// Keyingi itemlar...
{
  imgSrc: "img/new/1721020596.jpg",
  title: "ONIX avtomobil uchun qulay to'lov rejasi",
  description: "ONIX avtomobil uchun qulay to'lov rejasi",
  link: "batafsil.html"
},
    // Qolgan elementlarni ham qo'shing
];

const itemList = document.getElementById("item-list");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageNumbers = document.getElementById("page-numbers");

const totalPages = Math.ceil(items.length / itemsPerPage);

// Sahifadagi elementlarni ko'rsatish
function displayItems(page) {
    itemList.innerHTML = "";

    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    const paginatedItems = items.slice(start, end);

    paginatedItems.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("new-box");
        div.innerHTML = `
            <div class="new-img">
                <img src="${item.imgSrc}" alt="">
            </div>
            <a class="new-title" href="${item.link}">${item.title}</a>
            <p class="new-p">${item.description}</p>
            <a class="new-a" href="${item.link}">BATAFSIL <i class="fa-solid fa-arrow-right"></i></a>
        `;
        itemList.appendChild(div);
    });

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

// Sahifa raqamlarini yaratish
function createPageNumbers() {
    pageNumbers.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement("div");
        pageNumber.textContent = i;
        pageNumber.classList.add("page-number");

        if (i === currentPage) {
            pageNumber.classList.add("active");
        }

        pageNumber.addEventListener("click", () => {
            currentPage = i;
            updatePagination();
        });

        pageNumbers.appendChild(pageNumber);
    }
}

// Paginationni yangilash
function updatePagination() {
    displayItems(currentPage);
    createPageNumbers();
}

// Tugmalarni bosish
prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
    }
});

// Dastlabki yuklash
updatePagination();
