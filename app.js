function scrollToElement(elementId) {
  var targetElement = document.getElementById(elementId);

  if (targetElement) {
    var offsetTop = targetElement.offsetTop - 115;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

// Get a reference to the iframe
var iframe = document.getElementById("contform");

// Check if the iframe has loaded
iframe.addEventListener("load", function () {
  // Access the iframe's content document
  var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  // Get the form element within the iframe
  var form = iframeDoc.getElementById("contact-form"); // Replace with your form's ID
  var thank = document.getElementById("thank");
  // Add a submit event listener to the form
  form.addEventListener("submit", function (event) {
    iframe.style.display = "none";
    thank.removeAttribute("hidden");
  });
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function vanitalinkedin() {
  var linkToOpen = "https://www.linkedin.com/in/vanita-prasad-92310551/";
  window.open(linkToOpen, "_blank");
}
function rajneeshlinkedin() {
  var linkToOpen = "https://www.linkedin.com/in/rajneesh-prasad-29419312/";
  window.open(linkToOpen, "_blank");
}
function bhaviklinkedin() {
  var linkToOpen =
    "https://www.linkedin.com/in/bhavikkumar-kathrani-11255013b/";
  window.open(linkToOpen, "_blank");
}
function gocontact() {
  var linkToOpen = "contact.html";
  window.location.href(linkToOpen);
}

function xeon() {
  var linkToOpen = "./assets/testimonials/4.png";
  window.open(linkToOpen, "_blank");
}
function stagot() {
  var linkToOpen = "./assets/testimonials/3.png";
  window.open(linkToOpen, "_blank");
}
function transpeck() {
  var linkToOpen = "./assets/testimonials/1.png";
  window.open(linkToOpen, "_blank");
}
function pepsico() {
  var linkToOpen = "./assets/testimonials/2.jpg";
  window.open(linkToOpen, "_blank");
}
function kspHydro() {
  var linkToOpen = "./assets/testimonials/kspHydro.jpg";
  window.open(linkToOpen, "_blank");
}
function greenEnv() {
  var linkToOpen = "./assets/testimonials/greenEnvServices.jpg";
  window.open(linkToOpen, "_blank");
}

function addPaddingForMobile() {
  var targetElement = document.getElementById("revynav");
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (screenWidth < 600) {
    // Add padding for smartphones
    targetElement.style.paddingTop = "2%";
  } else {
    // Reset padding for larger screens
    targetElement.style.paddingTop = "1%";
  }
}

// Initial call to set padding on page load
addPaddingForMobile();

var stoppedCar = false; // carousel is sliding
var iid;
var ni;
function carouselClick(n) {
  ni = n;
  if (!stoppedCar) {
    stoppedCar = true;
    iid = setInterval(clickCarButton, 3000); // Start the interval
  } else {
    stoppedCar = false;
    clearInterval(iid); // Stop the interval
  }
}

function clickCarButton(n) {
  if (ni == 1) document.getElementById(`gotocar1`).click();
  else if (ni == 2) document.getElementById(`gotocar2`).click();
  else if (ni == 3) document.getElementById(`gotocar3`).click();
  else if (ni == 4) document.getElementById(`gotocar4`).click();
}
