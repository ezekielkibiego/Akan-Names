var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleAkanNames = [ "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame" ]; 
var femaleAkanNames = [ "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama" ]; 
function getAkanName () {
    var dayOfBirth = Number(document.getElementById("day-input").value); 
    var monthOfBirth = Number(document.getElementById("month-input").value); 
    var yearOfBirth = document.getElementById("year-input").value;
    var genders = document.getElementsByName("gender"); 

function monthValidator () { 
    if (monthOfBirth < 1 || monthOfBirth > 12) { 
        alert("Enter a valid month!");
        } else { 
            return true; 
        }
         
} 
function dayValidator () { 
    if (monthOfBirth === 2 ) {
        if (dayOfBirth > 29 || dayOfBirth < 1) {
            alert("Enter a valid day!"); 
            } else if (monthOfBirth === 2 && dayOfBirth > 29){
                alert("Enter a valid day!");
            } else if (monthOfBirth === 2 && dayOfBirth < 1) {
                alert("Enter a valid day!");
            } else { 
                return true; 
            }   
                
    } else if (dayOfBirth < 1 || dayOfBirth > 31){ 
        alert("Enter a valid day!");
    } else { 
        return true; 
    }
         
} 
var yearValid = yearValidator();
var monthValid = monthValidator();
var dayValid = dayValidator(); 
var dayOfWeekNumber = Math.trunc((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+ ((5*Number(yearOfBirth.slice(2,4))/4))+((26*Number(monthOfBirth+1)/10))+dayOfBirth)%7);

function getGender () { 
    for (var gender of genders){ 
        if (gender.checked){ 
            return gender.value; 
        } 
    } 
} 
var myGenderValue = getGender(); 
console.log(myGenderValue);
function yearValidator () { 
    if (yearOfBirth < 1900 || yearOfBirth > 2100) { 
        alert("Enter a valid year!");
        } else { 
            return true; 
        }
}

if (myGenderValue == "male" && yearValid && monthValid && dayValid){
    switch (dayOfWeekNumber) { 
        case 1: document.getElementById('result').textContent = "You were born on a Sunday, your Akan name is " + maleAkanNames[0]; document.getElementById('show-name').textContent = "Your Akan Name and Day of Birth: "; return false; break;
        case 2: document.getElementById('result').textContent = "You were born on a Monday, your Akan name is " + maleAkanNames[1]; document.getElementById('show-name').textContent = "Your Akan Name and Day of Birth: "; return false; break;
        case 3: document.getElementById('result').textContent = "You were born on a Tuesday, your Akan name is " + maleAkanNames[2]; document.getElementById('show-name').textContent = "Your Akan Name and Day of Birth: "; return false; break; 
        case 4: document.getElementById('result').textContent = "You were born on a Wednesday, your Akan name is " + maleAkanNames[3]; document.getElementById('show-name').textContent = "Your Akan Name and Day of Birth: "; return false; break; 
        case 5: document.getElementById('result').textContent = "You were born on a Thursday, your Akan name is " + maleAkanNames[4]; document.getElementById('show-name').textContent = "Your Akan Name and Day of Birth: "; return false; break;
        case 6: document.getElementById('result').textContent = "You were born on a Friday, your Akan name is " + maleAkanNames[5]; document.getElementById('show-name').textContent = "Your Akan Name and Day of Birth: "; return false; break; 
        case 7: document.getElementById('result').textContent = "You were born on a Saturday, your Akan name is " + maleAkanNames[6]; document.getElementById('show-name').textContent = "Your Akan Name and Day of Birth: "; return false; break; 
        case 0: document.getElementById('result').textContent = "You were born on a Sunday, your Akan name is " + maleAkanNames[0]; document.getElementById('show-name').textContent = "Your Akan Name and Day of Birth: "; return false; break;
        default: alert("oops no Akan name for you!"); 
    } 
    
} else if(myGenderValue == "female" && yearValid && monthValid && dayValid) { 
    switch (dayOfWeekNumber) { 
        case 1: document.getElementById('result').textContent = "You were born on a Sunday, your Akan name is " + femaleAkanNames[0]; document.getElementById('show-name').textContent = "Your Akan Name and Day of Birth: "; return false; break; 
        case 2: document.getElementById('result').textContent = "You were born on a Monday, your Akan name is " + femaleAkanNames[1]; document.getElementById('show-name').textContent = "Your Akan Name and Day of Birth: "; return false; alert("Kwadwo"); break; 
        case 3: document.getElementById('result').textContent = "You were born on a Tuesday, your Akan name is " + femaleAkanNames[2]; document.getElementById('show-name').textContent = "Your Akan Name and Day of Birth: "; return false; break; 
        case 4: document.getElementById('result').textContent = "You were born on a Wednesday, your Akan name is " + femaleAkanNames[3]; document.getElementById('show-name').textContent = "Your Akan Name and Day of Birth: "; return false; break; 
        case 5: document.getElementById('result').textContent = "You were born on a Thursday, your Akan name is " + femaleAkanNames[4]; document.getElementById('show-name').textContent = "Your Akan Name and Day of Birth: "; return false; break; 
        case 6: document.getElementById('result').textContent = "You were born on a Friday, your Akan name is " + femaleAkanNames[5]; document.getElementById('show-name').textContent = "Your Akan Name and Day of Birth: "; return false; break; 
        case 7: document.getElementById('result').textContent = "You were born on a Saturday, your Akan name is " + femaleAkanNames[6]; document.getElementById('show-name').textContent = "Your Akan Name and Day of Birth: "; return false; break; 
        case 0: document.getElementById('result').textContent = "You were born on a Sunday, your Akan name is " + femaleAkanNames[0]; document.getElementById('show-name').textContent = "Your Akan Name and Day of Birth: "; return false; break; 
        default: alert("oops no Akan name for you!"); 
    } 

} 
}