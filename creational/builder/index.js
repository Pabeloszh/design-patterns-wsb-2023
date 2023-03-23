class House {
    constructor() {
        this.rooms = 0;
        this.heating = "";
        this.hasPool = false;
        this.hasGarage = false;
        this.hasGarden = false;
    }
  }
  
  class HouseBuilder {
    constructor() {
        this.house = new House();
    }

    setRooms(numRooms) {
        this.house.rooms = numRooms;
        return this;
    }

    setHeating(heatingType) {
        this.house.heating = heatingType;
        return this;
    }

    setHasPool(hasPool) {
        this.house.hasPool = hasPool;
        return this;
    }

    setHasGarage(hasGarage) {
        this.house.hasGarage = hasGarage;
        return this;
    }

    setHasGarden(hasGarden) {
        this.house.hasGarden = hasGarden;
        return this;
    }

    build() {
        return this.house;          
    }
}
  
const myHouse = new HouseBuilder()
    .setRooms(4)
    .setHeating("central")
    .setHasPool(true)
    .setHasGarage(true)
    .setHasGarden(true)
    .build();