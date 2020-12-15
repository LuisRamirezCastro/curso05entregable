const { defaultUser, defaultSpecialities } = require('../helpers/data.helper');

const HomePage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');

describe('Home Page Tests', () => {
    
    before( () =>{
        
    })

    beforeEach( () => {
        //browser.reloadSession();
        HomePage.open();
    })
    
    it.skip('Home Page 1.a. Search button does not redirect to other page', () => {
        
        HomePage.search('')
        expect(HomePage.btnBuscar).toBeFocused();
        // TODO Validar que esté en la misma página
        expect(HomePage.homeContenedor).toBePresent();
        expect(HomePage.homeContenedor).toExist();
    });

    it.skip('Home Page 1.b. Specialities update placeholder and get search focus', () => {
        
        HomePage.inputFisica.click()
        expect(HomePage.inputBusqueda).toBeFocused();
        expect(HomePage.inputBusqueda).toHaveAttrContaining('placeholder', '¿Buscas a alguien o algo en específico?');
        HomePage.removeOverlay.click()
        expect(HomePage.inputBusqueda).toHaveAttrContaining('placeholder', 'Ejemplo: Nombre, Especialidad...');

        HomePage.inputLenguaje.click()
        expect(HomePage.inputBusqueda).toHaveAttrContaining('placeholder', '¿Buscas a alguien o algo en específico?');
        HomePage.removeOverlay.click()
        expect(HomePage.inputBusqueda).toHaveAttrContaining('placeholder', 'Ejemplo: Nombre, Especialidad...');
        
        HomePage.inputOcupacional.click()
        expect(HomePage.inputBusqueda).toHaveAttrContaining('placeholder', '¿Buscas a alguien o algo en específico?');
        HomePage.removeOverlay.click()
        expect(HomePage.inputBusqueda).toHaveAttrContaining('placeholder', 'Ejemplo: Nombre, Especialidad...');
    });

    it.skip('Home Page 1.c. Search for Maria and validate she appears in the results', () => {
        
        HomePage.search('Maria')
        expect(HomePage.homeContenedor).not.toBePresent();

        expect(SearchPage.searchContenedor).toBePresent();


    });
});


