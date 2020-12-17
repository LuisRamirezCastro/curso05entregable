const SearchPage = require('../pageobjects/search.page');


describe('Profesional Profile Tests', () => {

    before( () =>{
        
    })

    beforeEach( () => {
        browser.reloadSession();
    })

    it('Professional Profile 3.a. Validate correct webservice is called', () => {

        const professionalProfile = 'https://develop.terapeutica.digital/#/specialist/37378b04-4b69-452e-9fad-e83959388f41'
        const profileRequest = {
            method: "GET",
            url: "https://javito-stage.herokuapp.com/v1/specialist/37378b04-4b69-452e-9fad-e83959388f41",
            statusCode: 200 
        }
        
        // Open Search Page just to have browser ready
        SearchPage.open();
        
        // This will start the intercept service, capture the events performed in website
        browser.setupInterceptor(); 

        // Set the expected requests        
        // browser.expectRequest(
        //     'POST', 
        //     'https://javito-stage.herokuapp.com/v1/specialists/search', 
        //     200);
        
        // Expected request to retrieve 'professional profile'
        browser.expectRequest(
            'GET', 
            'https://javito-stage.herokuapp.com/v1/specialist/37378b04-4b69-452e-9fad-e83959388f41', 
            200);

        // Navigates to the given 'professional profile' (FORCED load to avoid person search)    
        browser.url(professionalProfile);
        // Wait until requests are finished
        browser.pause(2000); 
        // validates all the expected requests
        //browser.assertRequests(); 

        // Assert ONLY the defined 'expectedRequest' 
        browser.assertExpectedRequestsOnly()

        // Additional assertions using 'expect'
        var request = browser.getRequest(1)
        expect(request.url).toBe(profileRequest.url);
        expect(request.method).toBe(profileRequest.method);
        expect(request.response.statusCode).toBe(profileRequest.statusCode)    
    });  
});

// describe('Validating Network logs',()=>{
//     it.skip('Capturing network logs',()=>{
//         browser.cdp('Network', 'enable')
//         browser.on('Network.responseReceived', (params) => {
//             console.log('\n\n- - - - - - - - PARAMS - - - - - - - -')
//             console.log(params.response.url);
//             console.log('- - - - - - END OF PARAMS- - - - - - -\n\n')
//         })
//          browser.url('https://www.google.com');
//     })
// });