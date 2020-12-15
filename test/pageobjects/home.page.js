const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFisica () { return $('#phisical').$('..') } // //*[@id="custom-search-input"]/ul/li[1]/label
    get inputLenguaje () { return $('#language').$('..') }
    get inputOcupacional () { return $('#ocupational').$('..') }

    get removeOverlay() { return $('div .overlay')}

    get inputBusqueda () { return $('#search-input') }
    get btnBuscar () { return $('.btn_search') }

    get homeContenedor () {return $('div .hero_home')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    search (name) {
        this.inputBusqueda.setValue(name);
        this.btnBuscar.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('#/');
    }
}

module.exports = new HomePage();
