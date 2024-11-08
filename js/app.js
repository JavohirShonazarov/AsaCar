// Query Selectors
const menuLine = document.querySelectorAll(".line");
const menubtn = document.querySelector(".menu-btn");
const lan = document.querySelector(".uppercase");
const arrow = document.querySelector("#arrow");
const menu = document.querySelector(".menu");
const menuclick = document.querySelector("#menu-btn");
const menuExit = document.querySelector("#menu-exit");
const blurExit = document.querySelector("#blur");
const coruselNext = document.querySelector(".corusel-next");
const coruselPrev = document.querySelector(".corusel-prev");
const coruselFlex = document.querySelectorAll(".corusel-flex");
const coruselBox = document.querySelector(".corusel-box");
const tel = document.querySelector(".tel");
const telAcide = document.querySelector(".tel-acide");
const displayVideo = document.querySelector("#video");
const popupVideo = document.querySelector(".popup-video");
const video = document.querySelector(".popup-video video");
const videoClose = document.querySelector(".video-exit");
// const boxicon = document.querySelectorAll(".box-icon");

const news = document.querySelector(".news");
const scrollPopUp = document.querySelector(".scroll-pop-up");
const scrollBoxClose = document.querySelector(".scroll-box-close");









// Event Listeners
if (news && scrollPopUp) {
  news.addEventListener("mouseover", () => {
    scrollPopUp.style.display = "flex";
  });
}

if (scrollBoxClose) {
  scrollBoxClose.addEventListener("click", () => {
    scrollPopUp.remove();
  });
}

if (scrollPopUp) {
  scrollPopUp.addEventListener("click", () => {
    scrollPopUp.remove();
  });
}

if (tel && telAcide) {
  tel.addEventListener("click", () => {
    if (tel.innerHTML.trim() === '<i class="fa-solid fa-xmark"></i>') {
      tel.innerHTML = '<i class="fa-solid fa-phone"></i>';
      telAcide.style.display = "none";
    } else {
      tel.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      telAcide.style.display = "block";
    }
  });
}

if (displayVideo && popupVideo && video) {
  displayVideo.addEventListener("click", () => {
    popupVideo.style.display = "grid";
    video.play();
  });
}

if (videoClose && popupVideo && video) {
  videoClose.addEventListener("click", () => {
    popupVideo.style.display = "none";
    video.pause();
  });
}

if (menuclick) {
  menuclick.addEventListener("click", () => {
    menu.style.transform = "perspective(1000px) rotateY(0deg)";
  });
}

if (menuExit) {
  menuExit.addEventListener("click", () => {
    menu.style.transform = "perspective(1000px) rotateY(-90deg)";
  });
}

if (blurExit) {
  blurExit.addEventListener("click", () => {
    menu.style.transform = "perspective(1000px) rotateY(-90deg)";
  });
}

if (menubtn && menuLine.length > 0) {
  menubtn.addEventListener("mouseover", () => {
    menuLine.forEach((e) => {
      e.style.width = "100%";
      e.style.background = "#203e6f";
    });
  });

  menubtn.addEventListener("mouseleave", () => {
    menuLine.forEach((e) => {
      e.style.width = "";
    });
  });
}

const ul =document.querySelector(".nav-links ul")

menubtn.addEventListener("click", () => {
  if (ul.style.display === "none") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
});



if (lan && arrow) {
  lan.addEventListener("mouseover", () => {
    arrow.style.transform = "rotate(180deg)";
  });

  lan.addEventListener("mouseleave", () => {
    arrow.style.transform = "";
  });
}

// Swiper Initialization
const swiper = new Swiper(".swiper", { // Initialize on '.swiper' not '.swiper-wrapper'
  direction: "horizontal",
  loop: true,
  effect: "fade",
  autoplay: {                // Autoplay settings
    delay: 5000,             // 5 seconds delay between slides
    disableOnInteraction: false, // Keep autoplay running after user interaction
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}">0${index + 1}</span>`;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});








