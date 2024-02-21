/* let attempts = 4;
function ingresar(){
    let user = document.querySelector('#user').value;
    let password = document.querySelector('#password').value;

    if(user == 'erik' && password == 123){
        document.querySelector('.error').innerHTML =`<div><p>Ingresando</p></div>`;
        document.querySelector('.error').classList.add('true');
        setTimeout(function(){
            window.location.href='pages/inicio.html';
        },2000);
    }
    else{
        attempts--
        if(attempts > 0){
            document.querySelector('.error').innerHTML =`<div><p>Usuario o contraseña incorrectas</p></div>`;
            document.querySelector('.error').classList.add('false');
        }
        else{
            document.querySelector('.error').innerHTML =`<div><p>Cuenta bloqueada</p></div>`;
            document.querySelector('.error').classList.add('false');
            document.querySelector('#user').disabled=true;
            document.querySelector('#password').disabled=true;
            document.querySelector('#login').disabled=true;
            document.querySelector('#login').classList.add('disabled');
            
        }
    }
} */
let attempts;

// Verificar si hay un valor guardado en el almacenamiento local
if(localStorage.getItem('attempts')) {
    attempts = parseInt(localStorage.getItem('attempts'));
} else {
    attempts = 4; // Establecer el número predeterminado de intentos
}

function bloquearCuenta() {
    document.querySelector('.error').innerHTML = `<div><p>Cuenta bloqueada</p></div>`;
    document.querySelector('.error').classList.add('false');
    document.querySelector('#user').disabled = true;
    document.querySelector('#password').disabled = true;
    document.querySelector('#login').disabled = true;
    document.querySelector('#login').classList.add('disabled');

    // Guardar el estado de bloqueo en el almacenamiento local
    localStorage.setItem('cuentaBloqueada', 'true');
}

function ingresar() {
    let user = document.querySelector('#user').value;
    let password = document.querySelector('#password').value;

    if (user === 'erik' && password === '123') {
        document.querySelector('.error').innerHTML = `<div><p>Ingresando</p></div>`;
        document.querySelector('.error').classList.add('true');
        setTimeout(function () {
            window.location.href = 'pages/inicio.html';
        }, 2000);
    } else {
        attempts--;
        if (attempts > 0) {
            document.querySelector('.error').innerHTML = `<div><p>Usuario o contraseña incorrectas</p></div>`;
            document.querySelector('.error').classList.add('false');
        } else {
            bloquearCuenta();
        }
    }

    // Guardar el número de intentos restantes en el almacenamiento local
    localStorage.setItem('attempts', attempts.toString());
}

// Verificar el estado de la cuenta bloqueada al cargar la página
window.addEventListener('load', function() {
    if(localStorage.getItem('cuentaBloqueada') === 'true') {
        bloquearCuenta();
    }
});
