/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

  function myFunction4(){
  alert("Warning! Most Delicious Cupcakes!");
                        }

// When the user clicks on <div>, open the popup

function myFunction1() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
}

function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}

function myFunction3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}



$(document).ready(function(){
	$(".checkout").on("keyup", ".quantity", function(){
		var price = +$(".price").data("price");
		var quantity = +$(this).val();
		$("#total").text("$" + price * quantity);
	})
})

$(function(){
   $('#menu').click(function(){
    $('#photo').fadeOut();
    $('#photo').fadeIn();
  });
})

$(function(){
   $('#photo').click(function(){
    $('#photo').css('height', '500px');
   })
    $('#photo').css('width', '500px');
     $('#sp').hide();
     $('#submit').click(function(){
    $('#sp').show();
  });
    
})
