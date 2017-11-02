//$(function() {

let purchases = [];
let categories = [];
let budget = {
	total: 0,
	remaining: 0
};

const initializeCategories = function() {
	categories.push(
		{id: 1, name: "entertainment", spendAmount: 0},
		{id: 2, name: "food", spendAmount: 0},
		{id: 3, name: "clothing", spendAmount: 0},
		{id: 4, name: "bills", spendAmount: 0}
	);
};
initializeCategories();

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

////////////////////////////////////////////////////////////
// grab "add new" button 
// .on("click" ----pop up new purchase window---)
// class="new-purchase" set to display block

$("#purchase-save").on("click", function() {
			// check form values, they shouldn't be empty or select
		if ( "#purchase-inputs".val === ""){
			prompt("Fill in all fields");
		};
	createNewPurchase();
// set new purchase window to display none
});
////////////////////////////////////////////////////////////

const createNewPurchase = function() {
	let purchaseName = $("#purchase-name").val();
	let purchaseDate = $("#purchase-date").val();
	let getPurchaseAmount = $("#purchase-amount").val();
	let purchaseAmount = parseInt(getPurchaseAmount);
	let getPurchaseCategory = $("#purchase-category").val();
	let purchaseCategory = parseInt(getPurchaseCategory);
	let newPurchase = {
 		item: purchaseName,
 		date: purchaseDate,
 		amount: purchaseAmount,
 		category: purchaseCategory
	};
	findAndAddToCategory(newPurchase);
	updateBudget(newPurchase);
	addPurchaseToArray(newPurchase);
};	

const findAndAddToCategory = function(purchase) {
	let category = categories.find(function(category) {
		return category.id === purchase.category;
	});
	category.spendAmount += purchase.amount;
};

// deduct purchase amount from total budget
const updateBudget = function(purchase) {
	budget.remaining -= purchase.amount;
};


const addPurchaseToArray = function(newPurchase) {
	purchases.push(newPurchase);
};

const updateScreen = function() {
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

////////////////////////////////////////////////////////////////////
// update screen with purchase objects
purchases.forEach(function(element) {
	console.log(element);
	$(".purchases").append("Some appended text.");
// <div class="purchases-detail">
// 		<p id="purchases-name">Purchase Name</p><p id="purchases-date">Date</p><p id="purchases-amount">Amount</p>
// </div>

});

////////////////////////////////////////////////////////////

//color code each box with category color.

window.setTimeout(initialPrompt, 500);
//}); // wrapper
