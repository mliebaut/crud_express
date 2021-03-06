class Cat {
    constructor(_id, name, color, race) {
        this._id = _id;
        this.name = name;
        this.color = color;
        this.race = race;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name ;
    }

    get race() {
        return this._race;
    }

    set race(race) {
        this._race = race ;
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color ;
    }

    get id() {
        return this._id;
    }

    set id() {
        this._id = _id;
    }
}
export {Cat};