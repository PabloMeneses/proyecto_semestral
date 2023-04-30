const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const message = document.getElementById('message');
const warnings = document.getElementById('warnings');
const namesList = ['Juan', 'Pedro', 'Ana', 'Maria'];

form.addEventListener('submit', e => {
  e.preventDefault();
  let isValid = true;
  let warningMessage = '';

  if (name.value === '' || name.value == null) {
    isValid = false;
    warningMessage += 'Por favor ingrese su nombre\n';
  } else if (!/^[A-Z][a-z]{2,9}$/.test(name.value)) {
    isValid = false;
    warningMessage += 'Por favor ingrese un nombre válido con la primera letra en mayúscula y entre 3 y 10 caracteres\n';
  } else if (namesList.includes(name.value)) {
    isValid = false;
    warningMessage += 'El nombre ingresado ya existe, por favor ingrese otro\n';
  }

  if (email.value === '' || email.value == null) {
    isValid = false;
    warningMessage += 'Por favor ingrese su dirección de correo electrónico\n';
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    isValid = false;
    warningMessage += 'Por favor ingrese una dirección de correo electrónico válida\n';
  }

  if (telefono.value === '' || telefono.value == null) {
    isValid = false;
    warningMessage += 'Por favor ingrese su número de teléfono\n';
  } else if (!/^\d{9}$/.test(telefono.value)) {
    isValid = false;
    warningMessage += 'Por favor ingrese un número de teléfono válido de 9 dígitos\n';
  }

  if (message.value === '' || message.value == null) {
    isValid = false;
    warningMessage += 'Por favor ingrese su mensaje\n';
  } else if (message.value.split(' ').length < 5) {
    isValid = false;
    warningMessage += 'El mensaje debe contener al menos 5 palabras\n';
  }

  if (isValid) {
    form.submit();
  } else {
    warnings.innerText = warningMessage;
  }
});
