console.log("**********Norma-2***********");
/* 1. Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
    2.Зміни часу на передану кількість секунд.*/

let numberSeconds = +prompt("Enter number of seconds, pl", "40");

let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();

const time = {
  prompt: numberSeconds,
  hours: h,
  minutes: m,
  seconds: s,

  addSeconds(currentS, enterS) {
    d.setSeconds(this.seconds + this.prompt);
    console.log(`Need add ${this.prompt}s`);
    console.log(`Time after added is: ${d}`);
  },

  timeOutputHtmlPage() {
    document.querySelector(".seconds").innerHTML = `${this.addLeadingZero(this.hours)}:${this.addLeadingZero(this.minutes)}:${this.addLeadingZero(this.seconds)}`;

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
time.addSeconds();
time.addLeadingZero();
