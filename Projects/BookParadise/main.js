$(document).ready(function() {
	$("[data-target]").click(function() {
		$("#overlay").show();
	});
	$(".close-modal").click(function() {
		$("#overlay").hide();
		$("#modal1").hide();
		$("#modal2").hide();
		$("#modal3").hide();
		$("#modal4").hide();
		$("#modal5").hide();
		$("#modal6").hide();
		$("#modal7").hide();
		$("#modal8").hide();
	});
	$(".modal1").click(function() {
		$("#modal1").show();
	});
	$(".modal2").click(function() {
		$("#modal2").show();
	});
	$(".modal3").click(function() {
		$("#modal3").show();
	});
	$(".modal4").click(function() {
		$("#modal4").show();
	});
	$(".modal5").click(function() {
		$("#modal5").show();
	});
	$(".modal6").click(function() {
		$("#modal6").show();
	});
	$(".modal7").click(function() {
		$("#modal7").show();
	});
	$(".modal8").click(function() {
		$("#modal8").show();
	});
});

// Contact Form Validation
function validate() {
	var name = document.getElementById("name").value;
	var subject = document.getElementById("subject").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");
	error_message.style.padding = "10px";
	var text;
	// Asian names can three-letter names such as Lee or Mae hence limit >=3
	if(name.length <= 2) {
		text = "Please Enter Valid Name (Minimum 3 characters)";
		error_message.innerHTML = text;
		return false;
		// alert("Minimum 3 characters.");
	}
	if(subject.length < 10) {
		text = "Please Enter Correct Subject (Minimum 10 characters)";
		error_message.innerHTML = text;
		return false;
		// alert("Minimum 10 characters.");
	}
	if(isNaN(phone) || phone.length != 10) {
		text = "Please Enter Valid Phone Number (10-digits)";
		error_message.innerHTML = text;
		return false;
		// alert("10-digits");
	}
	// Message should have more than 140 characters
	if(message.length <= 140) {
		text = "Please Enter more than 140 characters.";
		error_message.innerHTML = text;
		return false;
		// alert("Minimum 141 characters.");
	}
	// Message should have less than 500 characters
	if(message.length >= 500) {
		text = "Please Enter less than 500 characters.";
		error_message.innerHTML = text;
		return false;
		// alert("Minimum 499 characters.");
	}
	// This alert message will appear if all form fields are filled correctly
	alert("Form submitted successfully! Thank you for contacting us.")
	return true;
}
// Search Functionality
function filter() {
	var filterValue, input, ProductList, ProductName, h4, i;
	input = document.getElementById("search");
	filterValue = input.value.toUpperCase();
	ProductList = document.getElementById("product-list");
	ProductName = ProductList.getElementsByClassName("col-4");
	for( i = 0; i < ProductName.length; i++) {
		h4 = ProductName[i].getElementsByTagName('h4')[0];
		// In Search if typed string matches with the element name
		if(h4.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
			ProductName[i].style.display = "";
		}
		else {
			ProductName[i].style.display = "none";
		}
	}
}
// Sort product by price
function sortList() {
	var ProductList, ProductName, i, switching, b, c, shouldSwitch;
	ProductList = document.getElementById("product-list");
	ProductName = ProductList.getElementsByClassName("col-4");
	switching = true; //boolean true
	while(switching) {
		switching = false;
		//loop is running through each product
		for(i = 0; i < (ProductName.length - 1); i++) {
			shouldSwitch = false;
			b = ProductName[i].getElementsByClassName("price")[0].innerHTML;
			c = ProductName[i + 1].getElementsByClassName("price")[0].innerHTML;
			// Condition to check price for each product item
			if(Number(b) > Number(c)) {
				shouldSwitch = true;
				break;
			}
		}
		// Each product element will switch with next product element based on
		// product price sorting
		if(shouldSwitch) {
			ProductName[i].parentNode.insertBefore(ProductName[i + 1], ProductName[i]);
			switching = true;
		}
	}
}