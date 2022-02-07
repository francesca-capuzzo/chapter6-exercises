class Group{
    constructor(){
    this.array = [];
    }

    add(value){
        if (!this.array.includes(value)) {
            this.array.push(value);
        }
        return this.array;
    }

    delete(value){
        return this.array.filter(v => v !== value);
    }

    has(value){
        if (!this.array.includes(value)) {
            return false;
        }
        return true;
    }

    static from(element){
        const newGroup = new Group;
        for (const value of element) {
           newGroup.add(value);
       }
       return newGroup;
    }
}