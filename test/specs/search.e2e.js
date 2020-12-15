const defaultSpecialities = require('../helpers/data.helper');

//const HomePage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');

describe('Search Page Tests', () => {
    
    before( () =>{
        
    })

    beforeEach( () => {
        //browser.reloadSession();
        SearchPage.open();
    })
    
    it.skip('Seach Page 2.a. Click speciality updates URL', () => {
        
        // FÍSICA - LENGUAJE - OCUPACIONAL

        SearchPage.getLinkByName('FÍSICA').click();
        expect(browser).toHaveUrlContaining('phisical')

        SearchPage.getLinkByName('LENGUAJE').click();
        expect(browser).toHaveUrlContaining('language')

        SearchPage.getLinkByName('OCUPACIONAL').click();
        expect(browser).toHaveUrlContaining('ocupational')


        // let specialities = defaultSpecialities();

        // for (speciality in specialities){
        //     SearchPage.getLinkByName(speciality.name).click();
        //     console.log('- - - - - - - - - - - - - - - - -');
        //     console.log(browser.getUrl());
        //     console.log('- - - - - - - - - - - - - - - - -');
            
            //expect(browser.getUrl()).toHaveUrlContaining('phisical') 
            // SearchPage.getLinkByName('LENGUAJE').click();
            // console.log(browser.getUrl());
            // //expect(browser.getUrl()).toHaveUrlContaining('language')
            // SearchPage.getLinkByName('OCUPACIONAL').click();
            // console.log(browser.getUrl());
        
        
        
        //expect(browser.getUrl()).toHaveUrlContaining('ocupational')

        // const specialities = [
        //     {
        //         "name": "Física",
        //         "url": "phisical"
        //     },
        //     {
        //         "name": 'Lenguaje',
        //         "url": 'language'
        //     },
        //     {
        //         "name": 'Ocupacional',
        //         "url": 'ocupational'
        //     }
        // ]

        // for (speciality in specialities){

        //     console.log(specialities)

        //     SearchPage.getLinkByName(speciality.name).click();
        //     expect(SearchPage.getPageUrl).toHaveUrlContaining(speciality.url)

        //     console.log(speciality.name + " - - " + speciality.url)
        // }


        //expect(HomePage.btnBuscar).toBeFocused();
        // TODO Validar que esté en la misma página
        //expect(HomePage.homeContenedor).toBePresent();
        //expect(HomePage.homeContenedor).toExist();
    });

    it('Search Page 2.b. Search for Maria updated existing results and locates her', () => {
        
        expect(SearchPage.resultName).not.toHaveTextContaining("Maria")
        SearchPage.search("Maria");
        expect(SearchPage.resultName).toHaveTextContaining("Maria")

    });

    it.skip('Search Page 2.c. Toggle Map/List view hides/show Map', () => {
        
        //expect(SearchPage.linkMapa).toHaveAttributeContaining('class', 'active')
        expect(SearchPage.contenedorMapa).toBeVisible()

        SearchPage.linkLista.click();
        expect(SearchPage.linkLista).not.toHaveAttributeContaining('class', 'active')
        expect(SearchPage.linkMapa).toHaveAttributeContaining('class', 'active')
        expect(SearchPage.contenedorMapa).not.toBeVisible()

        SearchPage.linkMapa.click();
        expect(SearchPage.linkMapa).not.toHaveAttributeContaining('class', 'active')
        expect(SearchPage.contenedorMapa).toBeVisible()
        expect(SearchPage.linkLista).toHaveAttributeContaining('class', 'active')        
    });
});


