import { HashMap } from "./hash-map.js";

// Example usage and testing
const testHashMap = new HashMap();

console.log(testHashMap.toString());
console.log(`Initial capacity: ${testHashMap.capacity}`);
console.log(`Initial occupied: ${testHashMap.occupied}`);

const itemsToAdd_1= [
    ['apple', 'red'],
    ['banana', 'yellow'],
    ['carrot', 'orange'],
    ['dog', 'brown'],
    ['elephant', 'gray'],
    ['frog', 'green'],
    ['grape', 'purple'],
    ['hat', 'black'],
    ['ice cream', 'white'],
    ['jacket', 'blue'],

];
    
const itemsToAdd_2 = [
    ['kite', 'pink'],
    ['lion', 'golden'],
    ['mouse', 'white'],
    ['notebook', 'blue'],
    ['orange', 'orange'],
    ['pencil', 'yellow'],
    ['quilt', 'multicolor'],
    ['rabbit', 'white'],
    ['snake', 'green'],
    ['tiger', 'orange'],
    ['umbrella', 'rainbow'],
    ['vase', 'transparent'],
    ['wolf', 'gray'],
    ['xylophone', 'multicolor'],
    ['yacht', 'white'],
    ['zebra', 'black and white']

];

// Add items to the HashMap
itemsToAdd_1.forEach(([key, value]) => testHashMap.set(key, value));
console.log(testHashMap.toString());
console.log(`After adding items - capacity: ${testHashMap.capacity}`);
console.log(`After adding items - occupied: ${testHashMap.occupied}`);

// Add items to the HashMap
itemsToAdd_2.forEach(([key, value]) => testHashMap.set(key, value));
console.log(testHashMap.toString());
console.log(`After adding items - capacity: ${testHashMap.capacity}`);
console.log(`After adding items - occupied: ${testHashMap.occupied}`);


