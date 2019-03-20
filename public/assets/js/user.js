// Post used to add a User the the DB
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
        //clear field data after submit
      }).then(function() {
        console.log('saved');
        $('#fname').val('');
        $('#lname').val('');
        $("#email").val('');
        $("#password").val('');
        $("#department").val('');
        $("#role").val('');
      })

    })
});
