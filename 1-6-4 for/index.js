let index = 3;
while (index--) {
    promter();
}

let indexDo = 0
do {
    promter();
} while (indexDo++ < 3)

function promter() {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`)
    }
}