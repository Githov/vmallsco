function sing() {
    var brandname = $("#login").val();
    var password = $("#password").val();
    alert(brandname);
    alert(password);
    $.ajax({
        type: "post",
        url: "db.php",
        data: ({brandname: brandname, password: password}),
        success: function(data) {
            var result = data;
            if (result === "admin") {
                location.replace("general.html");
            }


        }
    });
    
}
    
    
/*if(!data || $('input[name="login"]').val() == "" || $('input[name="password"]').val() == ""){
 alert ("error");
 }*/
   