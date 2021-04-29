const url = "http://35.223.20.167:8103/login/usuario"


function refresh(){
    var user=localStorage.getItem("getData")
    var myUser=JSON.parse(user);
    
    $('#nombreUsuario').val(myUser.Persona.nombre);
    $('#fechaNacimientoUsuario').val(myUser.fechaNacimiento.substring(0, 10));
    $('#numeroTelefonicoUsuario').val(myUser.numeroTelefonico);
    $('#coloniaUsuario').val(myUser.Ubicacion.colonia);
    $('#emailUsuario').val(myUser.Persona.correo);
    $('#apellidoUsuario').val(myUser.Persona.apellido);
    $('#ocupacionUsuario').val(myUser.ocupacion);
    $('#codigoPostalUsuario').val(myUser.Ubicacion.codigoPostal);
    $('#calleUsuario').val(myUser.Ubicacion.calle);
    $('#passwordUsuario').val(myUser.Persona.contraseña);

}

function editar(){
    $("#nombreUsuario").prop('disabled', false);
    $("#fechaNacimientoUsuario").prop('disabled', false);
    $("#numeroTelefonicoUsuario").prop('disabled', false);
    $("#coloniaUsuario").prop('disabled', false);
    $("#emailUsuario").prop('disabled', false);
    $("#apellidoUsuario").prop('disabled', false);
    $("#ocupacionUsuario").prop('disabled', false);
    $("#codigoPostalUsuario").prop('disabled', false);
    $("#calleUsuario").prop('disabled', false);
    $("#passwordUsuario").prop('disabled', false);

    $("#buttonCenter").prop('disabled', true);
    $("#buttonRight").prop('disabled', true);
    $("#buttonLeft").prop('disabled', false);

}

function actualizar(){
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

    const url2= url+'/'+myNumeroTelefonicoUsuario

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
        url: url2,
        type: 'put',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(myUsuario),
        success: function (data){
            alert('Datos actualizados');
            var obj = JSON.stringify(data.usuario);
            localStorage.setItem("getData",obj);
            refresh();

        },
        error: function(e){
            console.log(e)

        }
    
    })

    $("#nombreUsuario").prop('disabled', true);
    $("#fechaNacimientoUsuario").prop('disabled', true);
    $("#numeroTelefonicoUsuario").prop('disabled', true);
    $("#coloniaUsuario").prop('disabled', true);
    $("#emailUsuario").prop('disabled', true);
    $("#apellidoUsuario").prop('disabled', true);
    $("#ocupacionUsuario").prop('disabled', true);
    $("#codigoPostalUsuario").prop('disabled', true);
    $("#calleUsuario").prop('disabled', true);
    $("#passwordUsuario").prop('disabled', true);

    $("#buttonCenter").prop('disabled', false);
    $("#buttonRight").prop('disabled', false);
    $("#buttonLeft").prop('disabled', true);

}

function eliminar(){
    const myEmail = $('#emailUsuario').val();

    const myUsuario={
        correo: myEmail,
    }
  
    $.ajax({
        url: url,
        type: 'delete',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(myUsuario),
        success: function (){
            document.location.href = "../../index.html";

        },
        error: function(e){
            console.log(e)

        }
    
    })
}

