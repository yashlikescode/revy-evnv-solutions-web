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

// Listen for window resize events to update padding dynamically
window.addEventListener("resize", addPaddingForMobile);

document.addEventListener("DOMContentLoaded", function () {
  const changingText = document.getElementById("changingText");
  const texts = [
    "Are You Concerned About Your Biogas Plant's Efficiency?",
    "Are You Facing Challenges in STP Management?",
    "Having Issues in  ETP Operations?",
  ];

  let index = 0;

  function changeText() {
    changingText.textContent = texts[index];
    index = (index + 1) % texts.length;
  }

  function fadeInOut() {
    changingText.style.opacity = 1;
    setTimeout(function () {
      changingText.style.opacity = 0;
      setTimeout(changeText, 1000); // Change text after fade out
      setTimeout(fadeInOut, 1000); // Call fadeInOut again after changing text
    }, 3000); // Wait for 3 seconds before starting fade out
  }

  fadeInOut(); // Start the fading in and out process
});
