let store = {drivers: [], passengers: [], trips: []};
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor (name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);
  }

  trips () {
    return store.trips.filter(trip => {return trip.driverId === this.id})
  }

  passengers () {
    return this.trips().map (function (trip) {return trip.passenger();
    });
  }
}

class Passenger {
  constructor (name) {
    this.name = name;
    this.id = ++passengerId;

    store.passengers.push(this);
  }

  trips () {
    return store.trips.filter(trip => {return trip.passengerId === this.id})
  }

  drivers () {
    //console.log (this.trips()[0].passenger())
    return this.trips().map (function (trip) {return trip.driver();
    });
  }
}

class Trip {
  constructor (driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripId;

    store.trips.push(this);
  }

  passenger () {
    const passId = this.passengerId;
    return store.passengers.find(function(passenger){
      return passenger.id === passId
    });
  }

  driver () {
    const drivId = this.driverId;
    return store.drivers.find(function(driver){
      return driver.id === drivId
    });
  }
}
