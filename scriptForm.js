
// alert('Soy el scriptForm.js');

// //* OBTENER LAS REFERENCIAS DEL DOM
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

// messageInput.value → el atributo ".VALUE" es lo que usuario digito en la cajita <input o <textarea
//* FUNCIONES BOOLIANAS PARA VALIDAR LOS DATOS QUE ENTRAN POR LOS INPUTS, entonces los parametros que esperan, son los input.value
function validaNombre(nombre){
    const patron = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return patron.test(nombre) && nombre.trim().length > 0;
}
// console.log(validaNombre('Edily'))

function validaEmail(email){
   const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}
// console.log(validaEmail('Edily@gamil.com'))

function validaMensaje(mensaje){
    return mensaje.trim().length >= 10;
}
// validaMensaje('HOLA QUIERO COTZ DE 10 PAGES, CUANTO?')
// console.log('Edily'.length)
// console.log(validaMensaje(messageInpu.value)) //F
// console.log(validaMensaje('HOLA QUIERO COTZ DE 10 PAGES, CUANTO?')) //T

function mostrarError(elemento, mensaje){
elemento.textContent = mensaje //*Le agrego el texto descriptivo DEL ERROR
elemento.style.display = 'block'     //*Lo hago visible al elemento span
}

function ocultaError(elemento){
    elemento.style.display = 'none'     //*Lo hago INvisible al elemento span
}

// validando el input del msj
// validaMensaje(messageInput.value) == False → mostrarError( messageError, 'caracteres (mínimo 10)')
// validaNombre(nameInput.value) == False → mostrarError( nameError, 'El nombre solo debe contener letras')
// validaEmail(emailInput.value) == False → mostrarError( emailError, 'El EMAIL DEBE SER VALIDO')
// validaEmail(emailInput.value) == True → ocultaError( emailError, 'El EMAIL DEBE SER VALIDO')

// function sumar(a, b){
//  return a+b;
// }
// function restar(){
//  return 5-3;
// }

// sumar(5, 5)
// sumar(5, 50)
// sumar(5, 100)

// console.log(sumar(5, 'Hola'))

// and, or, not

// if (!validaNombre(nameInput) || !validaMail(emailInput) || !validaMessage(messageInput)){
//     enviarFormulario();
// }else{
//     alert('Por favor, completa el formulario correctamente antes de enviarlo.');
// }




// **************************************VALIDACIONES EN TIEMPO REAL
// nameInput.addEventListener('nombre_evento', functionManjadoraDelEvento())
nameInput.addEventListener('input', function(){
// nameInput.value
const valor = this.value

if(valor.length > 0){ //Si es verdad que esta escibiendo algo
    if(validaNombre(valor)){ // *Cumple el patron! ✅
        ocultaError(nameError)
        this.style.borderColor = '#4CAF50'
    }else{ // ! NOOO Cumple el patron! ❌
        mostrarError(nameError, 'Solo se aceptan letas 🚩')
        this.style.borderColor = '#f00'
    }
}else{
     ocultaError(nameError)
        this.style.borderColor = ''
}

})


//TODO: emailInput.addEventListener('input', function(){

// __init__(self, nombre, id) //*self == this

// cantar(self){
//     print(esta cantando '{self.nombre}')
// }

// perrito  = Perro('Rock', 23)
// perrito.cantar()