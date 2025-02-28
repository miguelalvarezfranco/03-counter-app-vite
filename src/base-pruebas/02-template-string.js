


/*const nombre   = 'Fernando';
const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log( nombreCompleto );*/

//No se pueden hacer pruebas de algo que no este eexportado
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

