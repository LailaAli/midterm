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
	findUpdateCategory(newPurchase);
};	

const findUpdateCategory = function(newPurchase) {
	let category = categories.find(function(category) {
		return category.id === newPurchase.category;
	});
	category.spendAmount += newPurchase.amount;
	updateBudget(newPurchase);
};

const updateBudget = function(newPurchase) {
	budget.remaining -= newPurchase.amount;
	addPurchaseToArray(newPurchase);
};

const addPurchaseToArray = function(newPurchase) {
	purchases.push(newPurchase);
	updatePurchases(newPurchase);
};

const updatePurchases = function(newPurchase) {
	$(".purchases").append(
		"<div class=\"purchase-detail category" + newPurchase.category + "\">"
		+"<p class=\"purchase-name\">" + newPurchase.item + "</p>"
		+"<p class=\"purchase-date\">" + newPurchase.date + "</p>"
		+"<p class=\"purchase-amount\">" + newPurchase.amount + "</p>"
		+ "</div>"
	);
	updateScreen();
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

///////////////////////////////////////////////////////////
// TEST DATA
initializeBudget(500);
let testPurchase = {
 		item: "purchaseName",
 		date: "purchaseDate",
 		amount: 30,
 		category: 2
	};
findUpdateCategory(testPurchase);
findUpdateCategory(testPurchase);
findUpdateCategory(testPurchase);
findUpdateCategory(testPurchase);
findUpdateCategory(testPurchase);
findUpdateCategory(testPurchase);
findUpdateCategory(testPurchase);
findUpdateCategory(testPurchase);
findUpdateCategory(testPurchase);
findUpdateCategory(testPurchase);
findUpdateCategory(testPurchase);
findUpdateCategory(testPurchase);
findUpdateCategory(testPurchase);



///////////////////////////////////////////////////////////

//window.setTimeout(initialPrompt, 500);
//}); // wrapper
