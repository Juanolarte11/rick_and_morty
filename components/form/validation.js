const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export function validation (e) {
    let errors = {}

    if(!regexEmail.test(e.username))errors.username = 'El usuario deberia ser un email...'
    else if (!e.username) errors.username = 'Por favor ingresar un usuario...'
    else if (e.username.length > 35) errors.username='El usuario no puede tener mas de 35 caracteres...'

    if(!regexPassword.test(e.password))errors.password = 'La contraseña tiene que tener almenos un numero...'
    else if (e.password.length < 6 && e.password.length > 10) errors.password = 'La contraseña tiene que ser entre 6 y 10 caracteres...';

    return errors
}