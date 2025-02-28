
describe('Pruebas en <DemoComponet />', () => {
    test('Esta prueba no debe de fallar', () => {
    
        // 1. Inicializacion
        const  message1 = 'Hola Mundo';
    
        //2. estimulo 
        const messaage2 = message1.trim();
    
        //3. observar el comportamiento , esperado...
        //aca se esta usando jest para poner la condiciones que estoy esperando. 
        //expect es de jest
        //expect( message1 ).toBe(messaage2 );
        
    });
})


