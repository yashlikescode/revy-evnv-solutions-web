function scrollToElement(elementId) {
  var targetElement = document.getElementById(elementId);

  if (targetElement) {
    var offsetTop = targetElement.offsetTop -115;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

  // Get a reference to the iframe
  var iframe = document.getElementById('contform');

  // Check if the iframe has loaded
  iframe.addEventListener('load', function () {
    // Access the iframe's content document
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Get the form element within the iframe
    var form = iframeDoc.getElementById('contact-form'); // Replace with your form's ID
    var thank = document.getElementById('thank');
    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
      iframe.style.display='none';
      thank.removeAttribute("hidden");
    });
  });


  let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})




// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function vanitalinkedin() {
  var linkToOpen = 'https://www.linkedin.com/in/vanita-prasad-92310551/';
  window.open(linkToOpen, '_blank');
}
function rajneeshlinkedin() {
  var linkToOpen = 'https://www.linkedin.com/in/rajneesh-prasad-29419312/';
  window.open(linkToOpen, '_blank');
}
function bhaviklinkedin() {
  var linkToOpen = 'https://www.linkedin.com/in/bhavikkumar-kathrani-11255013b/';
  window.open(linkToOpen, '_blank');
}

function xeon() {
  var linkToOpen = './assets/testimonials/4.png';
  window.open(linkToOpen, '_blank');
}
function stagot() {
  var linkToOpen = './assets/testimonials/3.png';
  window.open(linkToOpen, '_blank');
}
function transpeck() {
  var linkToOpen = './assets/testimonials/1.png';
  window.open(linkToOpen, '_blank');
}
function pepsico() {
  var linkToOpen = './assets/testimonials/2.jpg';
  window.open(linkToOpen, '_blank');
}