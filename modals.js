//getting modal opening buttons

var open = document.querySelectorAll('.modal-open');

open.forEach(function(btn) {
    btn.onclick = function() {
         var modal = btn.getAttribute('data-modal');
         
         document.getElementById(modal).style.display = "block";
    };             
});

var close = document.querySelectorAll('.modal-close');

close.forEach(function(btn) {
    btn.onclick = function() {
    };
});

window.onclick = function(e) {
    if(e.target.className === 'modal') {
        e.target.style.display = "none";
    }
};

$(function() {
    $('body').removeClass('fade-out');
});

//reference: var modal = btn.closest('.modal').style.display = "none";

// show image on click

document.querySelectorAll(".load-image idols").forEach((item) => {
    item.addEventListener("click", (event) => {
      const href = event.target.getAttribute("href");
      event.preventDefault();
      const newImage = document.createElement(".idols");
      newImage.setAttribute("src", href);
      document.body.insertBefore(newImage, event.target);
      event.target.remove();
    });
});