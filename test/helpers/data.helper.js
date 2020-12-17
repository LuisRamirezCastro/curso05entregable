function defaultUser() {
    return {
        name: 'Maria',
    }
};

function defaultSpecialities() {
    return [
        {
            name: "FÍSICA",
            url: "sp=phisical"
        },
        {
            name: 'LENGUAJE',
            url: 'sp=language'
        },
        {
            name: 'OCUPACIONAL',
            url: 'sp=ocupational'
        }
    ]
};

module.exports = { 
    defaultSpecialities, 
    defaultUser 
}