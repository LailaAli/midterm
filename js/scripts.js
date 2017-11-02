//$(function() {

let purchases = [];
let categories = [];
let budget = {
	total: 0,
	remaining: 0
};

const initializeCategories = function() {
	categories.push(
		{name: "entertainment", spendAmount: 0},	// 0
		{name: "food", spendAmount: 0},				// 1
		{name: "clothing", spendAmount: 0},			// 2
		{name: "bills", spendAmount: 0}				// 3
	);
};

initializeCategories();

const addPurchaseToArray = function(item, date, amount, category) {
	purchases.push({
		item: item,
		date: date,
		amount: amount,
		category: category
	});
};

const initialPrompt = function() {
	let budgetPrompt = prompt("Please enter your weekly budget amount.");
	let budgetAmount = parseInt(budgetPrompt);
	if (isNaN(budgetAmount)) {
		alert("You must enter a number.");
		initialPrompt();
	}
	// initializeBudget(budgetAmount);
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
	$("#entertainment-spend").text(categories[0].spendAmount);
	$("#food-spend").text(categories[1].spendAmount);
	$("#clothing-spend").text(categories[2].spendAmount);
	$("#bills-spend").text(categories[3].spendAmount);
};

// grab "add new" button 
// .on("click" ----pop up new purchase window---)
// class="new-purchase" set to display block

// get value from all form elements
function newPurchase (){
	let purchaseNew = $("#purchase-new").val();
	let purchaseDate = $("#purchase-date").val();
	let getpurchaseAmount = $("#purchase-amount").val();
	let purchaseAmount = parseInt(getpurchaseAmount);
	let getPurchaseCategory = $("#purchase-category").val();
	let purchaseCategory = parseInt(getPurchaseCategory);
};	

//////// update categories using .find/.filter

function updateCategory(category, amount){
   entertainmentSpend = entertainmentSpend + amount; 
   foodSpend = foodSpend + amount; 
   clothingSpend = clothingSpend + amount; 
   billsSpend = billsSpend + amount; 
};

// function updateCategory(category, amount){
//    entertainmentSpend = entertainmentSpend + amount; 
   
// };

// const findMatching = function(categories, cat) {
// 	if (cat === "food") {
// 		return categories.name === "food";
// 	}
// };
// console.log(categories.find(findMatching(categories, cat)));

///////////////////////////////////////////////////////////////////////////////////

// save button will push data to purchases array
$("#purchase-save").on("click", function(e) {	//Button saves data to a var
	addPurchaseToArray(item, date, amount, category);
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
