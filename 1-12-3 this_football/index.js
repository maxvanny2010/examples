const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack: function () {
        const attack = () => {
            console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
        };
        attack();
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} забил гол! Вот это да!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log(sound);
    },
    goToSubstitution: function (newPlayer) {
        console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
    }
};

const attack = footballer.attack.bind(footballer);
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;
attack();
score.call(footballer,'Сиииии');
substitute.apply(footballer,['Paulo Dibala']);