function scrollToElement(elementId) {
  var targetElement = document.getElementById(elementId);

  if (targetElement) {
    var offsetTop = targetElement.offsetTop -100;
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




