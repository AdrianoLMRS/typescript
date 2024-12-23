interface User {
    bYear: number;
    name: string;
    email: string;
  }
  
  const defaultUser: User = {
    bYear: 2008,
    name: 'Adriano',
    email: 'adriano@example.com'
  };  

const main = (user: User, ...args: any[]) => {
  const userArray = [user.bYear, user.name, user.email];
  const other = [...args]; // other arguments

  // log user values
  console.log("User Array:");
  userArray.forEach((value, index) => {
    console.log(`${index}: ${value} (${typeof value})`);
  });

  // add array extra value
  let extraNum: number = Math.floor(Math.random() * 10);
  enum extraArray { number1 = extraNum, number2 = extraNum ** 2, number3 = extraNum ** extraNum };
  userArray.push(extraArray.number1, extraArray.number2, extraArray.number3);
  console.log("\nUser Array After Push:");
  userArray.forEach((value, index) => {
    console.log(`${index}: ${value} (${typeof value})`);
  });

  // ...args
  if (other.length > 0) {
    console.log("\nAdditional Arguments:");
    other.forEach((value, index) => {
      console.log(`${index}: ${value} (${typeof value})`);
    });
  }
}

main(defaultUser, 'asdasdasd', 6969);