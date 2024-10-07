const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2040',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2041',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2039',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2010',
    },
];

function allowVisa(array) {
    if (!Array.isArray(array) || array.length < 1) return [];
    return array.filter(user => {
        const [day, month, year] = user.passportExpiration.split('.');
        let dateExpiration = new Date(`${year}-${month}-${day}`);

        return !user.criminalRecord && dateExpiration.getTime() > Date.now()
    });

}

const result = allowVisa(peopleWithVisa);
console.log('result', result);