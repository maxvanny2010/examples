const student = {
    level: 1,
    stack: ['HTML'],
    improveLevel() {
        this.level++;
        switch (this.level) {
            case 2:
                this.stack.push('CSS');
                break;
            case 3:
                this.stack.push('JavaScript');
                break;
            case 4:
                this.stack.push('React');
                break;
            case 5: {
                this.stack.push('NodeJS');
                alert('Студент выучил все технологии!')
                break;
            }
        }
        return this;
    }
};

student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel();
console.log(student.stack);