const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    // get linkFisica () { return $('=Física') }
    // get linkLenguaje () { return $('=Lenguaje') }
    // get linkOcupacional () { return $('=Ocupacional') }

    get inputBusqueda () { return $('div .search_bar_list').$('.form-control') } // //*[@id="results"]/div/div/div[2]/div/input[1]
    get btnBuscar () { return $('div .search_bar_list').$('[value="Buscar"]') }

    get linkLista () { return $('.icon-th-list').$('..') }
    get linkMapa () { return $('.icon-map-1').$('..') }
    get contenedorMapa () { return $('#map') }

    get searchContenedor () {return $('#results') }

    get resultName () { return $('.strip_list:nth-child(1)').$('h3') } // //*[@id="app"]/div[2]/main/div[3]/div/div/div[1]/h3

    linkEspecialidad = '=[name]';

    btnAddProductToCartByName(name) {
        return $(this.linkEspecialidad.replace('[name]', name))
    }

    getLinkByName(name){
        return $(this.linkEspecialidad.replace('[name]', name))
    }

    getPageUrl(){
        return browser.getUrl
    }


    search (name) {
        this.inputBusqueda.setValue(name);
        this.btnBuscar.click(); 
    }


    open () {
        //https://develop.terapeutica.digital/#/search?sp=all
        return super.open('#/search?sp=all');
    }
}

module.exports = new SearchPage();
