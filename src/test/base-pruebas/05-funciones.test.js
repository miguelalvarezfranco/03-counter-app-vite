import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";


describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe retornar un obejto', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        
        expect( testUser ).toEqual( user );
    });


        test('getUsurioActivo debe retornar un obejto', () => {
            
            const name = 'Miguel';
            const user = getUsuarioActivo( name );

            expect( user).toEqual({
                uid: 'ABC567',
                username: name
            })
        })
        

    
})

