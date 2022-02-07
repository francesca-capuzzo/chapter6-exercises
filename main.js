const firstVector = new Vec(6, 9);
const secondVector = new Vec(2, 5);

console.log(firstVector.plus(secondVector));
console.log(firstVector.minus(secondVector));

console.log(firstVector.vectorLength);
console.log(secondVector.vectorLength);

const group = Group.from([10, 20]);

console.log(group.add(15));
console.log(group.add(15));

console.log(group.delete(10));
console.log(group.has(17));
//console.log(group.has(10)); ---> return TRUE ma non dovrebbe.

// console.log(group.from(40));