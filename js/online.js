const jismoniyShaxs = document.querySelector(".jis");
const yuridikshaxs = document.querySelector(".yur");
const firstSection = document.querySelector(".num1-section");
const secondSection = document.querySelector(".num2-section");
const thertSection = document.querySelector(".num3-section");
const fourthSection = document.querySelector(".num4-section");

const firstStick = document.querySelector(".num1-num2");
const secondStick = document.querySelector(".num2-num3");
const thertStick = document.querySelector(".num3-num4");

const firstStep = document.querySelector(".num1");
const secondStep = document.querySelector(".num2");
const thertStep = document.querySelector(".num3");
const fourthStep = document.querySelector(".num4");

const firstBtn = document.querySelector(".num1 button");
const secondBtn = document.querySelector(".num2 button");
const thertBtn = document.querySelector(".num3 button");
const fourthBtn = document.querySelector(".num4 button"); // For step 4

const carModel = document.querySelectorAll(".num2-box");
const moveToFour = document.querySelector(".keyin"); // Button to move to step 4
const formEl = document.querySelector(".form");

let currentStep = 1; // Start on step 1

// Helper function to reset steps and stick styles after a certain step
function resetStepsFrom(step) {
  if (step <= 1) {
    secondStep.classList.remove("selected");
    thertStep.classList.remove("selected");
    fourthStep.classList.remove("selected");
    firstStick.style.background = "";
    secondStick.style.background = "";
    thertStick.style.background = "";
    secondBtn.innerHTML = "2"; // Reset step number
    thertBtn.innerHTML = "3"; // Reset step number
    fourthBtn.innerHTML = "4"; // Reset step number
  }
  if (step === 2) {
    thertStep.classList.remove("selected");
    fourthStep.classList.remove("selected");
    secondStick.style.background = "";
    thertStick.style.background = "";
    thertBtn.innerHTML = "3";  // Reset step number
    fourthBtn.innerHTML = "4"; // Reset step number
  }
  if (step === 3) {
    fourthStep.classList.remove("selected");
    thertStick.style.background = "";
    fourthBtn.innerHTML = "4"; // Reset step number
  }
}

// Function to navigate to a specific step
function navigateToStep(step) {
  // Only allow backward navigation or staying on the same step
  if (step > currentStep) return;

  // Reset any steps after the clicked step
  resetStepsFrom(step);

  // Show the correct section based on step number
  if (step === 1) {
    firstSection.style.display = "block";
    secondSection.style.display = "none";
    thertSection.style.display = "none";
    fourthSection.style.display = "none";
    firstStep.classList.add("selected");
  }
  if (step === 2) {
    firstSection.style.display = "none";
    secondSection.style.display = "block";
    thertSection.style.display = "none";
    fourthSection.style.display = "none";
    firstStick.style.background = "#203e6f";
    secondStep.classList.add("selected");
    firstBtn.innerHTML = '<i class="fa-solid fa-check"></i>'; // Tick mark for step 1
  }
  if (step === 3) {
    secondSection.style.display = "none";
    thertSection.style.display = "block";
    fourthSection.style.display = "none";
    secondStick.style.background = "#203e6f";
    thertStep.classList.add("selected");
    secondBtn.innerHTML = '<i class="fa-solid fa-check"></i>'; // Tick mark for step 2
  }
  if (step === 4) {
    thertSection.style.display = "none";
    fourthSection.style.display = "block";
    thertStick.style.background = "#203e6f";
    fourthStep.classList.add("selected");
    thertBtn.innerHTML = '<i class="fa-solid fa-check"></i>'; // Tick mark for step 3
  }

  // Update the current step
  currentStep = step;
}

// Function to move to the next step (without skipping ahead)
function moveToNextStep() {
  currentStep++;
  if (currentStep === 2) {
    navigateToStep(2);
  } else if (currentStep === 3) {
    navigateToStep(3);
  } else if (currentStep === 4) {
    navigateToStep(4);
  }
}

// Event listeners for buttons to move forward
jismoniyShaxs.addEventListener("click", () => {
  if (currentStep === 1) {
    moveToNextStep(); // Move to step 2
  }
});
yuridikshaxs.addEventListener("click", () => {
  if (currentStep === 1) {
    moveToNextStep(); // Move to step 2
  }
});

// For car models
carModel.forEach((model) => {
  model.addEventListener("click", () => {
    if (currentStep === 2) {
      moveToNextStep(); // Move to step 3
    }
  });
});

// For the move-to-four button (step 4)
moveToFour.addEventListener("click", () => {
  if (currentStep === 3) {
    moveToNextStep(); // Move to step 4
  }
});

// Step buttons event listeners to navigate backward (only backward)
firstStep.addEventListener("click", () => {
  navigateToStep(1); // Allow moving to step 1
});
secondStep.addEventListener("click", () => {
  if (currentStep >= 2) {
    navigateToStep(2); // Allow moving back to step 2
  }
});
thertStep.addEventListener("click", () => {
  if (currentStep >= 3) {
    navigateToStep(3); // Allow moving back to step 3
  }
});
fourthStep.addEventListener("click", () => {
  if (currentStep >= 4) {
    navigateToStep(4); // Allow moving back to step 4
  }
});

// Form submission
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);
  console.log(data); // Handle form data here
});
