let tamil = parseInt(prompt('enter a tamil mark:'));
let english = parseInt(prompt('enter a english mark:'));
let maths = parseInt(prompt('enter a maths mark:'));
let science = parseInt(prompt('enter a science mark:'));
let social = parseInt(prompt('enter a social mark:'));
let total = tamil + english + maths + science + social;
console.log(total);
let avg = total / 5;
console.log(avg);
console.log(Math.round(avg));
console.log(Math.floor(avg));
// document.write(avg);
// document.write(total);

// nested if


if (avg >= 90 && avg <= 100) {
    console.log("grade S");
}
else if(avg >= 89 && avg <= 70){
    console.log("grade A");
}
else if(avg >= 69 && avg <= 50){
    console.log("grade B");
}
else if(avg >= 49 && avg <= 40){
    console.log("grade PASS");
}
else if(avg >= 39 && avg <= 0){
    console.log("grade Fail");
}
else{
    console.log("grade Wrong");
}


//switch case


// switch(avg<100){
//     case avg >= 90 && avg <= 100:
//                 console.log("grade S");
//                 break;

//     case avg >= 89 && avg <= 70:
//                 console.log("grade A");
//                 break;

//     case avg >= 69 && avg <= 50:
//                 console.log("grade B");
//                 break;

//     case avg >= 49 && avg <= 40:
//                 console.log("grade PASS");
//                 break; 

//     case avg >= 39 && avg <= 0:
//                 console.log("grade FAIL");
//                 break;   
                
//     default:  
//             console.log("grade Wrong");             
// }
