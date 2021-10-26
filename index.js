class CountdownTimer  {
    constructor({targetDate, selector}) {
        this.targetDate = targetDate;

        this.selector = document.querySelector(selector);
        this.days = this.selector.querySelector('[data-value="days"]');
        this.hours = this.selector.querySelector('[data-value="hours"]');
        this.minutes = this.selector.querySelector('[data-value="mins"]');
        this.seconds = this.selector.querySelector('[data-value="secs"]');
  }
  
  init() {
    const currentTime = Date.now();
    const deltaTime = this.targetDate - currentTime;
    const time = this.getTimeComponents(deltaTime);
    this.updateTimer(time);
  }

  start() {
    this.init();
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const time = this.getTimeComponents(deltaTime);
            this.updateTimer(time);
        },
        1000)
    }

    pad(value) {
    return String(value).padStart(2, '0');
    }
    
    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs }
    }
    
    updateTimer ({ days, hours, mins, secs }) {
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.minutes.textContent = mins;
    this.seconds.textContent = secs;
    }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 19, 2021'),
});

timer.start();