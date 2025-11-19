//Shipment Tracking
function trackShipment() {
  let trackingNumber = document.getElementById("trackingNumber").value;

  if (trackingNumber.trim() === "") {
    alert("Please enter a tracking number.");
    return;
  }

  let statuses = [
    "Shipment received at the warehouse.",
    "Shipment is being prepared for dispatch.",
    "Shipment in transit.",
    "Shipment arrived at destination hub.",
    "Shipment out for delivery.",
    "Shipment delivered successfully!"
  ];

  let randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  document.getElementById("result").innerHTML =
    `<h3>Tracking Number: ${trackingNumber}</h3>
     <p>Status: <b>${randomStatus}</b></p>`;
}

//Booking comfirmation
function confirmBooking(event) {
  event.preventDefault(); 
  alert("Your booking has been submitted! Thank you for using MGB Logistics.");
  event.target.submit();
}


//Slideshow
let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }

  setTimeout(showSlides, 3500); 
}

document.addEventListener("DOMContentLoaded", showSlides);


//Scroll Animation
document.addEventListener("scroll", () => {
  let elements = document.querySelectorAll(".animate");

  elements.forEach(el => {
    let position = el.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      el.classList.add("fade-in");
    }
  });
});


//Form Validation
function validateForm() {
  let inputs = document.querySelectorAll("input[required], textarea[required]");
  for (let input of inputs) {
    if (input.value.trim() === "") {
      alert("Please complete all required fields.");
      return false;
    }
  }
  return true;
}


//Mobile Menu
function toggleMenu() {
  let nav = document.getElementById("mobile-nav");
  nav.classList.toggle("show");
}


//Live date & time
function updateClock() {
  let now = new Date();
  document.getElementById("clock").innerHTML =
    now.toLocaleDateString() + " " + now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

//Gallery Lightbox
function openLightbox() {
  document.getElementById("lightbox").style.display = "block";
  slideIndexLB = 1;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

let slideIndexLB = 1;

function currentSlide(n) {
  showSlidesLB(slideIndexLB = n);
}

function changeSlide(n) {
  showSlidesLB(slideIndexLB += n);
}

function showSlidesLB(n) {
  let slides = document.getElementsByClassName("slide");

  if (n > slides.length) { slideIndexLB = 1 }
  if (n < 1) { slideIndexLB = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexLB - 1].style.display = "block";
}

function openLightbox(imageSrc) {
  document.getElementById("lightbox").src = imageSrc;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
