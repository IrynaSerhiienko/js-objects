(function () {
  const clockContainer = document.querySelector(".clock");

  function updateCLock() {
    clockContainer.innerText = new Date().toLocaleTimeString();
  }

  setInterval(updateCLock, 1000);
})();
