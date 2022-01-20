class Observer {
  update(event) {
    if (this.eventIsRelevant(event)) {
      this.reactToEvent(event);
    }
  }

  eventIsRelevant(event) {
    throw new Error("Must be implemented");
  }

  reactToEvent(event) {
    throw new Error("Must be implemented");
  }
}

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(obj) {
    this.observers.push(obj);
  }

  notifyObservers(event) {
    this.observers.forEach((obs) => obs.update(event));
  }
}

class OddModifier extends Observer {
  constructor() {
    super();
  }

  eventIsRelevant(event) {
    return event.eventName === "change-number" && event.value % 2 != 0;
  }

  reactToEvent(event) {
    console.log("----------------------");
    console.log("Odd number found!");
    console.log(event.value);
    console.log("----------------------");
  }
}

class Logger extends Subject {
  constructor(start, end) {
    super();
    this.start = start;
    this.current = start;
    this.end = end;
  }

  run() {
    for (this.current = this.start; this.current < this.end; this.current++) {
      this.notifyObservers({
        eventName: "change-number",
        value: this.current,
      });
    }
  }
}

const l = new Logger(1, 1000);
l.addObserver(new OddModifier());
l.run();
