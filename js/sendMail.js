// Manejo del DOM en el Formulario
const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#trucazo');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this);
    console.log(form.get('name'));
    $buttonMailto.setAttribute('href', `mailto:ivanjaramelgarejo2020@gmail.com?subject= Nombre: ${form.get('name')}  Telefono: ${form.get('phone')}  Email: ${form.get('email')}&body=${form.get('message')}`);
    $buttonMailto.click();
};