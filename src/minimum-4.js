console.log("**********Minimum-4***********");
/*
 1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
    4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.  */

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

  count(distance) {
    let t = 0;
    let l = 0;
    let tTotal = 0;
    let tPauses = 0;

    tTotal = Math.round(distance / this["AVG speed"]);
    tPauses = Math.round(tTotal / 4);
    t = tTotal + tPauses;
    l = Math.round((distance * this["combined fuel consumption"]) / 100);

    console.log(tTotal, "h need");
    console.log(tPauses, "h pause need");
    console.log(t, "h total need");
    console.log(l, "l of fuel need");
  },
};

car.count(500);
