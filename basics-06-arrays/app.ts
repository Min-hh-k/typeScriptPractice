const person: {
  name: string;
  age: number;
  hobbies: string[];
  like: (string | number)[];
  another: (string | number | boolean)[];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  like: [7, "computer"],
  another: [1, 2, "3", true],
};



let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
