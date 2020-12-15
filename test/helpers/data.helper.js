function defaultUser() {
    return {
        name: 'Maria',
    }
};

function defaultSpecialities() {
    return [
        {
            "name": "FÍSICA",
            "url": "phisical"
        },
        {
            "name": 'LENGUAJE',
            "url": 'language'
        },
        {
            "name": 'Ocupacional',
            "url": 'ocupational'
        }
    ]
};

module.exports = { 
    defaultSpecialities, 
    defaultUser 
}