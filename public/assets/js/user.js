$(document).ready(function(){
    $("#userPost").on("click", function(evt){
      evt.preventDefault();    
      $.ajax({
        method: "POST",
        url: "/api/user",
        data:{
            fname: $("#fname").val().trim(),
            lname: $("#lname").val().trim(),
            email: $("#email").val().trim(),
            password: $("#password").val().trim(),
            department: $("#department").val().trim(),
            Role: $("#role").val().trim()
       
        },
        dataType: "json"
      })
      .done(function( response ) {
        
      })

    });
