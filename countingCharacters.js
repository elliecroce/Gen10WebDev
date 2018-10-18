/*
    Name: Elliane Croce
    Date Created: 10/17/2018
    Most recent revision:
*/


function countingCharacters(stringToCount) {
    console.log(stringToCount + " has " + stringToCount.length + " characters.");
}

function countingChar2(stringToCount, charToFind){
    var charCount = 0;
    for (var charPos = 0; charPos < stringToCount.length; charPos++){
        if (stringToCount[charPos] == charToFind){
            charCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Char to find: " + charToFind);
    console.log("Number of times the char appears: " + charCount);
}

function countingChar3(str, search){
    var count = 0;
    var numChars = search.length;
    var lastIndex = str.length - numChars;
    
    for(var index=0; index <= lastIndex; index++){
        var current = str.substring(index, index+numChars);
        if (current == search){
            count++;
        }
    }
    
    return count;
}