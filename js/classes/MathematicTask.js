class MathematicTask {
    constructor() {
        this.a = _.random(50);
        this.b = _.random(50);
        this.operator = _.sample(['+', '-', '*']);
    }
}

export {MathematicTask};