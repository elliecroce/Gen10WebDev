
var friends = ["a", "b", "c", "d", "e", "f"];
var team1 = new Array();
var team2 = new Array();

//use push or pop for top stack, use shift or unshift for bottomstack


for (var i=0; i < friends.length; i++){
    if (i % 2 == 0){
        team1[team1.length] = friends[i];
    }
    else {
        team2[team2.length] = friends[i];
    }
    
}


var x = new Array();
var y = 0;

for (i=0; i<5; i++){
    x.push(i);
}


var z = [ 5, 9, 2, 10, 40, 3, 4];


function findMax(){
    var j = 0;
    while (j < z.length){
        if (z[j] > y){
            y = z[j];
        }
        j++;
    }
    return y;
}

function sumOfRange(inputArr){
    var sum = 0;
    for (var i=0; i<inputArr.length; i++){
        sum = sum + inputArr[i];
    }
    return sum;
}