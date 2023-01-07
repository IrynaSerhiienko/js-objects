console.log("**********Norma-1***********");
/*1. Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
    1.Для виведення часу на екран.*/

const time = {
  hours: 2,
  minutes: 5,
  seconds: 3,

  addLeadingZero(d) {
    return d < 10 ? "0" + d : d;
  },

  timeOutput(t) {
    //let now = new Date();
    let h = this.addLeadingZero(t.getHours());
    let m = this.addLeadingZero(t.getMinutes());
    let s = this.addLeadingZero(t.getSeconds());
    console.log(
      `${this.addLeadingZero(this.hours)}:${this.addLeadingZero(
        this.minutes
      )}:${this.addLeadingZero(this.seconds)}`
    );
    console.log(`Now is__ ${h}:${m}:${s}`);
    document.querySelector(
      ".time"
    ).innerHTML = `${this.addLeadingZero(t.getHours())}:${this.addLeadingZero(t.getMinutes())}:${this.addLeadingZero(t.getSeconds())}`;
  },
};

time.timeOutput(new Date());
