const { defaultUser, defaultSpecialities } = require('../helpers/data.helper');

const HomePage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');

describe('Home Page Tests', () => {
    
    before( () =>{
    })

    beforeEach( () => {
        browser.reloadSession();
        HomePage.open();
    })
    
    it('Home Page 1.a. Search does not redirect to other page when no text is given', () => {
        
        // Executes search with no text
        HomePage.searchNoText();
        expect(HomePage.btnBuscar).toBeFocused();
        // Validates search did not jump to Search Page and stays in Home Page
        expect(SearchPage.searchContenedor).not.toBePresent();
        expect(HomePage.homeContenedor).toBePresent();
        expect(HomePage.homeContenedor).toExist();
    });


    it('Home Page 1.b. Specialities update placeholder and get search focus', () => {
        
        const placeholderOutFocus = 'Ejemplo: Nombre, Especialidad...';
        const placeholderInFocus = '¿Buscas a alguien o algo en específico?';

        // Selects 'Phisical' speciality and search input get focus
        HomePage.selectPhisicalSpeciality();
        expect(HomePage.inputBusqueda).toBeFocused();
        expect(HomePage.inputBusqueda).toHaveAttrContaining('placeholder', placeholderInFocus);
        // Clicking elsewhere removes focus from search input
        HomePage.removeFocus();
        expect(HomePage.inputBusqueda).toHaveAttrContaining('placeholder', placeholderOutFocus);

        // Selects 'Language' speciality and search input get focus        
        HomePage.selectLanguajeSpeciality();
        expect(HomePage.inputBusqueda).toBeFocused();
        expect(HomePage.inputBusqueda).toHaveAttrContaining('placeholder', placeholderInFocus);
        HomePage.removeFocus();
        expect(HomePage.inputBusqueda).toHaveAttrContaining('placeholder', placeholderOutFocus);

        // Selects 'Ocupational' speciality and search input get focus        
        HomePage.selectOcupationalSpeciality();
        expect(HomePage.inputBusqueda).toBeFocused();
        expect(HomePage.inputBusqueda).toHaveAttrContaining('placeholder', placeholderInFocus);
        HomePage.removeFocus();
        expect(HomePage.inputBusqueda).toHaveAttrContaining('placeholder', placeholderOutFocus);
    });


    it('Home Page 1.c. Search for Maria and validate she appears in the results', () => {
        
        const user = defaultUser();

        // Search for given person and validates Home page is no longer displayed
        HomePage.search(user.name)
        expect(HomePage.homeContenedor).not.toBePresent();
        // Validates Search Page is displayed
        expect(SearchPage.searchContenedor).toBePresent();
        // Validates there are results, 'No hay resultados para mostrar.' message won't display
        expect(SearchPage.noResultsMessage).not.toBePresent();
        // Validates given person is the top result
        expect(SearchPage.resultName).toHaveTextContaining(user.name);
    });
});


