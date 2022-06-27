///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
const pizza ={
    name: 'Hawaiin',
    price: 8, 
    category: 'main course',
    popularity: 4,
    rating: 93,
    tags: ["thick crust", "gluten-free", "family-sized"]
}



//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log(pizza.popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
let {price} = pizza
console.log(price)


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
let {category} = pizza
console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
let foodArr = [{
    name: 'Pepperoni',
    price: 5, 
    category: 'main course',
    popularity: 1,
    rating: 99,
    tags: ["thin crust", "cauliflower", "eight inches"]
}
, {
    name: 'Cheese',
    price: 7, 
    category: 'main course',
    popularity: 2,
    rating: 96,
    tags: ["regular"]
}
, {
    name: 'Spicy',
    price: 12, 
    category: 'main course',
    popularity: 3,
    rating: 100,
    tags: ["thick crust", "gluten-free", "family-sized"]
}
, {
    name: 'Salami',
    price: 10, 
    category: 'main course',
    popularity: 8,
    rating: 45,
    tags: ["cauliflower crust", "gluten-free", "personal-sized"]
}
, {
    name: 'Olive',
    price: 18, 
    category: 'main course',
    popularity: 44,
    rating: 20,
    tags: ["thin crust", "gluten-free"]
}
, {
    name: 'Ranch',
    price: 40, 
    category: 'main course',
    popularity: 6,
    rating: 90,
    tags: ["Stuffed crust", "gluten-free", "family-sized"]
}
]


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

//this is one way

// const filteredFood = foodArr.filter((foodObj) => checkForTag(foodObj))
// function checkForTag(obj){
//     return obj.tags.includes("gluten-free")
// }

// console.log(filteredFood)

//This is another thing
function filterByAllergy(type) {
    const allergyFood = foodArr.filter((foodObj) => foodObj.tags.includes(type))
    return allergyFood
}
console.log(filterByAllergy("cauliflower crust"))


//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE

//could not figure it out with callbacks to save my life. 

function filterByProperty (property, number, type) {
    var returnArr = foodArr.filter((foodProperties) => {
        switch (property) {
            case "price":
                return priceProperty(foodProperties, number, type)
            case "rating":
                return ratingProperty(foodProperties, number, type)
            case "popularity":
                return popularityProperty(foodProperties, number, type)
            default:
                return
        }
        //propertyCallback(property, foodProperties, number, type)
    })
    return returnArr
}

// function propertyCallback(callback = () => {}) {
//     return callback(arguments[1], arguments[2], arguments [3]);
// }
  

function priceProperty(foodProperties, number, type){
    if (type === "above") {
        return number < foodProperties.price
    } else {
        return number > foodProperties.price
    }
}

function ratingProperty(foodProperties, number, type){
    if (type === "above") {
        return number < foodProperties.rating
    } else {
        return number > foodProperties.rating
    }
}

function popularityProperty(foodProperties, number, type){
    if (type === "above") {
        return number < foodProperties.popularity
    } else {
        return number > foodProperties.popularity
    }
}




/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE

console.log(filterByProperty("price", 10, "below"))
console.log(filterByProperty("popularity", 10, "below"))
console.log(filterByProperty("rating", 10, "below"))

console.log(filterByProperty("price", 10, "above"))
console.log(filterByProperty("popularity", 10, "above"))
console.log(filterByProperty("rating", 10, "above"))