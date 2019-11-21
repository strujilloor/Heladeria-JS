

function imprimir() {

    let formulario = document.forms['myForm'];

    let nombreCliente = formulario.nombreCliente.value;
    let telefonoCliente = formulario.telefonoCliente.value;

    let sabor = formulario.sabor.value; //radio button 

    let extras = formulario.extras; //checkbox
    var extrasChecked = new String();

    for ( let i = 0; i < extras.length; i++ ) {
        const elemento = extras[i];

        if(elemento.checked) {
            extrasChecked += `${elemento.value} `;
        }
    }

    console.log(`nombre: ${nombreCliente} telefono: ${telefonoCliente}  sabor: ${sabor} Extras: ${extrasChecked}`);
}