class BodyArmor {
    usefulFunction() {
      return "The result of the BodyArmor";
    }
  
    usefulFunctionWithWeapon(collaborator) {
      const result = collaborator.usefulFunction();
      return `The result of the BodyArmor collaborating with the (${result})`;
    }
}

class Cloak {
    usefulFunction() {
      return "The result of the Cloak";
    }
  
    usefulFunctionWithWeapon(collaborator) {
      const result = collaborator.usefulFunction();
      return `The result of the Cloak collaborating with the (${result})`;
    }
}

class OrcArmor {
    usefulFunction() {
      return "The result of the OrcArmor";
    }
  
    usefulFunctionWithWeapon(collaborator) {
      const result = collaborator.usefulFunction();
      return `The result of the OrcAmor collaborating with the (${result})`;
    }
}

class Sword  {
    usefulFunction() {
      return "The result of the Sword";
    }
}

class MageFireball  {
    usefulFunction() {
      return "The result of the MageFireball";
    }
}

class Axe  {
    usefulFunction() {
      return "The result of the Axe";
    }
}

class WarriorFactory {
    createWeapon() {
      return new Sword();
    }
  
    createArmor() {
      return new BodyArmor();
    }
}

class MageFactory {
    createWeapon() {
      return new MageFireball();
    }
  
    createArmor() {
      return new Cloak();
    }
}

class OrcFactory {
    createWeapon() {
        return new Axe();
    }

    createArmor() {
        return new OrcArmor();
    }
}


class CharacterAbstractFactory {
    constructor(factory) {
        this.weapon = factory.createWeapon()
        this.armor = factory.createArmor()
    }

    showCharacterInventory() {
        console.log(this.weapon.usefulFunction())
        console.log(this.armor.usefulFunctionWithWeapon(this.weapon))
    }
}

const warrior = new CharacterAbstractFactory(new WarriorFactory())
warrior.showCharacterInventory()