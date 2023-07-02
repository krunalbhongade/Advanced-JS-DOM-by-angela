document.addEventListener("DOMContentLoaded", function(event) { 
    var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function (event) {
           alert(event.target.innerHTML);
          });
      }
    });
