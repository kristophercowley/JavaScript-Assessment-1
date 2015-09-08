//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	name: 'Jake Overall',
	age: 29,
    'hair color': 'brown'
};
//Dot Notation
me.name = 'Kris Cowley';
me.age = 36;
//Does not work//me.hairColor = 'bro';

//Bracket Notation
me = ['Kris Cowley', 36, 'Brown']

//2. Iterate over the object to console.log the propery or key names.
for(var i = 0; i < me.length; i++){
    console.log(me[i]);
} 