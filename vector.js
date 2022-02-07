class Vec{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(vector){
        let newVectorX = this.x + vector.x;
        let newVectorY = this.y + vector.y;
        const vector1 = new Vec(newVectorX, newVectorY);
        return vector1;
    }

    minus(vector){
        let newVectorX = this.x - vector.x;
        let newVectorY = this.y - vector.y;
        const vector2 = new Vec(newVectorX, newVectorY);
        return vector2;
    }

    get vectorLength(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

}