class Logger {
  constructor() {
    if (Logger.instance == null) {
      this.logs = [];
      Logger.instance = this;
    }

    return Logger.instance;
  }

  log(value) {
    this.logs.push(value);
  }

  printLogs() {
    this.logs.forEach(function (log) {
      console.log(`at log: ${log}`);
    });
  }
}

const logger = new Logger();

Object.freeze(logger);

logger.log(1);
logger.log(2);
logger.printLogs();
