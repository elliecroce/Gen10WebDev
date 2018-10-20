function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["numForm"].elements.length; 
        loopCounter++) {
        if (document.forms["numForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["numForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function validateItems(){
    clearErrors();
    
    var start = document.forms["numForm"]["start1"].value;
    var end = document.forms["numForm"]["end1"].value;
    var step = document.forms["numForm"]["step1"].value;
    
    
    if (start == "" || isNaN(start)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["numForm"]["start1"]
           .parentElement.className = "form-group has-error";
        document.forms["numForm"]["start1"].focus();
        return false;
    }
    if (end == "" || isNaN(end) || Number(start) >= Number(end)) {
       alert("Ending Number must be filled in with a number and be greater than the starting number.");
       document.forms["numForm"]["end1"]
          .parentElement.className = "form-group has-error"
       document.forms["numForm"]["end1"].focus();
       return false;
   }
    if (step == "" || isNaN(step) || step < 1) {
       alert("Step must be filled in with a number no less than 1.");
       document.forms["numForm"]["step1"]
          .parentElement.className = "form-group has-error"
       document.forms["numForm"]["step1"].focus();
       return false;
   }

    var evenResults = new Array();
    
    for (var i = Number(start); i <= Number(end); i = i + Number(step)) {
        if (i%2 == 0){
            evenResults.push(i);
        }
    }
    
    document.getElementById("results").style.display = "block";
    
    document.getElementById("len").innerText = evenResults.length;
    document.getElementById("start").innerText = start;
    document.getElementById("end").innerText = end;
    document.getElementById("step").innerText = step;
    
    document.getElementById("evenResults").innerText = evenResults;

    
 
    
    return false;
}