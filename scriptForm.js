// alert('Soy el scriptForm.js');

//* OBTENER LAS REFERENCIAS DEL DOM
// const form = document.getElementById('contact-form');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const messageInput = document.getElementById('message');
// const nameError = document.getElementById('name-error');
// const emailError = document.getElementById('email-error');
// const messageError = document.getElementById('message-error');

//* FUNCIONES BOOLIANAS PARA VALIDAR LOS DATOS QUE ENTRAN POR LOS INPUTS
function validaNombre(nombre){
    const patron = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return patron.test(nombre) && nombre.trim().length > 0;
}

console.log(validaNombre('Edily'))


function validaEmail(email){
   const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}

console.log(validaEmail('Edily@gamil.com'))



// and, or, not

// if (validaNombre(nameInput) || validaMail(emailInput) || validaMessage(messageInput)){
//     enviarFormulario();
// }else{
//     alert('Por favor, completa el formulario correctamente antes de enviarlo.');
// }


