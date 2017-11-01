// $(function() {

// prompt user for budget amount

// grab element meter id="budget" 
// set val to current budget level

// grab "add new" button 
// .on("click" ----pop up new purchase window---)
// class="new-purchase" set to display block

//category variables
let entertainmentSpend = 0;    
let foodSpend = 0;   
let clothingSpend = 0;   
let billsSpend = 0;   

let categories = [];

categories.push(name.entertainment, name.bills, name.food, name.clothing);



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
   entertainmentSpend = $("#entertainment-spend").text()
};

// 	<option id="option-select" value="select">Select</option>
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




// }); // wrapper
