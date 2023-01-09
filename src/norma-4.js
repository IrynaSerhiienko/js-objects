console.log("**********Norma-4***********");
/* 1. Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
    4.Зміни часу на передану кількість годин.*/

let numberHours = +prompt("Enter number of hours, pl", "7");

let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();

const time = {
  prompt: numberHours,
  hours: h,
  minutes: m,
  seconds: s,

  addHours(currentH, enterH) {
    d.setHours(this.hours + this.prompt);
    console.log(`Need add ${this.prompt} h`);
    console.log(`Time after added is: ${d}`);
  },

  timeOutputHtmlPage() {
    document.querySelector(".hours").innerHTML = `${this.addLeadingZero(this.hours)}:${this.addLeadingZero(this.minutes)}:${this.addLeadingZero(this.seconds)}`;

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
time.addHours();
time.addLeadingZero();
