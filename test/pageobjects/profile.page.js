const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage extends Page {
    /**
     * define selectors using getter methods
     */
    // Profile Page container
    get containerProfilePage () {return $('main > div.container') }

    openMariaProfile () {
        //https://develop.terapeutica.digital/#/search?sp=all
        return super.open('#/specialist/37378b04-4b69-452e-9fad-e83959388f41');
    }
}

module.exports = new ProfilePage();
