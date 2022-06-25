///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function(sum, cartObj) {
    return sum + cartObj.price
} , 0 )

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(carttotal, couponValue, tax) {
    var cartTotalWithTax = carttotal * tax
    var cartTotalAfterTax = cartTotalWithTax + carttotal
    var cartFinal = cartTotalAfterTax - couponValue
    return cartFinal
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Customer's name
    customer's party size
    Customer's arrival time
    customer's special requests 

    Customer's name will be a string. Clearly, the restaurant needs to know their name for reservation purposes. 
    Customer's party size will be a number. Restaurant will need to know how many seats they've filled for that time. 
    Customer's arrival time will be a string. Restaurant needs to know when to prepare to have them. 
    Customer's special requests would be another string and are for things such as allergies. 

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let CustomerPage = {
    name: "Jackson Porter",
    partySize: 12,
    arrivalTime: "7:30 PM",
    specialRequests: "gluten-free allergy" 
}