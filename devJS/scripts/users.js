const Languaches = ["Javascript", "Python", "Java"]
const Professions = ["Front-end", "Back-end"]

Languaches.push("test")
Languaches.pop("test")

for (let i = 0; i < Languaches.length; i++) {
    console.log(Languaches[i]);
}

for (let profession of Professions){
    console.log(profession);
}

const Users = [
    {name: "Alise", age: 20},
    {name: "Drew", age: 25},
    {name: "Mark", age: 24}
]

console.log(Users);