// Keyed Collections
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections

let months = new Map();

months.set('January', '1월');
months.set('Febrary', '2월');
months.set('March', '3월');

console.log('months :', months);
console.log('size :', months.size);

let jan = months.get('January');
console.log('January :', jan);

let april = months.get('April');
console.log('April :', april);

for (let [key, value] of months) {
    console.log(`key : ${key}, value : ${value}`);
}

let deleteResult = months.delete('March');
console.log(`delete result : ${deleteResult}, March : ${months.get('March')}`);
console.log(`has('Febrary') : ${months.has('Febrary')} has('March') : ${months.has('March')}`)


// Key type!

let numbers = new Map();
numbers.set(1, 'one');
numbers.set(2, 'two');

console.log(`1 : ${numbers.get(1)}, 2 : ${numbers.get(2)}`)


let mixed = new Map();

mixed.set(1, 'one');
mixed.set('one', '일');
mixed.set({num:1}, 'One');

const obj = {num:2};
mixed.set(obj, 'Two');

console.log(`1 : ${mixed.get(1)}`);
console.log(`'one' : ${mixed.get('one')}`);
console.log(`{num:1} : ${mixed.get({num:1})}`);
console.log(`object : ${mixed.get(obj)}`);
