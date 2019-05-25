
function converting(){
    var dollar = document.getElementById("dollar").value;
	var dollarYenRate = 110;
	var conversion = document.getElementById("conversion");
	var convert = dollar * dollarYenRate; 
    conversion.innerText = convert;
};
