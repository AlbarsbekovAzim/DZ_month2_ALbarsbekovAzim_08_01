class Transport {
    constructor(material, engineVoice) {
        this.material = material;
        this.engineVoice = engineVoice;
    }

    startEngine(){
        console.log(this.engineVoice)
    }
}
const transport = new Transport('jelezo', "vrrrr")
transport.startEngine()

class Car extends Transport{
    constructor(material, engineVoice, wheels) {
        super(material, engineVoice);
        this.wheels = wheels
    }
    startEngine() {
        console.log(this.engineVoice)
    }
}
const car = new Car('jelezo', "vrrummm", 4)
car.startEngine()