class Vec{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    add(v2){
        return [this.x + v2.x, this.y + v2.y, this.z + v2.z];
    }
    sub(v2){
        return [this.x - v2.x, this.y - v2.y, this.z - v2.z];
    }
    dot(v2){
        return [this.x * v2.x, this.y * v2.y, this.z - v2.z];
    }
    neg(){
        return [this.x * (-1), this.y * (-1), this.z * (-1)];
    }
}

module.exports = Vec;