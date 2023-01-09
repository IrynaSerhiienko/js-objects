console.log("**********Norma-3***********");
/* 1. Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
    3.Зміни часу на передану кількість хвилин.*/

let numberMinutes = +prompt("Enter number of minutes, pl", "50");

let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();

const time = {
  prompt: numberMinutes,
  hours: h,
  minutes: m,
  seconds: s,

  addMinutes(currentM, enterM) {
    d.setMinutes(this.minutes + this.prompt);
    console.log(`Need add ${this.prompt} min`);
    console.log(`Time after added is: ${d}`);
  },

  timeOutputHtmlPage() {
    document.querySelector(".minutes").innerHTML = `${this.addLeadingZero(this.hours)}:${this.addLeadingZero(this.minutes)}:${this.addLeadingZero(this.seconds)}`;

    console.log(
      `Now is__ ${this.addLeadingZero(this.hours)}:${this.addLeadingZero(
        this.minutes
      )}:${this.addLeadingZero(this.seconds)}`
    );
  },

  addLeadingZero(d) {
    return d < 10 ? "0" + d : d;
  },
};

time.timeOutputHtmlPage();
time.addMinutes();
time.addLeadingZero();
