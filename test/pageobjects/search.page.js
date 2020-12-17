const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    // Search elements
    get inputBusqueda () { return $('div .search_bar_list').$('.form-control') }
    get btnBuscar () { return $('div .search_bar_list').$('[value="Buscar"]') }
    // Map elements
    get linkLista () { return $('i.icon-th-list').$('..') }
    get linkMapa () { return $('i.icon-map-1').$('..') }
    get contenedorMapa () { return $('#map') }
    // Search Page container
    get searchContenedor () {return $('#results') }
    // No results message
    get noResultsMessage () {return $('p=No hay resultados para mostrar.')}
    // Search results' first element
    get resultName () { return $('div.strip_list:nth-child(1)').$('h3') }

    // Specialities
    clickSpecialityByName(name){
        const linkEspecialidad = '=[name]';
        $(linkEspecialidad.replace('[name]', name)).click();
    }
    // Map or List view
    mapView(){
        this.linkMapa.click();
    }
    listView(){
        this.linkLista.click();
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
