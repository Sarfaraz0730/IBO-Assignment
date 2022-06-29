/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}
solution 1:
 function getUniqueProductCount(){

     let result = {}
         
     listOfProducts.map(el => {
        result[el.productName] = (result[el.productName] || 0) + 1;
     })
     
     console.log(result) 
 }
 
 const answer = getUniqueProductCount()
 console.log(answer)
  


2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];
// solution : 1
 function getUniqueProductCount(){

     let result = {}
         
     listOfProducts.map(el => {
        result[el.productName] = (result[el.productName] || 0) + 1;
     })
     
     console.log(result) 
 }
 
 const answer = getUniqueProductCount()
 console.log(answer)
 
 //solution :2
function getUniqueProduct (){

  let array = []
  
  for(let i=0;i<listOfProducts.length; i++){
    let res = true;
    
    for(let j=0; j<array.length;j++){
    if(listOfProducts[i].productName === array[j].productName ){
      array[j].quantity =array[j].quantity + listOfProducts[i].quantity;
      res =false
    }
  }
  if(res ==true){
    array.push(listOfProducts[i])
  }

  
}
console.log(array)
}
 getUniqueProduct()
  
