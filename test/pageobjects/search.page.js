const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    // Search elements
    get inputSearch () { return $('div .search_bar_list').$('.form-control') }
    get btnSearch () { return $('div .search_bar_list').$('[value="Buscar"]') }
    // Map elements
    get linkList () { return $('i.icon-th-list').$('..') }
    get linkMap () { return $('i.icon-map-1').$('..') }
    get containerMap () { return $('#map') }
    // Search Page container
    get containerSearchPage () {return $('#results') }
    // No results message
    get noResultsMessage () {return $('p=No hay resultados para mostrar.')}
    // Search results' first element
    get firstResultName () { return $('div.strip_list:nth-child(1)').$('h3') }

    // Specialities
    clickSpecialityByName(name){
        const linkEspecialidad = '=[name]';
        $(linkEspecialidad.replace('[name]', name)).click();
    }
    // Map or List view
    mapView(){
        this.linkMap.click();
    }
    listView(){
        this.linkList.click();
    }
    search (name) {
        this.inputSearch.setValue(name);
        this.btnSearch.click(); 
    }

    open () {
        //https://develop.terapeutica.digital/#/search?sp=all
        return super.open('#/search?sp=all');
    }
}

module.exports = new SearchPage();
