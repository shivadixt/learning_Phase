let city = ["Auraiya", "Agra", "Mathura"];

let obj = {
    name: "shiva",
    address: "Mathura",
    socialHandle:{                                         //nested object
        fb:"https://fb.com",
        insta:"https://insta.com"
    }
}

console.log(obj.address)
console.log(obj.socialHandle.insta)      // if you want a name from object;

function myfun(){
    console.log("Hello i am shiva")
}