export class Cat {
    constructor(name, color, breed){
        this.name = name;
        this.color = color;
        this.breed = breed;
    }
    getData() {
        return `Name: ${this.name}, Color: ${this.color}, Breed: ${this.breed}`;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }
}