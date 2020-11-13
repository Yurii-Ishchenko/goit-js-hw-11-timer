const refs = {
    
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]')
}


class CountdownTimer {
    constructor({ targetDate }) {
        this.targetDate = targetDate;
        this.init();
    }

    init() {
        this.getDeltaTime();
        setInterval(() => {
            this.getDeltaTime();
        }, 1000);
    }

    getDeltaTime() {
        const currentTime = Date.now();
        const deltaTime = this.targetDate - currentTime;
        this.getTimeComponents(deltaTime);
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        this.updateClockface(days, hours, mins, secs);
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

    updateClockface(days, hours, mins, secs) {
        const time = `${days}${hours}${mins}${secs}`;
        console.log(time);
    
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.mins.textContent = `${mins}`;
        refs.secs.textContent = `${secs}`;
        
    }

}



const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});