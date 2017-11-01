//$(function() {

// prompt user for budget amount
const initialPrompt = function() {
	let budgetPrompt = prompt("Please enter your weekly budget amount");
	let budgetAmount = parseInt(budgetPrompt);
	if (isNaN(budgetAmount)) {
		alert("You must enter a number.");
		initialPrompt();
	}
	initializeBudget(budgetAmount);
};

const initializeBudget = function(budgetAmount) {
	alert(budgetAmount);
	$("#total").text(budgetAmount);
	$("#remaining").text(budgetAmount);
	let meter = $("#budget");

	// budgetAmount = parseInt(budgetPrompt);
	// if (budgetAmount === NaN) {
	// 	alert("You must enter a number.");
	// 	initialPrompt();
	// }
	// return budgetAmount;
	// call initialize function and pass budget amount
};
// initialize budget amount variable
// set these things to budget amount
// <span id="total"></span>
// <meter max="500"
// value="375"

// grab element meter id="budget" 
// set val to current budget level



// grab "add new" button 
// .on("click" ----pop up new purchase window---)
// class="new-purchase" set to display block

//
// get value from all form elements
// id="purchase-new" value=""
// id="purchase-amount" value=""
// id="purchase-category" value="">
// 	<option id="optionSelect" value="select">Select</option>
// 	<option value="food">Food</option>
// 	<option value="bills">Bills</option>
// 	<option value="clothing">Clothing</option>
// 	<option value="entertainment">Entertainment</option>
// 	<button id="purchase-save" class="form-btn" type="button">Save</button>

// check form values, they shouldn't be empty or select


// set new purchase window to display none


//add/populate 'Your Purchases Box' (.purchases-detail) with .purchase-new + .purchase-amount + .purchase-date for each new purchase.

    //color code each box with category color.


// update category levels with dollar amounts
// id="entertainment-spend"
// id="food-spend"
// id="clothing-spend"
// id="bills-spend"


// if budget val(0)
// alert("You've spent your budget, no more buying!!");


window.setTimeout(initialPrompt, 500);
//}); // wrapper
