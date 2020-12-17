const {defaultUser, defaultSpecialities} = require('../helpers/data.helper');

const SearchPage = require('../pageobjects/search.page');

describe('Search Page Tests', () => {
    
    before( () =>{
        
    })

    beforeEach( () => {
        browser.reloadSession();
        SearchPage.open();
    })
    
    it('Search Page 2.a. Click speciality updates URL', () => {
        
        // FÍSICA - LENGUAJE - OCUPACIONAL
        const specialities = defaultSpecialities();
        
        for (speciality of specialities){
            // Search speciality by its name and clicks the desired link
            SearchPage.clickSpecialityByName(speciality.name);
            // Assert the URL contains the expected speciality
            expect(browser).toHaveUrlContaining(speciality.url)
        }
    });


    it('Search Page 2.b. Search for Maria updates existing results and locates her', () => {
        
        const user = defaultUser();
        // Validates the first result is not user to be searched
        expect(SearchPage.resultName).not.toHaveTextContaining(user.name)
        // Searches for given user and validates is the first result
        SearchPage.search(user.name);
        expect(SearchPage.resultName).toHaveTextContaining(user.name)
    });

    it('Search Page 2.c. Toggle Map/List view hides/show Map', () => {
        
        const activeClass = 'active';

        // Map view is expected by default
        expect(SearchPage.contenedorMapa).toBeVisible()

        // Clicks on 'List" view and expects icons to be enabled/disable accordingly
        SearchPage.listView();
        expect(SearchPage.linkLista).not.toHaveAttributeContaining('class', activeClass)
        expect(SearchPage.linkMapa).toHaveAttributeContaining('class', activeClass)
        // Validates map is not visible
        expect(SearchPage.contenedorMapa).not.toBeVisible()

        // Clicks on 'Map" view and expects icons to be enabled/disable accordingly
        SearchPage.mapView();
        expect(SearchPage.linkMapa).not.toHaveAttributeContaining('class', activeClass)
        expect(SearchPage.linkLista).toHaveAttributeContaining('class', activeClass)
        // Validates map is visible
        expect(SearchPage.contenedorMapa).toBeVisible()        
    });
});


