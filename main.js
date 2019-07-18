
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
    else if(num == ""|| num == null||isNaN(num)){
        document.getElementById("num").style.backgroundColor = "indianred";
        alert("Please enter a valid Phone Number");
    }
    else
    {
        var format = /[!#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/;
        if(format.test(fname)) 
        {
            alert("No special characters must be inclued in your firstname");
            document.getElementById("fname").style.backgroundColor = "indianred";
            return false;
        }
        else if (format.test(lname))
        {
            alert("No special characters must be inclued in your lastname");
            document.getElementById("lname").style.backgroundColor = "indianred";
            return false;
        }
        else if(format.test(email))
        {
            document.getElementById("num").style.backgroundColor = "indianred";
            alert("No special characters must be inclued in your email");
            return false;
        }
        else
            alert("Valid!");            
            document.getElementById("contactform").submit();
        }
    }
    function preloader()
    {
        document.getElementById("spinner").style.display = "block";
        sleep((Math.random()) * ((2000 - 1000)) + 1000);
        document.getElementById("spinner").style.display = "none";
    }
    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }
      function getdetails(){
        //   console.log("Yo!");
        //   var xhttp = new XMLHttpRequest();
        //   xhttp.open("GET", "form.php", true);
        // // $.ajax({
        // //   url: 'form.php?',
        // //   cache: false,
        // //   type: 'POST',
        // //   data: {
        // //     cow: "moo"
        // //   },
        // //   success: function(data){
        // //       alert(data);
        // //   }
        // // })
        $.ajax({url: "/form.php", error: function(xhr){
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }});
    }