var name = prompt("Enter your name: ");
alert("Your name is  " + name);

var gender =prompt("what is your gender male or female ?")
if(gender=="male" ){
    console.log("male");

}else {
    console.log("female");
}
var age =prompt("how old are you ?")
if (age <= 0){
    alert ("your age less than or equal zero plase check it ??!")

}else {
    console.log("your age is :-  "+age )

}
var message =comfirm("do you want skip welcome message")
//comfirm ("hello "); 

// switch(gender){
//     case male: 
//     alert("this message to welcome you mr "+name );
//     break;
//     case female:
//         alert("this message to welcome you ms "+name );

//     break;
//     case default:

//     break;
//}
if (gender=="male"){
        alert("this message to welcome you mr "+name );
console.log("this message to welcome you mr")

}else if(gender =="female"){
       alert("this message to welcome you ms "+name );

} else {
    alert("plase check you gender mr/ms  "+name );
}
var uni =prompt("are you on universtiy ")
if (prompt()==true){
    alert("yes")
}else
alert("no")