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

function addPaddingForMobile() {
  var targetElement = document.getElementById('revynav');
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth < 600) {
    // Add padding for smartphones
    targetElement.style.paddingTop = '2%';
  } else {
    // Reset padding for larger screens
    targetElement.style.paddingTop = '1%';
  }
}

// Initial call to set padding on page load
addPaddingForMobile();

// Listen for window resize events to update padding dynamically
window.addEventListener('resize', addPaddingForMobile);


window.addEventListener('scroll', function() {
  var textElement6 = document.querySelector('#home-article');
  var rect6 = textElement6.getBoundingClientRect();
  var navInd6 = document.getElementById("nav-home");
  if (rect6.top <= window.innerHeight && rect6.bottom >= window.innerHeight) {
    navInd6.style.color = "#66bc46";
    navInd6.style.textDecoration = "underline";
  } else {
    navInd6.style.color = "black";
    navInd6.style.textDecoration = "none";

  }
});
window.addEventListener('scroll', function() {
  var textElement6 = document.querySelector('#about-article');
  var rect6 = textElement6.getBoundingClientRect();
  var navInd6 = document.getElementById("nav-about");
  if (rect6.top <= window.innerHeight && rect6.bottom >= window.innerHeight) {
    navInd6.style.color = "#66bc46";
    navInd6.style.textDecoration = "underline";
  } else {
    navInd6.style.color = "black";
    navInd6.style.textDecoration = "none";
  }
});
window.addEventListener('scroll', function() {
  var textElement6 = document.querySelector('#service-article');
  var rect6 = textElement6.getBoundingClientRect();
  var navInd6 = document.getElementById("nav-services");
  if (rect6.top <= window.innerHeight && rect6.bottom >= window.innerHeight) {
    navInd6.style.color = "#66bc46";
    navInd6.style.textDecoration = "underline";
  } else {
    navInd6.style.color = "black";
    navInd6.style.textDecoration = "none";
  }
});
window.addEventListener('scroll', function() {
  var textElement6 = document.querySelector('#gallery-article');
  var rect6 = textElement6.getBoundingClientRect();
  var navInd6 = document.getElementById("nav-gallery");
  if (rect6.top <= window.innerHeight && rect6.bottom >= window.innerHeight) {
    navInd6.style.color = "#66bc46";
    navInd6.style.textDecoration = "underline";
  } else {
    navInd6.style.color = "black";
    navInd6.style.textDecoration = "none";
  }
});
window.addEventListener('scroll', function() {
  var textElement6 = document.querySelector('#contact-us-article');
  var rect6 = textElement6.getBoundingClientRect();
  var navInd6 = document.getElementById("nav-contactus");
  if (rect6.top <= window.innerHeight) {
    navInd6.style.color = "#66bc46";
    navInd6.style.textDecoration = "underline";
  } else {
    navInd6.style.color = "black";
    navInd6.style.textDecoration = "none";
  }
});