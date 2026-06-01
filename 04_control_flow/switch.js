//switch (key) {
//    case value:
//        
//        break;

//    default:
//        break;
//}


const month = "march"
switch (month) {
    case 1 : 
        console.log("January")
        break;
    case 2 : 
        console.log("February")
        break;
    case "march" : 
        console.log("March")
        break;
    case 4 : 
        console.log("April")
        break; // control flown is breaked , if the break was not given , the code at the bottom would run except default

    default:
        console.log("default case match")
        break;
}