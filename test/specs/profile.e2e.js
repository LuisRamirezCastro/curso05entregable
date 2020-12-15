//const { defaultUser, defaultSpecialities } = require('../helpers/data.helper');

const HomePage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');

// describe('Profile Page Tests', () => {
    
//     before( () =>{
        
//     })

//     beforeEach( () => {
//         //browser.reloadSession();
//         //HomePage.open();
//     })
    
//     it.skip('Profile Page 1.a. Webservice is called when entering profile page', () => {
        
//         console.log('//- - - - - > TODO')        
//     });
// });

describe('Validating Network logs',()=>{
    it.skip('Capturing network logs',()=>{
        browser.cdp('Network', 'enable')
        browser.on('Network.responseReceived', (params) => {
            console.log('\n\n- - - - - - - - PARAMS - - - - - - - -')
            console.log(params.response.url);
            console.log('- - - - - - END OF PARAMS- - - - - - -\n\n')
        })
         browser.url('https://www.google.com');
    })
});

describe('Capture events', () => {
    it('capture the events from browser', () => {
    browser.url('https://develop.terapeutica.digital/#/search?q=Maria');
    
    // This will start the intercept service and will capture the events
    // for the actions performed in website
    browser.setupInterceptor(); 
    
    browser.expectRequest(
        'POST', 
        'https://javito-stage.herokuapp.com/v1/specialists/search', 
        200); // expect GET request to /api/foo with 200 statusCode
    
    //Request URL: 
    //Request Method: GET
    //Status Code: 200 OK
    browser.expectRequest(
        'GET', 
        'https://javito-stage.herokuapp.com/v1/specialist/37378b04-4b69-452e-9fad-e83959388f41', 
        200); // expect GET request to /api/foo with 200 statusCode
    console.log('- - INTERCEPTOR SET - -\n\n')

    //https://develop.terapeutica.digital/#/specialist/37378b04-4b69-452e-9fad-e83959388f41
    
    $('.strip_list > a').click();
    //$("//button[@onclick='throwReferenceError()']").click();
    
    browser.pause(1000); // maybe wait a bit until request is finished
    browser.assertRequests(); // validate the requests
    console.log('- - Assert Requests - -\n\n')

    // All the events will get stored in a list format
    //var request = browser.getRequests();    
    
    console.log('- - Asserts - -\n\n')

    //var request = browser.getRequest(1);
    //assert.equal(request.method, 'GET');
    //assert.equal(request.url, 'https://javito-stage.herokuapp.com/v1/specialist/37378b04-4b69-452e-9fad-e83959388f41');
    //assert.equal(request.response.headers['content-length'], '848');

    // This will print the body of the first event captured
    // console.log(request);
    // console.log('- - - - - - END OF BODY- - - - - - -\n\n')

    // console.log(request[0].body); 
    // console.log('- - - - - - END OF BODY[0]- - - - - - -\n\n')  
    })
});