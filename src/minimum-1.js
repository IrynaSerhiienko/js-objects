console.log("**********Minimum-1***********");
/* 
1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
    1. Метод, який виводить на екран інформацію про автомобіль. */

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

  info() {
    console.log(car);
    return car;
  },
};

car.info();
