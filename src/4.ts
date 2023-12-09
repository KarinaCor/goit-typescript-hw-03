class Key {
    private signature: number
    constructor(){
        this.signature = Math.random()
    }
    getSignature():number{
        return this.signature
    }
}


class Person extends Key{
    private key: Key
    private name: string

    constructor(key: Key, name: string) {
        super();
        this.key = key;
        this.name = name;
    }
    getKey():Key{
        return this.key
    }

}

abstract class House {
    protected tenants: Person[] = [];
    protected door: boolean;
    protected key: Key;
    
    constructor(door: boolean, key: Key) {
        this.door = door;
        this.key = key;
    }
    
     abstract openDoor(key: Key): void;

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        } else {
            console.log("The door is close.");
        }
    }
}
class MyHouse extends House {
    constructor(key: Key) {
        super(false, key)
    }
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            console.log("Door is open.");
            this.door = true;
        } else {
            console.log("Oopps ,cant open the door.");
        }
    }

}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key, 'Mango');

house.openDoor(person.getKey());
house.comeIn(person);

export {};