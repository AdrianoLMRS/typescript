const main = (...args: any[]) => {
    let numbers: number[] = [1, 2, 3, 4, 5];
    console.log(`${numbers}: ${typeof numbers}`);
    
    let user: [number, string, string] = [args[0], args[1], args[2]]
    user.forEach((index) => {console.log(`\n${index}: ${typeof index}`);})
    
    user.push(69)
    user.forEach((index) => {console.log(`\n${index}: ${typeof index}`);})
}

main(2008, 'Adriano', 'adriano@example.com');