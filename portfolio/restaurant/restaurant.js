/*
    Name: Elliane Croce
    Date Created: 10/20/2018
    Most recent revision: 10/20/2018
*/


function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["userInfo"].elements.length; 
        loopCounter++) {
        if (document.forms["userInfo"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["userInfo"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function validateItems(){
    clearErrors();
    
    var name = document.forms["userInfo"]["fullName"].value;
    var mail = document.forms["userInfo"]["eMail"].value;
    var telephone = document.forms["userInfo"]["phone"].value;
    
    if (name == "") {
        alert("Please fill in your full name.");
        document.forms["userInfo"]["fullName"]
           .parentElement.className = "form-group has-error";
        document.forms["userInfo"]["fullName"].focus();
        return false;
    }
   if (mail == "") {
       alert("Please fill in your eMail.");
       document.forms["userInfo"]["eMail"]
          .parentElement.className = "form-group has-error"
       document.forms["userInfo"]["eMail"].focus();
       return false;
   }
    if (telephone == "") {
        alert("Please fill in your phone number.");
        document.forms["userInfo"]["phone"]
           .parentElement.className = "form-group has-error";
        document.forms["userInfo"]["phone"].focus();
        return false;
    }
    
    alert("Thank you for entering your information. This form is valid!");

    return false;
}