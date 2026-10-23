// let category = "Action"

// switch(category){
//     case "Action":
//         console.log("action movie")
//         break;
//     case "comedy":
//         console.log("comedy movie")
//         break;
//     case "sci-fi":
//         console.log("sci-fi movie")
//         break;
//     default:
//         console.log("Nothing selected...")
//         break;
// }

// ----------------------------------------------------------- For Loop --------------------------------------------------
//With declaration...
// var i = 0;
// for( var i = 2; i<10; i++){
//     console.log(i)
// }
// console.log(i);

//Without declaration...
// i = 0;
// for(let i = 2; i<10; i++){
//     console.log(i)
// }
// console.log(i);

// ----------------- for_of loop ---------------------

const arr = ['a', 'b', 'c']

for(const i of arr){
    console.log(i);
}

// ----------------- for_in loop ---------------------


let obj = {
    name: "shiva",
    address: "Mathura",
    socialHandle:{                                         //nested object
        fb:"https://fb.com",
        insta:"https://insta.com",
        twitter:"https://X.com",
    }
}

for(key in obj){
    console.log(key+":"+obj[key]);
}