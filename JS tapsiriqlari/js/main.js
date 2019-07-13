"use strict";
// Birinci tapsiriq - saytdan olan
function foundNum (x, y){
    if(x < 0 && y < 0){
        x = + x;
        y = + y;
    } else if (x < 0 || y < 0 ){
        x = x + 0.5;
        y = y + 0.5;
    } else if(x > 0 && y > 0 && x < 0.5 || x > 2 || y < 0.5 || y > 2 ){
        x = x/10;
        y = y/10;
    }
    console.log(x);
    console.log(y);
}
foundNum(-5, 3);
foundNum(5, -3);
foundNum(0.1, 3);

// Ikinci tapsiriq
function foundResult (num1, num2){
    num2 > num1;
    for (let i = num1; i < num2; i++){
        if(i%2 == 0){
         console.log(i);
        }
    }
    let result = 0;
    for (let k = num1; k < num2; k++){
        result = result + k;
    }
    console.log(result);
}
// foundResult(5, 15);
// foundResult(8, 20);
// foundResult(28, 36);
