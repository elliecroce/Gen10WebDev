function clearErrors() {
    for (var loop = 0; loop < document.forms["sevens"].elements.length; loop++){
        if (document.forms["sevens"].elements[loop].parentElement.className.indexOf("has-") != -1){
            document.forms["sevens"].elements[loop].parentElement.className = "form-group";
        }
    } 
}

function resetForm() {
    clearErrors();
    document.forms["sevens"]["bet1"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("resetButton").style.display = "none";
    document.forms["sevens"]["bet1"].focus();
}

function rollDice(){
    clearErrors();
    var sb = document.forms["sevens"]["bet1"].value;
    
    if (sb == "" || isNaN(sb) || sb <= 0){
        alert("Starting Bet must be greater than 0");
        document.forms["sevens"]["bet1"].parentElement.className = "form-group has-error";
        document.forms["sevens"]["bet1"].focus();
        return false;
    }
    
    var gameMoney = Number(sb);
    var totalRolls = 0;
    var highAmount = 0;
    var highRollCount = 0;
    
    while(gameMoney > 0){
        var dice1 = Math.floor(Math.random() *6 +1);
        var dice2 = Math.floor(Math.random() *6 +1);
        var diceTotal = Number(dice1) + Number(dice2);
        
        if (diceTotal == 7){
            gameMoney+= 4;
            totalRolls++;
        }
        else{
            gameMoney--;
            totalRolls++;
        }
        if(highAmount <= gameMoney){
            highAmount = gameMoney;
            highRollCount = totalRolls;
        }
    }
    
    document.getElementById("playButton").style.display = "none";
    document.getElementById("resetButton").style.display = "inline-block";
    document.getElementById("results").style.display = "block";
    document.getElementById("startBet").innerText = sb;
    document.getElementById("totalRoll").innerText = totalRolls;
    document.getElementById("highestWon").innerText = highAmount;
    document.getElementById("rollHigh").innerText = highRollCount;
    
    return false;
}
