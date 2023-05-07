// Get the modal
var modal = document.getElementById("modal_container");

// Get the button that opens the modal
var btn = document.getElementById("open");

// Get the <span> element that closes the modal
var btn2 = document.getElementById("close");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
btn2.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
