// Get the modal
var modal = document.getElementById("project-modal");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("modal-close")[0];

// When the user clicks on the button, open the modal
function OpenModal(projectToShow) 
{
  modal.style.display = "block";
  
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() 
{
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event)
 {
  if (event.target == modal) 
  {
    modal.style.display = "none";
  }
}