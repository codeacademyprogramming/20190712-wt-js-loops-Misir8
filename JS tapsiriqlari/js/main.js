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