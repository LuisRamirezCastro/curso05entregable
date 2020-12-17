const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    // Specialities
    get inputPhisical () { return $('#phisical').$('..') }
    get inputLanguage () { return $('#language').$('..') }
    get inputOcupational () { return $('#ocupational').$('..') }
    // Element outside overlay
    get removeOverlay() { return $('div.overlay')}
    // Search elements
    get inputBusqueda () { return $('#search-input') }
    get btnBuscar () { return $('input.btn_search') }
    // Page container
    get homeContenedor () {return $('div.hero_home')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
     // SEARCHES
    search (name) {
        this.inputBusqueda.setValue(name);
        this.btnBuscar.click(); 
    }
    searchNoText () {
        //this.inputBusqueda.setValue('');
        this.btnBuscar.click(); 
    }
    // SPECIALITIES SELECTION
    selectPhisicalSpeciality(){
        this.inputPhisical.click();
    }
    selectLanguajeSpeciality(){
        this.inputLanguage.click();
    }
    selectOcupationalSpeciality(){
        this.inputOcupational.click();
    }
    // OVERLAY MANAGEMENT
    removeFocus(){
        this.removeOverlay.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('#/');
    }
}

module.exports = new HomePage();
