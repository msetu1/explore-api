// JSON-------JavaScript Object Notation 

const user = { id: 1, name: 'halima', job: 'developer' }

const stringified = JSON.stringify(user);
/* console.log(stringified);
console.log(user); */

/* 
{"id":1,"name":"halima","job":"developer"} -----JSON
{ id: 1, name: 'halima', job: 'developer' } -----JS  
*/

const shop = {
    owner: 'halima',
    address: {
        street: 'koriata',
        city: 'dhaka',
        country: 'bangladesh'
    },
    products: ['laptop', 'mous', 'keyboard', 'monitor'],
    revenue: 56000,
    isOpen: 'true',
    isNew: 'false'
}

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObject = JSON.parse(shopJSON)
console.log(shopObject);