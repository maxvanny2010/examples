class CarService {
    static DefaultWorkingHours = {
        from: '9:00',
        till: '20:00',
    }

    constructor(name, workingHours = CarService.DefaultWorkingHours) {
        this.name = name;
        this.workingHours = workingHours;
    }

    repairCar(carName) {
        if (!carName) console.error('Вам необходимо указать название машины, чтобы ее отремонтировать');
        else {
            let startDay = +this.workingHours.from.split(':')[0];
            let finishDay = +this.workingHours.till.split(':')[0];
            let visitHour = new Date().getHours();
            if (visitHour >= startDay && visitHour < finishDay)
                console.log(`Сейчас отремонтируем вашу машину ${carName}`);
            else console.log('К сожалению, мы сейчас закрыты. Приходите завтра');
        }
    }
}

const carService = new CarService('RepairCarNow', {from: '8:00', till: '20:00'});
carService.repairCar('BMW');