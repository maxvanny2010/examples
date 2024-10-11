const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}

const resultFalse = handleObject(student, 'name', 'action');
console.log('ACTION FALSE', resultFalse); // {name: 'Maxim', programmingLanguage: 'JavaScript'}

const resultDelete = handleObject(student, 'programmingLanguage', 'delete');
console.log('ACTION DELETE', resultDelete); // { name: 'Maxim' }

const resultAdd = handleObject(student, 'newField', 'add');
console.log('ACTION ADD', resultAdd); // { name: 'Maxim', newField: '' }

const resultGet = handleObject(student, 'name', 'get');
console.log('ACTION GET', resultGet); // 'Maxim'

function handleObject(obj, key, action) {
    switch (action) {
        case 'get':
            return obj[key];
        case 'add':
            obj[key] = '';
            return obj;
        case 'delete':
            delete obj[key];
            return obj;
        default:
            return obj;
    }
}