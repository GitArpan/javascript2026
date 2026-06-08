//reduce() is most used shoppin cart to make the total of the price
const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// },0)//initial value is given to the acc

const myTotal = myNums.reduce( (acc , currval)=>(acc+currval),0)
console.log(myTotal);




const shoppingCart = [
    {
        itemName: "js course",
        price : 2999
    },
    {
        itemName: "py course",
        price : 999
    },
    {
        itemName: "mobile dev course",
        price : 5999
    },
    {
        itemName: "data science course",
        price : 12999
    }
]

const priceToPay=shoppingCart.reduce((acc, item)=>acc +item.price,0)
console.log(priceToPay);