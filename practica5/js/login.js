function Comprobacion() {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log('entro')
    switch (email) {
        case"fabian@email.com":
                if(password === "12345678") {
                    alert('Sesion Iniciada');
                    window.location="https://www.youtube.com";
                    return;
                }
                alert('Contraseña Incorrecta');
            break;
        case "carlos@email.com":
                if(password === "A1234567") {
                    alert('Sesion Iniciada');
                    window.location="https://www.youtube.com";
                    return;
                }
                alert('Contraseña Incorrecta');
            break;
        case "reynaldo@email.com":
                if(password === "B1234567") {
                    alert('Sesion Iniciada');
                    window.location="https://www.youtube.com";
                    return;
                }
                alert('Contraseña Incorrecta');
            break;
        case "antonio@email.com":
                if(password === "C1234567") {
                    alert('Sesion Iniciada');
                    window.location="https://www.youtube.com";
                    return;
                }
                alert('Contraseña Incorrecta');
            break;
    
        default:
            alert('El usuario no existe');
            break;
    };
};