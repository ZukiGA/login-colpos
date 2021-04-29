const url = "http://35.223.20.167:8103/login/usuario"


function login(){

 const myEmail = $('#email').val();
 const myPassword = $('#password').val();

 const myUsuario={
    correo: myEmail,
    contraseña: myPassword
  }
  
  $.ajax({
    url: url,
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(myUsuario),
    success: function (data){
        var obj = JSON.stringify(data.usuario);
        localStorage.setItem("getData",obj);
        document.location.href = "src/screens/home.html";
    },
    error: function(e){
        alert(e.responseJSON.error)
        
    }
    
})
}