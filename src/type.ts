let age: number = 16;

console.log(`Age variable:${age}: ${typeof age}`);

let newAge: number = age;

while (newAge < 50) {
    newAge += 5;
    console.log(`\n${newAge}`);
}

age = newAge;
console.log(`\nAge variable redefined:\n${age}: ${typeof age}`);