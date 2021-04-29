const url = "http://35.223.20.167:8103/login/newUsuario"


function signUp(){

 const myNombre = $('#nombreUsuario').val();
 const myFechaNacimientoUsuario = $('#fechaNacimientoUsuario').val();
 const myNumeroTelefonicoUsuario = $('#numeroTelefonicoUsuario').val();
 const myColonia = $('#coloniaUsuario').val();
 const myEmail = $('#emailUsuario').val();
 const myApellidos = $('#apellidoUsuario').val();
 const myOcupacion = $('#ocupacionUsuario').val();
 const myCodigoPostal = $('#codigoPostalUsuario').val();
 const myCalle = $('#calleUsuario').val();
 const myPassword = $('#passwordUsuario').val();

 const myUsuario={
    nombre: myNombre,
    apellido: myApellidos,
    correo: myEmail,
    contraseña: myPassword,
    codigoPostal: parseInt(myCodigoPostal),
    colonia: myColonia,
    calle: myCalle,
    fechaNacimiento: myFechaNacimientoUsuario,
    ocupacion: myOcupacion,
    numeroTelefonico: parseInt(myNumeroTelefonicoUsuario)
  }
  
  $.ajax({
    url: url,
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(myUsuario),
    success: function (){
        alert("Cuenta creada exitosamente");
        document.location.href = "../../index.html";
        
    },
    error: function(e){
        console.log(e)
        
    }
    
})
}