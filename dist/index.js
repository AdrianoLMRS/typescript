"use strict";
let age = 16;
console.log(`Age variable:${age}: ${typeof age}`);
let newAge = age;
while (newAge < 50) {
    newAge += 5;
    console.log(`\n${newAge}`);
}
age = newAge;
console.log(`\nAge variable redefined:\n${age}: ${typeof age}`);
//# sourceMappingURL=index.js.map