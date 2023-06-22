// NAVIGATION BAR
const menu = document.querySelector('#mobileMenu')
const menuAll = document.querySelector('.nbMenu')

menu.addEventListener('click', function(){
	menu.classList.toggle('is-active');
	menuAll.classList.toggle('active');
});


// SHOP FILTERS
function showFilters() {
	let filButton = document.querySelector('#filButton');
	let filterArea = document.querySelector('.filterArea');
	filterArea.classList.toggle('active');
	filButton.classList.toggle('active');
}


// CART - QUANTITY INCREMENTS
function increment1(){
	num1 = num1 + 1;
	document.getElementById('counter1').innerHTML = num1;
	updateItemTotal();
}
function decrement1(){
	if (num1 > 1) { // cannot have 0 or negative items
		num1 = num1 - 1;
		document.getElementById('counter1').innerHTML = num1;
	}
	updateItemTotal();
}
function increment2(){
	num2 = num2 + 1;
	document.getElementById('counter2').innerHTML = num2;
	updateItemTotal();
}
function decrement2(){
	if (num2 > 1) { // cannot have 0 or negative items
		num2 = num2 - 1;
		document.getElementById('counter2').innerHTML = num2;
	}
	updateItemTotal();
}

// CART - ITEM TOTALS
function updateItemTotal(){
	document.getElementById('item1').innerHTML = (document.getElementById('price1').innerHTML * document.getElementById('counter1').innerHTML).toFixed(2);
	document.getElementById('item2').innerHTML = (document.getElementById('price2').innerHTML * document.getElementById('counter2').innerHTML).toFixed(2);
	calculateTotals();
}


// CART - OVERALL TOTALS
function calculateTotals() {
	let item1 = Number(document.getElementById('item1').innerHTML); // using Number() so the total gets the sum, not the concatenated strings
	let item2 = Number(document.getElementById('item2').innerHTML);
	
	let total = (item1 + item2).toFixed(2); // toFixed(2) rounds the answer to 2 decimal places
	let gst = total * 3 / 23; //0.15;
	document.getElementById('subtotal').innerHTML = "&dollar;" + total;
	document.getElementById('totalCost').innerHTML = "&dollar;" + total; // assuming GST was already included
	document.getElementById('gst').innerHTML = "&dollar;" + gst.toFixed(2);
}

// CHECKOUT - VALIDATION
function validateForm() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let address = document.getElementById("address").value;
	let city = document.getElementById("city").value;
	let postCode = document.getElementById("postCode").value;
	let cardName = document.getElementById("cardName").value;
	let cardNum = document.getElementById("cardNum").value;
	let cardMonth = document.getElementById("cardMonth").value;
	let cardYear = document.getElementById("cardYear").value;
	let cvv = document.getElementById("cvv").value;
	
	let today = new Date();
	let currentMonth = today.getMonth() + 1; // + 1 as getMonth starts returning at 0 
	
	// checking if any of the fields are empty
	if (name == "" || email == "" || address == "" || city == "" || postCode == "" || cardName == "" || cardNum == "" || cardMonth == "" || cardYear == "" || cvv == "") {
		document.getElementById("msg").innerHTML = "Please fill out the entire form.";
		return false;
	} 
	
	// checking the card number is valid
	if (cardNum < 10000000 || cardNum > 9999999999999999999) {
		document.getElementById("msg").innerHTML = "Card number invalid.";
		return false;
	} 
	
	// checking if the card has expired 
	if (cardYear < today.getFullYear() || cardYear == today.getFullYear() && cardMonth < currentMonth) {
		document.getElementById("msg").innerHTML = "This card has expired.";
		return false;
	}
	
	alert("Thanks for ordering, " + name + "!");
	return true;
}

function resetForm() {
	// remove any error messages
	document.getElementById("msg").innerHTML = "";
	return true;
}