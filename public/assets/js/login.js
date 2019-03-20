$(document).ready(function(){
  $("#login").on("click", function(evt){
    evt.preventDefault();    
    $.ajax({
      method: "POST",
      url: "/api/login",
      data:{
        username: $("#email").val().trim(),
        password: $("#password").val().trim()
      },
      dataType: "json"
    })
    .done(function( response ) {
      if(response.auth){
        //Where you want to go after auth
        // window.location= "/dashboard";
        window.location += response.redirect;
      }else{
        alert("Invalid username or password")
      }
    })
    .fail(function(err,response){
        console.log(err);
        if (err.status == 422){
          $("#errMsg").text("The username entered is invalid. Please try again.");
          $("#errMsg").attr("class","alert alert-warning");
        }else{
          $("#errMsg").text("Your username and/or password is incorrect. Try again.");
          $("#errMsg").attr("class","alert alert-danger");
        }
        $("#errMsg").show();
      
      
    })

  });

  
})