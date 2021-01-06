"use strict";

//Task1
// function User(name, age, group) {
//   this.name = name;
//   this.age = age;
//   this.group = group;
//   this.isAdmin = false;

//   this.propList = function () {
//     let properties = [];

//     for (let prop in this) {
//       properties.push(prop);
//     }

//     alert(`Список доступных свойств и методов: ${properties.join(", ")}`);
//   };

//   this.userInf = function () {
//     alert(
//       `Студент по имени ${this.name} имеет возраст - ${
//         this.age
//       }, учится в группе - ${this.group}, статус администратора ${
//         this.isAdmin === false ? "не имеет" : "имеет"
//       }.`
//     );
//   };
// }

// let Masha = new User("Маша", 21, 201);

// Masha.propList();
// Masha.userInf();

//Task 2
function arrayCut(arr) {
  while (arr.length > 1) {
    console.log(`${arr.pop()} осталось [${arr}]`);
  }

  console.log(`${arr[0]}`);
}

arrayCut([1, 2, 3, 4, 5]);
