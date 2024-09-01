class Timer{

    constructor(duration, onTimeout) {
        this.duration = duration;
        this.onTimeout = onTimeout; //cuando tiempo se agota, ejecuta la funcion
        this.interval = null;
        this.isRunning = false; //muestra si temporizador está en ejecución
        this.remainingTime = duration; // Tiempo restante en segundos
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.interval = setInterval(() => {
                this.remainingTime -= 1;
                if (this.remainingTime <= 0) {
                    this.stop();
                    this.onTimeout();
                }
            }, 1000);
        }
    }

    stop() {
        if (this.isRunning) {
            clearInterval(this.interval);
            this.isRunning = false;
        }
    }

    reset() {
        this.stop();
        this.remainingTime = this.duration;
    }

    getRemainingTime() {
        return this.remainingTime;
    }

}