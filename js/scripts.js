//$(function() {

let categories = [];
let budget = {
	total: 0,
	remaining: 0
};

const initialPrompt = function() {
	let budgetPrompt = prompt("Please enter your weekly budget amount.");
	let budgetAmount = parseInt(budgetPrompt);
	if (isNaN(budgetAmount)) {
		alert("You must enter a number.");
		initialPrompt();
	}
	initializeBudget(budgetAmount);
};

const initializeBudget = function(budgetAmount) {
	budget.total = budgetAmount;
	budget.remaining = budgetAmount;
	$("#total").text(budgetAmount);
	$("#remaining").text(budgetAmount);
	$("#budget")
		.val(budgetAmount)
		.attr("max", budgetAmount)
		.attr("low", (budgetAmount / 10)
	);
	return budget;
};

const updateScreen = function(budget, categories) {
	$("#remaining").text(budget.remaining);
	$("#budget").val(budget.remaining);
	if (budget.remaining <= 0) {
		alert("You've spent your budget, no more buying!!");
	} 
};

// grab "add new" button 
// .on("click" ----pop up new purchase window---)
// class="new-purchase" set to display block

//category variables
let entertainmentSpend = 0;    
let foodSpend = 0;   
let clothingSpend = 0;   
let billsSpend = 0;   




// get value from all form elements
function newPurchase (){
let purchaseNew = $("#purchase-new").val(); // id="purchase-new" value=""
let purchaseDate = $("#purchase-date").val();   //id="purchase-date" value=""
let purchaseAmount = $("#purchase-amount").val(); // id="purchase-amount" value=""
let purchaseCategory = $("#purchase-category").val(); // id="purchase-category" value="">
};

// call 
function updateCategory(category, amount){
   entertainmentSpend = entertainmentSpend + amount; 
   foodSpend = foodSpend + amount; 
   clothingSpend = clothingSpend + amount; 
   billsSpend = billsSpend + amount; 
};

$("#purchase-save").on("click", function(e) {	//Button saves data to a var
	addPurchaseToArray;
});

// 	<option id="option-select" value="select">Select</option>
// 	<option value="food">Food</option>
// 	<option value="bills">Bills</option>
// 	<option value="clothing">Clothing</option>
// 	<option value="entertainment">Entertainment</option>
// 	<button id="purchase-save" class="form-btn" type="button">Save</button>

// check form values, they shouldn't be empty or select
if ( "#purchase-inputs".val === ""){
	prompt("Fill in all fields");
};

// set new purchase window to display none


//add/populate 'Your Purchases Box' (.purchases-detail) with .purchase-new + .purchase-amount + .purchase-date for each new purchase.

    //color code each box with category color.


// update category levels with dollar amounts
// id="entertainment-spend"
// id="food-spend"
// id="clothing-spend"
// id="bills-spend"

	



window.setTimeout(initialPrompt, 500);
//}); // wrapper
