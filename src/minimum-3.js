console.log("**********Minimum-3***********");
/*
1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
    3. Метод перевірки водія на наявність його ім’я у списку */

const car = {
  brand: "CUPRA",
  model: "CUPRA Formentor",
  "production year": 2022,
  "AVG speed": 60,
  "fuel tank capacity": 80,
  "combined fuel consumption": 7,

  drivers: {
    0: "Ivan",
    1: "Dan",
    2: "Sergey",
  },

  checkIn(name) {
    if (name in this.drivers) {
      console.log(this.drivers[name]);
      return this.drivers[name];
    }
  },

  checkUndefine(name) {
    if (this.drivers[name]) {
      console.log(this.drivers[name]);
      return this.drivers[name];
    }
  },
};

car.checkIn(2);
car.checkUndefine(0);
