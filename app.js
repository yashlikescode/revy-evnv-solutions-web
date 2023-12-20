  // Get a reference to the iframe
  var iframe = document.getElementById('contform');

  // Check if the iframe has loaded
  iframe.addEventListener('load', function () {
    // Access the iframe's content document
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Get the form element within the iframe
    var form = iframeDoc.getElementById('contform'); // Replace with your form's ID
    var thank = document.getElementById('thank');
    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
      console.log('detected, submit')
      iframe.style.display='none';
      thank.removeAttribute("hidden");
    });
  });