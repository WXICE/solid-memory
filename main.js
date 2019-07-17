var okay;
function validate() {
    document.getElementById("fname").style.backgroundColor = "white";
    document.getElementById("lname").style.backgroundColor = "white";
    document.getElementById("email").style.backgroundColor = "white";
    document.getElementById("num").style.backgroundColor = "white";
    var okay = false;
    var fname = document.forms["contactform"]["fname"].value;
    var lname = document.forms["contactform"]["lname"].value;
    var email = document.forms["contactform"]["email"].value;
    var num = document.forms["contactform"]["num"].value;
    if (fname == "" || fname == null) {
        document.getElementById("fname").style.backgroundColor = "indianred";
        alert("Please enter a first name");

    }
    else if (lname == "" || lname == null) {
        document.getElementById("lname").style.backgroundColor = "indianred";
        alert("Please enter a last name");
    }
    else if (email == "" || email == null) {
        document.getElementById("email").style.backgroundColor = "indianred";
        alert("Please enter an email");
    }
    else {
            if(num == ""|| num == null||isNaN(num))
            {
                document.getElementById("num").style.backgroundColor = "indianred";
            alert("Please enter a valid Phone Number");
            }
            else{
                alert("Valid!");            
                document.getElementById("contactform").submit();
            }
    }
}
// function specialchar()
// {
//     var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

// if(format.test(string)){
//   return true;
// } else {
//   return false;
// }
// }
// function formcheck() {
//     var fields = $(".ss-item-required")
//           .find("select, textarea, input").serializeArray();
    
//     $.each(fields, function(i, field) {
//       if (!field.value)
//         alert(field.name + ' is required');
//      }); 
//     console.log(fields);
//   }

// function contactsub() {
//     if (okay == true) {
//         var fname = document.forms["contactform"]["fname"].value;
//         var lname = document.forms["contactform"]["lname"].value;
//         var email = document.forms["contactform"]["email"].value;
//         var num = document.forms["contactform"]["num"].value;
//     }
// }
