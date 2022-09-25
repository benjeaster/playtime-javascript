//console.log("Hey you give me Hello world")
//window.alert("hey nigga")

//let firstName = "Benjamin"
// let age = 21;
//  let student = true;

// age = age + 1;

// console.log(age);
// console.log(firstName);
// console.log(student);

// document.getElementById("first").innerHTML = "hello"
 
// let students = 20;
// students += 5;
// console.log(students)

// let result = 1 + 2 * (3 + 4);

// let username = window.prompt("whats your name")
// console.log(username);

// let username;
// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML = "hello " + username;
// }


// let age = window.prompt("how old are you");

// console.log(typeof age)
// age = Number(age);
// console.log(typeof age)
// age += 1;


// console.log("Happy Birthday! You are", age, "years old")

// let x;
// let y;
// let z;

// x = Number(3.142);
// y = String(3.143)
// z = Boolean("false")
// console.log(x, typeof x)
// console.log(y, typeof y)
// console.log(z, typeof z)

// a constant is a variable that cannot be changed
// constants add some level of security to our code

// this example prompts the user to enter the radius of a circle and 
// then calculates the circumference of the circle

// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// circumference = 2 * pi * radius;
// console.log("The circumference is: ", circumference);

// javascript math

// let x = 3.14;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;

// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.pow(x,2);
// x = Math.abs(x);
// maximum = Math.max(x, y, z);
// minimum = Math.min(x, y, z);

// console.log(maximum);
// x = Math.PI;
// console.log(x);

// The following code creates a practice exercise to find the hypotenus of a right 
// angle triangle given the other two sides;

// let a;
// let b;
// let c;

// a = window.prompt("Enter the value of a");
// a = Number(a);
// b = window.prompt("Enter the value of b");
// b = Number(b);


// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));


// console.log("the hypotenus is: ", c);
// console.log(typeof c)

//solving the same problem using the html DOM

let a;
let b;
let c;

document.getElementById("submit").onclick = function() {
    a = document.getElementById("aText").value;
    a = Number(a)
    b = document.getElementById("bText").value;
    b = Number(b)

    c = Math.pow(a,b);
 
   

    document.getElementById("labelc").innerHTML = "The a to power b is = " + c;
    
}



// code for the count app

let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count-=1
    document.getElementById("countLabel").innerHTML = count

}
document.getElementById("resetBtn").onclick = function(){
    count = 0
    document.getElementById("countLabel").innerHTML = count
}
document.getElementById("increaseBtn").onclick = function(){
    count+=1
    document.getElementById("countLabel").innerHTML = count
    
}
document.getElementById("setBtn").onclick = function(){
    setValue = document.getElementById("setInput").value ;
    document.getElementById("countLabel").innerHTML = setValue ;
    setValue = Number(setValue);
    count = setValue;
    
}


//code for the dice roll

document.getElementById("roll").onclick = function(){


    let x = Math.floor(Math.random() * 6 ) + 1;
    let y = Math.floor(Math.random() * 6) + 1;
    let z = Math.floor(Math.random() * 6) + 1;
    
    document.getElementById("x").innerHTML = "x = " + x;
    document.getElementById("y").innerHTML = "y = " + y;
    document.getElementById("z").innerHTML = "z = " + z;

    console.log(x);
    console.log(y);
    console.log(z);

    console.log(x == y && y == z)

    document.getElementById("verify").onclick = function verify() {
        if(x == y && y == z){
            document.getElementById("x").innerHTML = "x = " + x;
            document.getElementById("y").innerHTML = "y = " + y;
            document.getElementById("z").innerHTML = "z = " + z;
    
            window.alert("congrats you win");
        }
        else{
            window.alert("all three must be equal")
        }

    }

    
}

//code for username string manipulation

document.getElementById("submitString").onclick = function(){
    let pete;
    let firstOutput;
    let age;
    let userName;
    
    // let lengthOfString;
    pete = document.getElementById("inputString").value;
    userName = pete.replaceAll(" ", "");
    firstOutput = (String(userName)).length;

    age = document.getElementById("enterAge").value ;
    document.getElementById("displayLastName").innerHTML= "LastName: " + pete.slice(pete.indexOf(" ") + 1);
    document.getElementById("displayFirstName").innerHTML= "firstName: " + pete.slice(0, pete.indexOf(" "));

    if (age >= 19 && age < 100){
        document.getElementById("displayAge").innerHTML = "you are an adult";
    }
    else if(age >= 100){
        document.getElementById("displayAge").innerHTML = "you are a dinosaur";
    }
    else if(age >=13 && age <19 ){
        document.getElementById("displayAge").innerHTML = "you are a teenager";
    }
    else if (age <13 && age > 0){
        document.getElementById("displayAge").innerHTML = "you are a child";
    }
    else{
        document.getElementById("displayAge").innerHTML = "Please enter a valid age";
    }

const mycheckbox = document.getElementById("inputCheck")
    if(mycheckbox.checked){
        document.getElementById("printSubscribed").innerHTML= "you are subscribed"
    }
    else{
        document.getElementById("printSubscribed").innerHTML = "you are NOT subscribed."
    }

    //for the radio checks used in payment

    const visaBtn = document.getElementById("visaBtn")
    const masterCardBtn = document.getElementById("masterCardBtn")
    const paypalBtn = document.getElementById("paypalBtn")

    if(visaBtn.checked){
        document.getElementById("paymentCheck").innerHTML = "you are paying with Visa"
    }
    else if(masterCardBtn.checked){
        document.getElementById("paymentCheck").innerHTML = "you are paying with Master Card"
    }
    else if(paypalBtn.checked){
        document.getElementById("paymentCheck").innerHTML = "you are paying with Paypal"
    }
    else{
        window.alert('pls select payment method')
    }

    
    // lengthOfString = firstOutput.length;
    document.getElementById("stringLength").innerHTML = "Length of Username: " + firstOutput;
}

// document.getElementById("change").onclick = function() {
//    let message = document.getElementById("msg").value;
//    document.getElementById("mesg").innerHTML = `You have ${message} new messages`;
// }


document.getElementById("check").onclick = function(){
    
    let rad;
    let area;
    rad = document.getElementById("msg").value;
    area =  3.142 * (Math.pow(rad,2));
    document.getElementById("mesg").innerHTML = `area = ${area}, try again`

    if (Math.round(area)==100){
        document.getElementById("mesg").innerHTML = `seems you got that right, area = ${area}`
    }
    
}





    

    

    
